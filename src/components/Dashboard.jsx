import { tasks } from '../data/tasks.js'
import { TaskList } from './TaskList.jsx'
import { TaskStatusChart } from './TaskStatusChart.jsx'
import { ProfileCard } from './ProfileCard.jsx'

export function Dashboard() {
  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '40px auto' }}>
      <h1>Team Dashboard</h1>
      <ProfileCard
        name="Marwan Tarek"
        role="Frontend Developer"
        bio="Building clean, user-friendly interfaces one component at a time."
        stats={[
          { label: 'Tasks', value: 12 },
          { label: 'Done', value: 9 },
          { label: 'In Progress', value: 3 },
        ]}
      />
      <TaskStatusChart tasks={tasks} />
      <TaskList tasks={tasks} />
    </main>
  )
}
