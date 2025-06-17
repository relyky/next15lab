"use server"

import { delayAsync } from "@/app/utils";
import { redirect } from "next/navigation";

export async function createUser(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  console.log(`Creating user: ${name}, ${email}`);
  await delayAsync(2000)

  // 假計運算成功
  // 成功轉向新建的 User。
  const newUserId = 7; // 先假設都是7
  redirect(`/users/${newUserId}`);
}

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
