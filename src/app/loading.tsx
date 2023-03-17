'use client'
import React from 'react'

import { CircularProgress, Container } from '@mui/material'

export default function AppLoading() {
  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <CircularProgress />
    </Container>
  )
}
