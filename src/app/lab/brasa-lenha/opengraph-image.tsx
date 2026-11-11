import { ImageResponse } from 'next/og'

export const alt = 'Brasa & Lenha · Churrasco na lenha em São José dos Campos'
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
          background: 'radial-gradient(ellipse at 50% 120%, #9a3412 0%, #16100d 60%)',
          color: '#f6ead7',
        }}
      >
        <div style={{ fontSize: 28, color: '#e9b44c', marginBottom: 24, letterSpacing: 4 }}>
          CHURRASCO NA LENHA · SÃO JOSÉ DOS CAMPOS
        </div>
        <div style={{ fontSize: 120, fontWeight: 700, letterSpacing: -3 }}>Brasa &amp; Lenha</div>
        <div style={{ fontSize: 34, color: '#c8b6a0', marginTop: 28 }}>Reserve sua mesa pelo WhatsApp</div>
      </div>
    ),
    size,
  )
}
