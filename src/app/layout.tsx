'use client'
import debounce from 'lodash.debounce'
import React, { PropsWithChildren, useEffect } from 'react'
import MUIProvider from '~/contexts/MUIProvider'
import QueryProvider from '~/contexts/QueryProvider'
import SnackbarProvider from '~/contexts/SnackbarProvider'
import './base.css'

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props

  useEffect(() => {
    const handleResize = debounce(() => {
      document.documentElement.style.setProperty('--1vh', `calc(${window.innerHeight}px * 0.01)`)
    }, 100)

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
