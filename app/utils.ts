export function log(message: string) {
  console.log('LOGGER', message)
}

export function delayAsync(ms: number) {
  return new Promise<void>(resolve => setTimeout(resolve, ms));
}
