import { after } from "next/server";
import { log } from "@/app/utils";

export default function About() {
  console.log("【About】這在伺服端還是在客戶端？");

  after(() => {
    // Execute after the layout is rendered and sent to the user
    log('ON:About.after');
  });

  return (
    <div>
      <h1>關於我</h1>
    </div>
  )
}

