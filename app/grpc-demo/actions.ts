"use server"

import { HelloRequest } from "@/generated/greet";
import { GreeterClient } from "@/generated/greet.client";
import { ChannelCredentials } from "@grpc/grpc-js";
import { GrpcTransport } from "@protobuf-ts/grpc-transport";

// host: '172.17.0.2:8080', 不行
// host: 'localhost:32768', // ok, createInsecure
// host: 'localhost:32769', 
const transport = new GrpcTransport({
  host: 'localhost:32768', // 替換為你的 gRPC 服務地址
  channelCredentials: ChannelCredentials.createInsecure(), // 未加入安全機制
});

// 創建客戶端實例
const client = new GreeterClient(transport);

export async function handleSayHello() {

  const request: HelloRequest = {
    name: 'Smart'
  };

  try {
    const call = client.sayHello(request); 
    const response = await call.response;
    console.info('handleSayHello response →', response)
    return response;
  } catch (error) {
    console.error('handleSayHello error →', error);
    throw error;
  }
}