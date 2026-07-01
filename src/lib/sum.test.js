import { describe, it, expect } from 'vitest'
import { sum } from './sum.js'

describe('sum', () => {
  it('returns 0 for an empty array', () => {
    const result = sum([])
    expect(result).toBe(0)
  })

  it('returns 0 when passed undefined', () => {
    const result = sum(undefined)
    expect(result).toBe(0)
  })

  it('returns 0 when passed null', () => {
    const result = sum(null)
    expect(result).toBe(0)
  })

  it('sums a list of positive numbers', () => {
    const result = sum([1, 2, 3])
    expect(result).toBe(6)
  })

  it('handles negative numbers', () => {
    const result = sum([5, -2, -1])
    expect(result).toBe(2)
  })

  it('sums a single-element array', () => {
    const result = sum([7])
    expect(result).toBe(7)
  })
})
