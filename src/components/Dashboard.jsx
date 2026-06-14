import { tasks } from '../data/tasks.js'
import { donePercentage } from '../lib/taskStats.js'
import { TaskList } from './TaskList.jsx'
import { TaskStatusChart } from './TaskStatusChart.jsx'

export function Dashboard() {
  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '40px auto' }}>
      <h1>Team Dashboard</h1>
      <p>{donePercentage(tasks)}% done</p>
      <TaskStatusChart tasks={tasks} />
      <TaskList tasks={tasks} />
    </main>
  )
}
