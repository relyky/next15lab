import { NextResponse } from "next/server";

/// 只是...授權檢驗等等的實在懶得再學一套。
export async function GET() {
  const info =
  {
    status: "Healthy",
    checks: [
      {
        name: "Database",
        status: "Healthy",
        description: "Database connection is operational."
      },
      {
        name: "Cache",
        status: "Healthy",
        description: "Cache system is responsive."
      },
      {
        name: "ExternalAPI",
        status: "Unhealthy",
        description: "Failed to retrieve response from external API."
      }
    ],
    duration: "00:00:01.234"
  };

  return NextResponse.json(info);
}
