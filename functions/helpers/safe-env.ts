export function safeEnv(name: string) {
  let value = process.env[name];
  if (!value) {
    throw new Error(`Missing [${name}] environment variable.`);
  }
  return value;
}
