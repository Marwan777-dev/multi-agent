import { describe, it, expect } from 'vitest'
import { truncate } from './truncate.js'

describe('truncate', () => {
  it('returns the string unchanged when shorter than max', () => {
    expect(truncate('hello', 10)).toBe('hello')
  })

  it('returns the string unchanged when exactly max length', () => {
    expect(truncate('hello', 5)).toBe('hello')
  })

  it('truncates a string longer than max, appending an ellipsis', () => {
    const result = truncate('hello world', 5)
    expect(result).toBe('hell…')
    expect(result.length).toBe(5)
  })

  it('returns an empty string for empty string input', () => {
    expect(truncate('', 5)).toBe('')
  })

  it('returns an empty string for null input', () => {
    expect(truncate(null, 5)).toBe('')
  })

  it('returns an empty string for undefined input', () => {
    expect(truncate(undefined, 5)).toBe('')
  })

  it('returns an empty string when max is 0', () => {
    expect(truncate('hello', 0)).toBe('')
  })

  it('returns an empty string when max is negative', () => {
    expect(truncate('hello', -3)).toBe('')
  })

  it('returns just the ellipsis when max is 1 and string is longer', () => {
    expect(truncate('hello', 1)).toBe('…')
  })

  it('returns an empty string for non-string input', () => {
    expect(truncate(123, 5)).toBe('')
  })

  it('returns the original string unchanged when max is missing', () => {
    expect(truncate('hello')).toBe('hello')
  })
})
