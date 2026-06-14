import { describe, it, expect } from 'vitest'
import { countByStatus, remainingCount } from './taskStats.js'

describe('countByStatus', () => {
  it('returns all-zero counts for an empty array', () => {
    const result = countByStatus([])
    expect(result).toEqual({ todo: 0, 'in-progress': 0, done: 0 })
  })

  it('counts a mixed array correctly', () => {
    const tasks = [
      { id: 1, status: 'done' },
      { id: 2, status: 'in-progress' },
      { id: 3, status: 'in-progress' },
      { id: 4, status: 'todo' },
      { id: 5, status: 'done' },
    ]
    const result = countByStatus(tasks)
    expect(result).toEqual({ todo: 1, 'in-progress': 2, done: 2 })
  })

  it('does not crash when passed null', () => {
    const result = countByStatus(null)
    expect(result).toEqual({ todo: 0, 'in-progress': 0, done: 0 })
  })

  it('does not crash when passed undefined', () => {
    const result = countByStatus(undefined)
    expect(result).toEqual({ todo: 0, 'in-progress': 0, done: 0 })
  })

  it('ignores unknown statuses', () => {
    const tasks = [
      { id: 1, status: 'done' },
      { id: 2, status: 'archived' },
      { id: 3, status: 'blocked' },
    ]
    const result = countByStatus(tasks)
    expect(result).toEqual({ todo: 0, 'in-progress': 0, done: 1 })
  })
})

describe('remainingCount', () => {
  it('returns 0 for an empty array', () => {
    expect(remainingCount([])).toBe(0)
  })

  it('returns 0 when all tasks are done', () => {
    const tasks = [
      { id: 1, status: 'done' },
      { id: 2, status: 'done' },
    ]
    expect(remainingCount(tasks)).toBe(0)
  })

  it('returns the correct count for a mixed array', () => {
    const tasks = [
      { id: 1, status: 'done' },
      { id: 2, status: 'in-progress' },
      { id: 3, status: 'todo' },
      { id: 4, status: 'done' },
    ]
    expect(remainingCount(tasks)).toBe(2)
  })

  it('returns 0 when passed null', () => {
    expect(remainingCount(null)).toBe(0)
  })

  it('returns 0 when passed undefined', () => {
    expect(remainingCount(undefined)).toBe(0)
  })
})
