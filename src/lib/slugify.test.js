import { describe, it, expect } from 'vitest'
import { slugify } from './slugify.js'

describe('slugify', () => {
  it('returns an empty string for an empty string', () => {
    const result = slugify('')
    expect(result).toBe('')
  })

  it('returns an empty string when passed null', () => {
    const result = slugify(null)
    expect(result).toBe('')
  })

  it('returns an empty string when passed undefined', () => {
    const result = slugify(undefined)
    expect(result).toBe('')
  })

  it('returns an empty string for non-string input', () => {
    expect(slugify(42)).toBe('')
    expect(slugify({ foo: 'bar' })).toBe('')
  })

  it('collapses multiple internal spaces into a single dash', () => {
    const result = slugify('foo   bar')
    expect(result).toBe('foo-bar')
  })

  it('trims leading/trailing spaces without leaving leading/trailing dashes', () => {
    const result = slugify('  foo bar  ')
    expect(result).toBe('foo-bar')
  })

  it('strips punctuation', () => {
    const result = slugify('Hello, World!')
    expect(result).toBe('hello-world')
  })

  it('leaves an already-slugified string unchanged', () => {
    const result = slugify('already-slugified')
    expect(result).toBe('already-slugified')
  })

  it('retains numbers', () => {
    const result = slugify('Task 42')
    expect(result).toBe('task-42')
  })

  it('lowercases mixed case input', () => {
    const result = slugify('CamelCase Title')
    expect(result).toBe('camelcase-title')
  })

  it('strips underscores instead of converting them to dashes', () => {
    const result = slugify('foo_bar-baz')
    expect(result).toBe('foobar-baz')
  })

  it('returns an empty string when everything is stripped away', () => {
    const result = slugify('!!!')
    expect(result).toBe('')
  })
})
