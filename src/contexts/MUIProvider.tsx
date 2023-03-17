'use client'
import React, { PropsWithChildren } from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'

import leTheme from '~/configs/themes/leTheme'

export default function MUIProvider(props: PropsWithChildren) {
  const { children } = props

  return (
    <ThemeProvider theme={leTheme}>
      <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
  )
}
