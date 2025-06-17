
export default async function Users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()

  return (
    <div>
      <h1>User List</h1>
      <ul className="pl-4">
        {users.map((user: { id: number, name: string }) => (
          <li key={user.id}>
            <h3>{user.id}: {user.name}</h3>
          </li>
        ))}
      </ul>

    </div>
  )
}