'use client'
import './blog.css'

import React, { PropsWithChildren } from 'react'

import { Box, Paper, Stack } from '@mui/material'

import DefaultNavHeader from './DefaultNavHeader'

export default function DefaultLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <Paper
      square
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        maxWidth: '100%',
        backgroundColor: 'hsl(210deg, 30%, 8%);',
      }}
    >
      <Stack direction="row">
        <Box flexBasis="100%" maxWidth="100%" flexGrow="1">
          <DefaultNavHeader />
          {children}
        </Box>
      </Stack>
    </Paper>
  )
}
