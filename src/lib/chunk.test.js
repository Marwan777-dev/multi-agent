import { describe, it, expect } from 'vitest'
import { chunk } from './chunk.js'

describe('chunk', () => {
  it('chunks a normal array with a remainder', () => {
    const result = chunk([1, 2, 3, 4, 5], 2)
    expect(result).toEqual([[1, 2], [3, 4], [5]])
  })

  it('chunks an array that divides evenly', () => {
    const result = chunk([1, 2, 3, 4], 2)
    expect(result).toEqual([[1, 2], [3, 4]])
  })

  it('returns an empty array for an empty array input', () => {
    const result = chunk([], 2)
    expect(result).toEqual([])
  })

  it('returns an empty array when arr is missing', () => {
    const result = chunk(undefined, 2)
    expect(result).toEqual([])
  })

  it('returns an empty array when arr is null', () => {
    const result = chunk(null, 2)
    expect(result).toEqual([])
  })

  it('returns an empty array for non-array input', () => {
    expect(chunk('abcdef', 2)).toEqual([])
    expect(chunk({ length: 4 }, 2)).toEqual([])
  })

  it('returns an empty array when size is 0', () => {
    const result = chunk([1, 2, 3], 0)
    expect(result).toEqual([])
  })

  it('returns an empty array when size is negative', () => {
    const result = chunk([1, 2, 3], -1)
    expect(result).toEqual([])
  })

  it('returns an empty array when size is missing', () => {
    const result = chunk([1, 2, 3])
    expect(result).toEqual([])
  })

  it('floors a non-integer size that is >= 1', () => {
    const result = chunk([1, 2, 3, 4, 5], 2.5)
    expect(result).toEqual([[1, 2], [3, 4], [5]])
  })

  it('returns a single chunk when size is larger than the array length', () => {
    const result = chunk([1, 2, 3], 10)
    expect(result).toEqual([[1, 2, 3]])
  })

  it('does not mutate the original input array', () => {
    const input = [1, 2, 3, 4, 5]
    const copy = [...input]
    chunk(input, 2)
    expect(input).toEqual(copy)
  })
})
