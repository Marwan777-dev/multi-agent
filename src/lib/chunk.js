export function chunk(arr, size) {
  if (!arr || !Array.isArray(arr)) {
    return []
  }

  if (typeof size !== 'number' || !Number.isFinite(size) || size < 1) {
    return []
  }

  const normalizedSize = Math.floor(size)
  const result = []

  for (let i = 0; i < arr.length; i += normalizedSize) {
    result.push(arr.slice(i, i + normalizedSize))
  }

  return result
}
