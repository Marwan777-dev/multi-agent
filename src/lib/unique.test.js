import { describe, it, expect } from 'vitest'
import { unique } from './unique.js'

describe('unique', () => {
  it('returns an empty array for an empty array', () => {
    const result = unique([])
    expect(result).toEqual([])
  })

  it('returns an empty array when passed null', () => {
    const result = unique(null)
    expect(result).toEqual([])
  })

  it('returns an empty array when passed undefined', () => {
    const result = unique(undefined)
    expect(result).toEqual([])
  })

  it('returns an empty array when passed a string', () => {
    const result = unique('abc')
    expect(result).toEqual([])
  })

  it('returns an empty array when passed an object', () => {
    const result = unique({ a: 1 })
    expect(result).toEqual([])
  })

  it('returns the same values and order when there are no duplicates', () => {
    const result = unique([3, 1, 2])
    expect(result).toEqual([3, 1, 2])
  })

  it('dedupes primitive duplicates, preserving first-occurrence order', () => {
    const result = unique([1, 2, 1, 3, 2, 4])
    expect(result).toEqual([1, 2, 3, 4])
  })

  it('dedupes duplicate strings, preserving first-occurrence order', () => {
    const result = unique(['a', 'b', 'a', 'c'])
    expect(result).toEqual(['a', 'b', 'c'])
  })

  it('does not coerce types when comparing mixed types', () => {
    const result = unique([1, '1', 1])
    expect(result).toEqual([1, '1'])
  })

  it('collapses two NaN values into one', () => {
    const result = unique([NaN, NaN])
    expect(result.length).toBe(1)
    expect(Number.isNaN(result[0])).toBe(true)
  })

  it('keeps two distinct objects with identical shape (reference equality)', () => {
    const objA = { id: 1 }
    const objB = { id: 1 }
    const result = unique([objA, objB])
    expect(result).toEqual([objA, objB])
    expect(result.length).toBe(2)
  })

  it('does not mutate the original input array', () => {
    const input = [1, 2, 1, 3]
    const inputCopy = [...input]
    unique(input)
    expect(input).toEqual(inputCopy)
  })
})
