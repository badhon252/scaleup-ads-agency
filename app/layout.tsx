import type { Metadata } from 'next'
import { ThemeProvider } from '@/contexts/theme-context'
import '@/public/styles/globals.css'
import CustomCursor from "@/lib/custom-cursor";
import TopNavigationButton from '@/components/top-navigation-btn'
import { Navbar } from "@/components/nav/navbar"


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
      <body className="font-Kanit">
        <CustomCursor/>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
        <TopNavigationButton/>
      </body>
    </html>
  )
}

