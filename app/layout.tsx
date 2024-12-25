import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/contexts/theme-context'
import { Header } from '@/components/layout/header'
import '@/public/styles/globals.css'
import CustomCursor from '@/lib/custom-cursor'
import TopNavigationButton from '@/components/top-navigation-btn'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Axtra - Digital Agency',
  description: 'Modern digital agency website template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <CustomCursor/>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
        <TopNavigationButton/>
      </body>
    </html>
  )
}

