export function truncate(str, max) {
  if (typeof str !== 'string') {
    return ''
  }

  if (typeof max !== 'number' || Number.isNaN(max) || max <= 0) {
    return ''
  }

  if (str.length <= max) {
    return str
  }

  return `${str.slice(0, max - 1)}…`
}
