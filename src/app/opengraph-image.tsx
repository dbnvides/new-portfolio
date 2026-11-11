import { ImageResponse } from 'next/og'
import { profile } from '@/content/profile'

export const alt = `${profile.name} · ${profile.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: 'radial-gradient(circle at 85% 0%, #134e4a 0%, #09090b 55%)',
          color: '#fafafa',
        }}
      >
        <div style={{ fontSize: 28, color: '#5eead4', marginBottom: 24 }}>{profile.role}</div>
        <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
        <div style={{ fontSize: 32, color: '#a1a1aa', marginTop: 28, maxWidth: 980, lineHeight: 1.35 }}>
          {profile.headline}
        </div>
      </div>
    ),
    size,
  )
}
