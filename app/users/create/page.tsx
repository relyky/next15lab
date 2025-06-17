"use client"
import Form from 'next/form'
import { createUser } from './actions'
import { useActionState } from 'react'

export default function CreateUserPage() {
  return (
    <div>
      <h1>Create User</h1>
      <Form action={createUser}>
        <input type="text" name="name" placeholder="姓名" required />
        <input type="email" name="email" placeholder="電子郵件" required />
        <button type="submit">提交</button>
      </Form>
    </div>
  )
}