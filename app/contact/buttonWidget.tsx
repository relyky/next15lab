"use client"

export default function ButtonWidget() {
  return (
    <button
      onClick={() => alert('hello')}
      className="px-2 py-1 border rounded"
    >點我</button>
  )
}