import { describe, it, expect } from 'vitest'
import { greet } from './greet.js'

describe('greet', () => {
  it('greets a valid name', () => {
    const result = greet('Alice')
    expect(result).toBe('Hello, Alice')
  })

  it('falls back for an empty string', () => {
    const result = greet('')
    expect(result).toBe('Hello, there')
  })

  it('falls back for undefined', () => {
    const result = greet(undefined)
    expect(result).toBe('Hello, there')
  })

  it('falls back for null', () => {
    const result = greet(null)
    expect(result).toBe('Hello, there')
  })

  it('falls back for a whitespace-only string', () => {
    const result = greet('   ')
    expect(result).toBe('Hello, there')
  })
})
