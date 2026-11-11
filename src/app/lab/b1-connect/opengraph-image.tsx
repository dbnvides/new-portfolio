import { ImageResponse } from 'next/og'

export const alt = 'B1 Connect · Integrações e automações para SAP Business One'
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
          background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 60%)',
          color: '#0f172a',
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 700, color: '#1d4ed8', marginBottom: 28 }}>B1 Connect</div>
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2, lineHeight: 1.1, maxWidth: 1000 }}>
          Seu SAP Business One conversando com o resto da empresa
        </div>
        <div style={{ fontSize: 30, color: '#475569', marginTop: 28 }}>
          Integrações · Add-ons em C# · Automações · Portais web
        </div>
      </div>
    ),
    size,
  )
}
