import './globals.css'
import { headers } from 'next/headers'
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

import { cookieToInitialState } from 'wagmi'
import { config } from '@/config'
import Web3ModalProvider from '@/context'

import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: 'Cukka',
  description: 'Transfer to social media!'
}

export default function RootLayout({
  children
}) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body style = {{ backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }} className={cn(
          "min-h-screen bg-background:200 font-sans antialiased",
          fontSans.variable
        )}>
        <Web3ModalProvider initialState={initialState}>{children}</Web3ModalProvider>
        <Toaster />
      </body>
    </html>
  ) 
}