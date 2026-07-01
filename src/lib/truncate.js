export function truncate(str, max) {
  if (typeof str !== 'string') {
    return ''
  }

  if (typeof max !== 'number' || Number.isNaN(max)) {
    return str
  }

  if (max <= 0) {
    return ''
  }

  if (str.length <= max) {
    return str
  }

  // The ellipsis counts within `max`, so the returned string never exceeds `max` characters.
  return str.slice(0, max - 1) + '…'
}
