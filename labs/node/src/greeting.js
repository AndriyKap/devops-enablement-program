export function createGreeting(name) {
  const recipient = typeof name === "string" && name.trim() ? name.trim() : "world";
  return `Hello, ${recipient}!`;
}
