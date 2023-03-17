'use client'
import React, { PropsWithChildren } from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { lightTheme } from '~/configs/themes/leTheme'

export default function MUIProvider(props: PropsWithChildren) {
  const { children } = props

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
  )
}
