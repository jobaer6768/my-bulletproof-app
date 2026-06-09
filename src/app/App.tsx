import { PostLists } from "@/features/posts/components";
import { UserLists } from "@/features/users/components";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>Bulletproof React Demo</h1>
      <UserLists />
      <PostLists />
    </div>
  );
}

export default App;
