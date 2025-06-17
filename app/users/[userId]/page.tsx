import { notFound } from "next/navigation"

interface UserPageProps {
  params: Promise<{
    userId: string
  }>
}

export default async function UserPage(props: UserPageProps) {
  const { userId } = await props.params
  const user = await fetchUserAsync(userId)
  console.log('user', user)

  if (!user) {
    notFound() // 404
  }

  return (
    <div>
      <h1>The users@{userId} information</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

//--------------
async function fetchUserAsync(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  if (!res.ok) return null;
  const user = await res.json();
  return user;
}
