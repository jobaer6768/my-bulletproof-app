import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getUsers } from '../api/getUsers';
import { Card } from '@/components/ui/card';

export const UserLists = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users', search],
    queryFn: getUsers,
    select: (users) => {
      if (!search) return users;
      return users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name..."
        value={search}
        onChange={(e) => setSearchParams({ search: e.target.value })}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />
      <div style={{ display: 'grid', gap: '1rem' }}>
        {users?.map((user) => (
          <Card key={user.id} title={user.name}>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};