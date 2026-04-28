import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const tupperWide = localFont({
  src: './fonts/TupperPROWIDE-Heavy.otf',
  variable: '--font-tupper-wide',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tupperware Card Generator',
  description: 'Generate Tupperware business cards',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={tupperWide.variable}>
      <body>{children}</body>
    </html>
  )
}
