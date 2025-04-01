import type { Metadata } from 'next'
import { Fredoka, Lato } from 'next/font/google'
import './globals.css'
import Provider from './provider'
import { Header } from './_components/Header'

const MyAppFont = Lato({ subsets: ['latin'], weight: '400' })
export const secondFont = Fredoka({ subsets: ['hebrew'], weight: '600' })

export const metadata: Metadata = {
  title: 'Storykid AI',
  description:
    'genera historias para niños y niñas usando inteligencia artificial y abre tu imaginacion',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${MyAppFont.className} bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(72,150,255,0.2),transparent_40%),radial-gradient(circle_at_40%_80%,rgba(255,99,195,0.2),transparent_40%)]`}
      >
        {/* <div className='absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-purple-950/30 dark:via-blue-950/30 dark:to-pink-950/30 z-0' /> */}
        {/* <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(72,150,255,0.2),transparent_40%),radial-gradient(circle_at_40%_80%,rgba(255,99,195,0.2),transparent_40%)] z-10' /> */}
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
