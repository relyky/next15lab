import ButtonWidget from "./buttonWidget"

export default async function Contact() {
  console.log("【Contact】這在伺服端還是在客戶端？")

  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()
  console.log({posts})
  
  return (
    <div>
      <h1 className="text-2xl font-bold">聯絡我</h1>
      <ButtonWidget />
    </div>
  )
}

