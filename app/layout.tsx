import type { Metadata } from 'next'
import './globals.scss'

import RaxHeader from '@components/header/Header';
import RaxFooter from '@components/footer/Footer';

export const metadata: Metadata = {
  title: 'Raxel Arias | HomePage',
  description: 'The Raxel Arias Homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"></link>
      </head>
      <body>
        {/* Header */}
        <RaxHeader />
        
        {/* Dynamic content */}
        <main>
          {children}
        </main>
        
        {/* FOOTER */}
        <RaxFooter />
      </body>
    </html>
  )
}
