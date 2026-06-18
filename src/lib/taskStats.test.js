import { describe, it, expect } from 'vitest'
import { countByStatus, donePercentage } from './taskStats.js'

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

describe('donePercentage', () => {
  it('returns 0 for an empty array', () => {
    expect(donePercentage([])).toBe(0)
  })

  it('returns 100 when all tasks are done', () => {
    const tasks = [
      { id: 1, status: 'done' },
      { id: 2, status: 'done' },
      { id: 3, status: 'done' },
    ]
    expect(donePercentage(tasks)).toBe(100)
  })

  it('returns 0 when no tasks are done', () => {
    const tasks = [
      { id: 1, status: 'todo' },
      { id: 2, status: 'todo' },
      { id: 3, status: 'todo' },
    ]
    expect(donePercentage(tasks)).toBe(0)
  })

  it('returns 40 for 2 done out of 5 tasks', () => {
    const tasks = [
      { id: 1, status: 'done' },
      { id: 2, status: 'done' },
      { id: 3, status: 'todo' },
      { id: 4, status: 'todo' },
      { id: 5, status: 'in-progress' },
    ]
    expect(donePercentage(tasks)).toBe(40)
  })

  it('returns 0 for null', () => {
    expect(donePercentage(null)).toBe(0)
  })

  it('returns 0 for undefined', () => {
    expect(donePercentage(undefined)).toBe(0)
  })
})
