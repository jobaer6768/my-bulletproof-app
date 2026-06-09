import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/getUsers";
import { Card } from "@/components/ui/card";

export const UserLists = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) return <div>Loading users...</div>;
  if (error) return <div>Error loading users: {error.message}</div>;

  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      {users?.map((user) => (
        <Card key={user.id} title={user.name}>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </Card>
      ))}
    </div>
  );
};
