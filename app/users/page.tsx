import Link from "next/link"

export default async function Users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()

  return (
    <div>
      <h1>User List</h1>
      <p>
        <Link href={`/users/create`}>新增 User</Link>
      </p>
      <ul className="pl-4">
        {users.map((user: { id: number, name: string }) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.id}: {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}