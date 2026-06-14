import { tasks } from '../data/tasks.js'
import { remainingCount } from '../lib/taskStats.js'
import { TaskList } from './TaskList.jsx'
import { TaskStatusChart } from './TaskStatusChart.jsx'

export function Dashboard() {
  const remaining = remainingCount(tasks)
  const total = tasks.length

  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '40px auto' }}>
      <h1>Team Dashboard</h1>
      <p>{remaining} of {total} tasks remaining</p>
      <TaskStatusChart tasks={tasks} />
      <TaskList tasks={tasks} />
    </main>
  )
}
