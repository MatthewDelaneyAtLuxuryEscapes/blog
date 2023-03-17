import { describe, expect, it } from 'vitest'

import pluralise, { getPluralisedWord } from './pluralise'

describe('when the count is zero', () => {
  it('should pluralise "user" to "0 users"', () => {
    expect(getPluralisedWord(0, 'user')).toBe('users')
    expect(pluralise(0, 'user')).toBe('0 users')
  })
  it('should pluralise "child" to "0 children"', () => {
    expect(getPluralisedWord(0, 'child')).toBe('children')
    expect(pluralise(0, 'child')).toBe('0 children')
  })
})

describe('when the count is 1', () => {
  it('should pluralise "user" to "1 user"', () => {
    expect(getPluralisedWord(1, 'user')).toBe('user')
    expect(pluralise(1, 'user')).toBe('1 user')
  })
  it('should pluralise "child" to "1 child"', () => {
    expect(getPluralisedWord(1, 'child')).toBe('child')
    expect(pluralise(1, 'child')).toBe('1 child')
  })
})

describe('when the count is bigger than 1 (3)', () => {
  it('should pluralise "user" to "3 users"', () => {
    expect(getPluralisedWord(3, 'user')).toBe('users')
    expect(pluralise(3, 'user')).toBe('3 users')
  })
  it('should pluralise "child" to "3 children"', () => {
    expect(getPluralisedWord(3, 'child')).toBe('children')
    expect(pluralise(3, 'child')).toBe('3 children')
  })
})
