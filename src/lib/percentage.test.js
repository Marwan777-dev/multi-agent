import { describe, it, expect } from 'vitest'
import { percentage } from './percentage.js'

describe('percentage', () => {
  it('calculates a simple percentage', () => {
    expect(percentage(1, 4)).toBe(25)
  })

  it('rounds up when needed', () => {
    expect(percentage(2, 3)).toBe(67)
  })

  it('rounds down when needed', () => {
    expect(percentage(1, 3)).toBe(33)
  })

  it('returns 100 when part equals total', () => {
    expect(percentage(5, 5)).toBe(100)
  })

  it('returns 0 when part is 0', () => {
    expect(percentage(0, 10)).toBe(0)
  })

  it('does not crash when total is 0', () => {
    expect(percentage(1, 0)).toBe(0)
  })

  it('does not crash when total is undefined', () => {
    expect(percentage(1)).toBe(0)
  })

  it('does not crash when total is null', () => {
    expect(percentage(1, null)).toBe(0)
  })

  it('returns 0 when part is undefined', () => {
    expect(percentage(undefined, 10)).toBe(0)
  })

  it('returns 0 when part is null', () => {
    expect(percentage(null, 10)).toBe(0)
  })

  it('clamps results above 100', () => {
    expect(percentage(20, 10)).toBe(100)
  })

  it('clamps negative results to 0', () => {
    expect(percentage(-5, 10)).toBe(0)
  })
})
