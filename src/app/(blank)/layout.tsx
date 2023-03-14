'use client'
import { Paper } from '@mui/material'
import React, { PropsWithChildren } from 'react'

export default function BlankRootLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <Paper
      square
      elevation={0}
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100%' }}
    >
      {children}
    </Paper>
  )
}
