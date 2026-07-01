export function range(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return []
  }

  if (start > end) {
    return []
  }

  const result = []
  for (let i = start; i <= end; i += 1) {
    result.push(i)
  }

  return result
}
