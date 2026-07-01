import { describe, it, expect } from 'vitest'
import { average } from './average.js'

describe('average', () => {
  it('computes the mean of an array of positive numbers', () => {
    const result = average([1, 2, 3, 4])
    expect(result).toBe(2.5)
  })

  it('returns the single value for a single-element array', () => {
    const result = average([5])
    expect(result).toBe(5)
  })

  it('computes the mean of negative numbers and decimals', () => {
    const result = average([-1.5, 2.5, -3])
    expect(result).toBeCloseTo(-0.6667, 4)
  })

  it('returns 0 for an empty array', () => {
    const result = average([])
    expect(result).toBe(0)
  })

  it('does not crash when passed null', () => {
    const result = average(null)
    expect(result).toBe(0)
  })

  it('does not crash when passed undefined', () => {
    const result = average(undefined)
    expect(result).toBe(0)
  })

  it('does not crash when passed a non-array value', () => {
    const result = average('not an array')
    expect(result).toBe(0)
  })
})
