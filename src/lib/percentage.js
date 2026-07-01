export function percentage(part, total) {
  if (typeof total !== 'number' || Number.isNaN(total) || total === 0) {
    return 0
  }

  if (typeof part !== 'number' || Number.isNaN(part)) {
    return 0
  }

  const result = Math.round((part / total) * 100)

  return Math.min(100, Math.max(0, result))
}
