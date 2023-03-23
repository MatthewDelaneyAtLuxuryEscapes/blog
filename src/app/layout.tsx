'use client'
import './base.css'

import React, { PropsWithChildren, useEffect } from 'react'
import debounce from 'lodash.debounce'

import LocalisationProvider from '~/contexts/LocalisationProvider'
import MUIProvider from '~/contexts/MUIProvider'
import QueryProvider from '~/contexts/QueryProvider'
import SnackbarProvider from '~/contexts/SnackbarProvider'

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
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Matthew Delaney blog</title>
        <link
          rel="icon"
          type="image/svg+xml"
          media="(prefers-color-scheme: light)"
          href="/fork.svg"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
          href="/le-light.svg"
        />
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
