import { describe, it, expect } from 'vitest'
import { clamp } from './clamp.js'

describe('clamp', () => {
  it('returns the value unchanged when within range', () => {
    expect(clamp(5, 0, 10)).toBe(5)
  })

  it('clamps to min when value is below range', () => {
    expect(clamp(-5, 0, 10)).toBe(0)
  })

  it('clamps to max when value is above range', () => {
    expect(clamp(15, 0, 10)).toBe(10)
  })

  it('returns the value unchanged at the min boundary', () => {
    expect(clamp(0, 0, 10)).toBe(0)
  })

  it('returns the value unchanged at the max boundary', () => {
    expect(clamp(10, 0, 10)).toBe(10)
  })

  it('swaps min and max when they are misordered', () => {
    expect(clamp(5, 10, 0)).toBe(5)
    expect(clamp(-5, 10, 0)).toBe(0)
    expect(clamp(15, 10, 0)).toBe(10)
  })

  it('handles negative ranges and negative numbers', () => {
    expect(clamp(-5, -10, -1)).toBe(-5)
    expect(clamp(-20, -10, -1)).toBe(-10)
    expect(clamp(0, -10, -1)).toBe(-1)
  })

  it('handles decimal values', () => {
    expect(clamp(1.5, 0, 1)).toBe(1)
    expect(clamp(0.5, 0, 1)).toBe(0.5)
    expect(clamp(-0.5, 0, 1)).toBe(0)
  })

  it('returns n unchanged when n is not a finite number', () => {
    expect(clamp(NaN, 0, 10)).toBe(NaN)
    expect(clamp(Infinity, 0, 10)).toBe(Infinity)
    expect(clamp('5', 0, 10)).toBe('5')
    expect(clamp(null, 0, 10)).toBe(null)
    expect(clamp(undefined, 0, 10)).toBe(undefined)
  })

  it('returns n unchanged when min or max is not a finite number', () => {
    expect(clamp(5, NaN, 10)).toBe(5)
    expect(clamp(5, 0, undefined)).toBe(5)
    expect(clamp(5, '0', 10)).toBe(5)
  })
})
