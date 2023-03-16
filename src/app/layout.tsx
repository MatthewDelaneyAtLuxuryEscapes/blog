'use client'
import debounce from 'lodash.debounce'
import React, { PropsWithChildren, useEffect } from 'react'
import LocalisationProvider from '~/contexts/LocalisationProvider'
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
        <link
          rel="icon"
          type="image/svg+xml"
          media="(prefers-color-scheme: light)"
          href="/le-dark.svg"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
          href="/le-light.svg"
        />
        {process.env.NODE_ENV === 'development' && (
          <link rel="icon" type="image/svg+xml" href="/le-dev.svg" />
        )}
      </head>
      <body>
        <QueryProvider>
          <LocalisationProvider>
            <MUIProvider>
              <SnackbarProvider>{children}</SnackbarProvider>
            </MUIProvider>
          </LocalisationProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
