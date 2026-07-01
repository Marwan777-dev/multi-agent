import { describe, it, expect } from 'vitest'
import { pluralize } from './pluralize.js'

describe('pluralize', () => {
  it('returns the word unchanged when count is 1', () => {
    expect(pluralize('task', 1)).toBe('task')
  })

  it('returns the pluralized word when count is 2', () => {
    expect(pluralize('task', 2)).toBe('tasks')
  })

  it('returns the pluralized word when count is 0', () => {
    expect(pluralize('task', 0)).toBe('tasks')
  })

  it('returns the pluralized word when count is negative', () => {
    expect(pluralize('task', -1)).toBe('tasks')
  })

  it('returns the pluralized word when count is a decimal', () => {
    expect(pluralize('task', 1.5)).toBe('tasks')
  })

  it('returns "s" when word is an empty string and count is not 1', () => {
    expect(pluralize('', 2)).toBe('s')
  })

  it('returns an empty string when word is an empty string and count is 1', () => {
    expect(pluralize('', 1)).toBe('')
  })

  it('returns an empty string when word is undefined', () => {
    expect(pluralize(undefined, 2)).toBe('')
  })

  it('returns an empty string when word is null', () => {
    expect(pluralize(null, 2)).toBe('')
  })

  it('returns the pluralized word when count is undefined', () => {
    expect(pluralize('task', undefined)).toBe('tasks')
  })

  it('returns the pluralized word when count is NaN', () => {
    expect(pluralize('task', NaN)).toBe('tasks')
  })
})
