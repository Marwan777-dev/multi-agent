export function pluralize(word, count) {
  if (typeof word !== 'string') {
    return ''
  }

  if (count === 1) {
    return word
  }

  return `${word}s`
}
