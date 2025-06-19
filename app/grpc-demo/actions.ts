"use server"

import { HelloRequest } from "@/generated/greet";
import { GreeterClient } from "@/generated/greet.client";
import { ChannelCredentials } from "@grpc/grpc-js";
import { GrpcTransport } from "@protobuf-ts/grpc-transport";

const transportInsecure = new GrpcTransport({
  host: 'localhost:32768', // 替換為你的 gRPC 服務地址
  channelCredentials: ChannelCredentials.createInsecure(), // 未加入安全機制
});

const transport = new GrpcTransport({
  host: 'localhost:32769', // 替換為你的 gRPC 服務地址
  channelCredentials: ChannelCredentials.createSsl(), // 使用預設的憑證(但 docker 本身沒有憑證!需額外再配製)
});

// 創建客戶端實例
const client = new GreeterClient(transport);
const clientInsecure = new GreeterClient(transportInsecure);

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

export async function handleSayHelloInsecure() {

  const request: HelloRequest = {
    name: 'Smart (insecure)'
  };

  try {
    const call = clientInsecure.sayHello(request); 
    const response = await call.response;
    console.info('handleSayHello response →', response)
    return response;
  } catch (error) {
    console.error('handleSayHello error →', error);
    throw error;
  }
}