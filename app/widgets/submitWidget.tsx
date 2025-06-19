"use client"

import { useFormStatus } from 'react-dom';

export default function SubmitWidget() {
  const formStatus = useFormStatus();

  return (
    <div>
      <button type="submit" disabled={formStatus.pending}>提交 </button>
    </div>
  )
}