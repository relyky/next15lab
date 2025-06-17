import { NextResponse } from "next/server";

/// 只是...授權檢驗等等的實在懶得再學一套。
export async function GET() {
  const info = { 
    message: 'hello form api', 
    success: true, 
    time: new Date() 
  };

  return NextResponse.json(info);
}
