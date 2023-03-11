'use client'
import React, { PropsWithChildren } from 'react'
import MUIProvider from '~/contexts/MUIProvider'
import QueryProvider from '~/contexts/QueryProvider'
import SnackbarProvider from '~/contexts/SnackbarProvider'
import './base.css'

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <html lang="en" key="root">
      <head>
        <title>LE for Business</title>
      </head>
      <body>
        <QueryProvider>
          <MUIProvider>
            <SnackbarProvider>{children}</SnackbarProvider>
          </MUIProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
