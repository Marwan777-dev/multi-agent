import { getInitials } from '../lib/profile.js'

export function ProfileCard({ name, role, bio, stats = [] }) {
  const initials = getInitials(name)

  return (
    <div style={{
      maxWidth: 420,
      margin: '0 auto 32px',
      borderRadius: 12,
      boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
      padding: '32px 28px',
      background: '#fff',
      textAlign: 'center',
    }}>
      <div style={{
        width: 72,
        height: 72,
        borderRadius: '50%',
        background: '#4f6ef7',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28,
        fontWeight: 700,
        margin: '0 auto 16px',
        letterSpacing: 1,
      }}>
        {initials}
      </div>

      {name && (
        <h2 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700, color: '#1a1a2e' }}>
          {name}
        </h2>
      )}

      {role && (
        <p style={{ margin: '0 0 14px', fontSize: 14, color: '#888', fontWeight: 500 }}>
          {role}
        </p>
      )}

      {bio && (
        <p style={{ margin: '0 0 20px', fontSize: 15, color: '#444', lineHeight: 1.6 }}>
          {bio}
        </p>
      )}

      {stats.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
          {stats.map(({ label, value }, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#1a1a2e' }}>{value}</div>
              <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
