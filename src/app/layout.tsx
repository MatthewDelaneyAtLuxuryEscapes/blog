'use client'
import React, { PropsWithChildren } from 'react'
import MUIProvider from '~/contexts/MUIProvider'
import AppLayout from './AppLayout'
import './base.css'

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <html lang="en" key="root">
      <head>
        <title>LE for Business</title>
      </head>
      <body>
        <MUIProvider>
          <AppLayout>{children}</AppLayout>
        </MUIProvider>
      </body>
    </html>
  )
}
