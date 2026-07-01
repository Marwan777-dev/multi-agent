import { describe, it, expect } from 'vitest'
import { truncate } from './truncate.js'

describe('truncate', () => {
  it('returns string unchanged when shorter than max', () => {
    const result = truncate('hello', 10)
    expect(result).toBe('hello')
  })

  it('returns string unchanged when exactly equal to max', () => {
    const result = truncate('hello', 5)
    expect(result).toBe('hello')
  })

  it('truncates and appends … when longer than max', () => {
    const result = truncate('hello world', 5)
    expect(result).toBe('hell…')
    expect(result.length).toBe(5)
  })

  it('returns just … when max is 1 on a longer string', () => {
    const result = truncate('hello', 1)
    expect(result).toBe('…')
  })

  it('returns empty string for empty string input', () => {
    const result = truncate('', 5)
    expect(result).toBe('')
  })

  it('does not crash when passed null', () => {
    const result = truncate(null, 5)
    expect(result).toBe('')
  })

  it('does not crash when passed undefined', () => {
    const result = truncate(undefined, 5)
    expect(result).toBe('')
  })

  it('does not crash when passed non-string input', () => {
    expect(truncate(12345, 3)).toBe('')
    expect(truncate({}, 3)).toBe('')
  })

  it('returns empty string when max is 0 or negative', () => {
    expect(truncate('hello', 0)).toBe('')
    expect(truncate('hello', -5)).toBe('')
  })

  it('does not crash when max is missing', () => {
    const result = truncate('hello')
    expect(result).toBe('')
  })
})
