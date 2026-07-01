import { describe, it, expect } from 'vitest'
import { capitalize } from './capitalize.js'

describe('capitalize', () => {
  it('capitalizes the first letter of a lowercase word', () => {
    expect(capitalize('hello')).toBe('Hello')
  })

  it('keeps an already-capitalized string correct', () => {
    expect(capitalize('World')).toBe('World')
  })

  it('capitalizes a single-character string', () => {
    expect(capitalize('a')).toBe('A')
  })

  it('only touches the first letter, leaving the rest of the casing untouched', () => {
    expect(capitalize('hELLO')).toBe('HELLO')
  })

  it('returns an empty string for an empty string', () => {
    expect(capitalize('')).toBe('')
  })

  it('returns an empty string when passed null', () => {
    expect(capitalize(null)).toBe('')
  })

  it('returns an empty string when passed undefined', () => {
    expect(capitalize(undefined)).toBe('')
  })

  it('returns an empty string for non-string input without crashing', () => {
    expect(capitalize(42)).toBe('')
    expect(capitalize({})).toBe('')
    expect(capitalize([])).toBe('')
  })
})
