import { tasks } from '../data/tasks.js'
import { TaskList } from './TaskList.jsx'
import { TaskStatusChart } from './TaskStatusChart.jsx'
import { remainingCount } from '../lib/taskStats.js'

export function Dashboard() {
  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '40px auto' }}>
      <h1>Team Dashboard</h1>
      <TaskStatusChart tasks={tasks} />
      <p>{remainingCount(tasks)} of {tasks.length} tasks remaining</p>
      <TaskList tasks={tasks} />
    </main>
  )
}
