const KNOWN_STATUSES = ['todo', 'in-progress', 'done']

export function countByStatus(tasks) {
  const counts = { todo: 0, 'in-progress': 0, done: 0 }

  if (!tasks || !Array.isArray(tasks)) {
    return counts
  }

  for (const task of tasks) {
    if (KNOWN_STATUSES.includes(task.status)) {
      counts[task.status] += 1
    }
  }

  return counts
}

export function donePercentage(tasks) {
  if (!tasks || !Array.isArray(tasks) || tasks.length === 0) {
    return 0
  }

  const counts = countByStatus(tasks)
  const total = counts.todo + counts['in-progress'] + counts.done

  if (total === 0) {
    return 0
  }

  return Math.round((counts.done / total) * 100)
}
