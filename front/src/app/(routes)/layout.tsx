import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.scss'

const rubik = Rubik({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-rubik',
  style: ['italic', 'normal'],
})

export const metadata: Metadata = {
  title: 'TalkHub',
  description:
    "TalkHub is a cutting-edge chat and communication platform designed to bring people closer, whether they're across the street or across the globe.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
