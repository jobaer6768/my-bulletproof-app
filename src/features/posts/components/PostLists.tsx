import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/getPosts";
import { Card } from "@/components/ui/card";

export const PostLists = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return <div>Loading users...</div>;
  if (error) return <div>Error loading users: {error.message}</div>;

  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      {posts?.map((post) => (
        <Card key={post.id} title={post.title}>
          <p>Body: {post.body}</p>
        </Card>
      ))}
    </div>
  );
};
