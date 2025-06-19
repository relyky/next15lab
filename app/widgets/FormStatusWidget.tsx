"use client"
import { useFormStatus } from 'react-dom';

export default function FormStatusWidget() {
  const formStatus = useFormStatus();
  return (
    <div>
      <label>form status</label>
      <pre>{JSON.stringify(formStatus)}</pre>
    </div>
  )
}