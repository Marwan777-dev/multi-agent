export function clamp(n, min, max) {
  if (!Number.isFinite(n) || !Number.isFinite(min) || !Number.isFinite(max)) {
    return n
  }

  const effectiveMin = min > max ? max : min
  const effectiveMax = min > max ? min : max

  return Math.min(Math.max(n, effectiveMin), effectiveMax)
}
