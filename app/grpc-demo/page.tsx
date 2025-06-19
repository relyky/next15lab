"use client"
import { useState } from "react";
import * as act from "./actions";

export default function GrpcDemo() {
  const [f_loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSayHello() {
    try {
      setMessage('')
      setLoading(true)

      const result = await act.sayHello()
      console.log('ON:handleSayHello →', result)

      setMessage(JSON.stringify(result, null, 2))
    }
    catch (err: unknown) {
      setMessage(JSON.stringify(err, null, 2))
    }
    finally {
      setLoading(false)
    }
  }

  async function handleSayHelloInsecure() {
    try {
      setMessage('')
      setLoading(true)

      const result = await act.sayHelloInsecure()
      console.log('ON:handleSayHelloInsecure →', result)

      setMessage(JSON.stringify(result, null, 2))
    }
    catch (err: unknown) {
      setMessage(JSON.stringify(err, null, 2))
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>gRPC Demo gogo</h1>
      {f_loading && <p className="text-5xl font-bold">Loading...</p>}

      <button className="px-2 py-1 border rounded"
        onClick={handleSayHello}>gRPC sayHello</button>

      <button className="px-2 py-1 border rounded"
        onClick={handleSayHelloInsecure}>gRPC sayHello(insecure)</button>

      <br />
      <label>message</label>
      <pre>{message}</pre>
    </div>
  )
}
