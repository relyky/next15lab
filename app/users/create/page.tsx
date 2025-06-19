"use client"

import Form from 'next/form'
import { createUser, createUser2 } from './actions'
import { useActionState, useEffect } from 'react'
import { redirect } from 'next/navigation';
import SubmitWidget from '@/app/widgets/submitWidget';
import FormStatusWidget from '@/app/widgets/FormStatusWidget';

export default function CreateUserPage() {
  const [state, formAction, isPending] = useActionState(createUser2, null);

  useEffect(() => {
    if (isPending === false && state?.isSuccess) {
      redirect(`/users/${state.newUserId}`);
    }
  }, [state, isPending])

  return (
    <div>
      <h1>Create User</h1>
      {isPending && <p>正在提交...</p>}

      <Form action={formAction}>

        <input type="text" name="name" placeholder="姓名" required />
        <input type="email" name="email" placeholder="電子郵件" required />

        <button type="submit">提交</button>

        <SubmitWidget />
        <FormStatusWidget />
      </Form>
    </div>
  )
}