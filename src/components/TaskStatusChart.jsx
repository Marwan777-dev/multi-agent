import { countByStatus } from '../lib/taskStats.js'

const ROWS = [
  { key: 'todo', label: 'Todo' },
  { key: 'in-progress', label: 'In Progress' },
  { key: 'done', label: 'Done' },
]

export function TaskStatusChart({ tasks }) {
  const counts = countByStatus(tasks)
  const total = counts.todo + counts['in-progress'] + counts.done

  return (
    <div style={{ marginBottom: 24 }}>
      <h2 style={{ marginBottom: 12 }}>Task Status</h2>
      {ROWS.map(({ key, label }) => {
        const count = counts[key]
        const widthPct = total > 0 ? (count / total) * 100 : 0

        return (
          <div key={key} style={{ marginBottom: 8 }}>
            <span style={{ display: 'inline-block', width: 100 }}>{label}</span>
            <div
              style={{
                display: 'inline-block',
                background: '#e0e0e0',
                width: 300,
                height: 18,
                verticalAlign: 'middle',
                borderRadius: 4,
              }}
            >
              <div
                style={{
                  width: `${widthPct}%`,
                  height: '100%',
                  background: '#4a90e2',
                  borderRadius: 4,
                }}
              />
            </div>
            <span style={{ marginLeft: 8 }}>{count}</span>
          </div>
        )
      })}
    </div>
  )
}
