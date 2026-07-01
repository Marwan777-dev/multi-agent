import { tasks } from '../data/tasks.js'
import { TaskList } from './TaskList.jsx'
import { TaskStatusChart } from './TaskStatusChart.jsx'

export function Dashboard() {
  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '40px auto' }}>
      <h1>Team Dashboard</h1>
      <h1>Marwan</h1>
      <TaskStatusChart tasks={tasks} />
      <TaskList tasks={tasks} />
    </main>
  )
}
