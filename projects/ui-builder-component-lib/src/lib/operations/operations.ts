function randomString(length: number = 10): string {
  return Array.from({ length }, () => Math.random().toString(36).charAt(2)).join('');
}
export const CommonOperations = { randomString };
