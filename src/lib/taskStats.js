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

export function remainingCount(tasks) {
  if (!tasks || !Array.isArray(tasks)) {
    return 0
  }

  return tasks.filter(task => task.status !== 'done').length
}
