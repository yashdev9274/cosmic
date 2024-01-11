import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import SupabaseProvider from '@/providers/SupabaseProvider'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cosmic',
  description: 'Listen to music!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          
          <Sidebar>
            
            {children}
          </Sidebar>
        </SupabaseProvider>
      </body>
    </html>
  )
}
