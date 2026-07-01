import { describe, it, expect } from 'vitest'
import { range } from './range.js'

describe('range', () => {
  it('returns an ascending range of integers', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5])
  })

  it('returns a single-element array when start equals end', () => {
    expect(range(3, 3)).toEqual([3])
  })

  it('returns an empty array when start is greater than end', () => {
    expect(range(5, 1)).toEqual([])
  })

  it('works with negative numbers', () => {
    expect(range(-3, 2)).toEqual([-3, -2, -1, 0, 1, 2])
  })

  it('returns a single-element array for a zero range', () => {
    expect(range(0, 0)).toEqual([0])
  })

  it('does not crash when passed no arguments', () => {
    expect(range()).toEqual([])
  })

  it('does not crash when passed undefined for both arguments', () => {
    expect(range(undefined, undefined)).toEqual([])
  })

  it('does not crash when passed null', () => {
    expect(range(null, 5)).toEqual([])
  })

  it('does not crash when passed a string', () => {
    expect(range('a', 3)).toEqual([])
  })

  it('returns an empty array for non-integer arguments', () => {
    expect(range(1.5, 3)).toEqual([])
  })
})
