import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { getUsers } from "../api/getUsers";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { UserLists } from "./UserLists";

// Mock the API call
vi.mock("../api/getUsers", () => ({
  getUsers: vi.fn(),
}));

const mockUsers = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    phone: "123",
    website: "alice.dev",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    phone: "456",
    website: "bob.dev",
  },
];

describe("UsersList", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
    vi.mocked(getUsers).mockResolvedValue(mockUsers);
  });

  afterEach(() => {
    queryClient.clear();
    vi.resetAllMocks();
  });

  const renderComponent = () =>
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <UserLists />
        </MemoryRouter>
      </QueryClientProvider>,
    );

  it("displays users after loading", async () => {
    renderComponent();
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Alice")).toBeInTheDocument();
      expect(screen.getByText("Bob")).toBeInTheDocument();
    });
  });

  it("filters users when typing in search box", async () => {
    const user = userEvent.setup();
    renderComponent();
    await waitFor(() => screen.getByText("Alice"));

    const searchInput = screen.getByPlaceholderText(/filter by name/i);
    await user.type(searchInput, "Alice");

    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.queryByText("Bob")).not.toBeInTheDocument();
  });
});
