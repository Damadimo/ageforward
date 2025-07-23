import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgeForward - Accessible Real Estate',
  description: 'Canada\'s premier accessible real estate network. Find wheelchair accessible homes, age-in-place properties, and barrier-free living solutions.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
