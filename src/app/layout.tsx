import type { Metadata, Viewport } from 'next'
import { Geist, Space_Grotesk } from 'next/font/google'
import { profile } from '@/content/profile'
import { siteUrl } from '@/lib/site'
import './globals.css'

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ variable: '--font-space-grotesk', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} · ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.headline,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: profile.name,
  },
}

export const viewport: Viewport = {
  themeColor: '#09090b',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
