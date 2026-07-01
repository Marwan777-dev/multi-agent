const FALLBACK_GREETING = 'Hello, there'

export function greet(name) {
  if (typeof name !== 'string' || name.trim() === '') {
    return FALLBACK_GREETING
  }

  return `Hello, ${name.trim()}`
}
