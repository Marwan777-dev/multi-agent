import { describe, it, expect } from 'vitest'
import { getInitials } from './profile.js'

describe('getInitials', () => {
  it('returns initials for a two-word name', () => {
    expect(getInitials('Marwan Tarek')).toBe('MT')
  })

  it('returns first letter for a single word', () => {
    expect(getInitials('Marwan')).toBe('M')
  })

  it('handles extra spaces between words', () => {
    expect(getInitials('  Marwan   Tarek  ')).toBe('MT')
  })

  it('returns ? for an empty string', () => {
    expect(getInitials('')).toBe('?')
  })

  it('returns ? for null', () => {
    expect(getInitials(null)).toBe('?')
  })

  it('returns ? for undefined', () => {
    expect(getInitials(undefined)).toBe('?')
  })
})
