"use server"

import { delayAsync } from "@/app/utils";
import { redirect } from "next/navigation";

/// 適用後端 Server Action 計算後立刻轉畫面。
export async function createUser(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  console.log(`Creating user: ${name}, ${email}`);
  await delayAsync(2000)

  // 假計運算成功
  // 成功轉向新建的 User。
  const newUserId = 7; // 先假設都是7
  redirect(`/users/${newUserId}`); //--- 適用後端 Server Action 計算後立刻轉畫面。
}

/// 適用於前端不斷交互
export async function createUser2(previousState: any, formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  console.log(`Creating user: ${name}, ${email}`);
  await delayAsync(2000)

  // 假計運算成功
  // 成功轉向新建的 User。
  return {
    isSuccess: true,
    newUserId: 9,
  }
}
