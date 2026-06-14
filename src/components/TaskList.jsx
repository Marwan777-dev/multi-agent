export function TaskList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return <p>No tasks yet.</p>
  }
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} — <strong>{task.status}</strong>
        </li>
      ))}
    </ul>
  )
}
