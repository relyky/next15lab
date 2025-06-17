
import { delayAsync } from "@/app/utils"
import ButtonWidget from "./buttonWidget"

export default async function Contact() {
  console.log("【Contact】這在伺服端還是在客戶端？")

  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  await delayAsync(2000) // 模擬跑很久
  const posts = await response.json()
  //console.log('posts', posts)

  return (
    <div>
      <h1 className="text-4xl font-bold">聯絡我<small>(畫面載入時是 SSG 渲染模式)</small></h1>
      <ButtonWidget />

      <ul>
        {posts.map((post: { id: number, title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

    </div>
  )
}

