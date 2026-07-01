export function unique(arr) {
  if (!arr || !Array.isArray(arr)) {
    return []
  }

  const seen = new Set()
  const result = []

  for (const item of arr) {
    // Set.has/add use SameValueZero equality, so NaN is treated as equal
    // to NaN here (unlike ===), meaning duplicate NaNs collapse to one.
    if (!seen.has(item)) {
      seen.add(item)
      result.push(item)
    }
  }

  return result
}
