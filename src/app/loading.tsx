'use client'
import { CircularProgress, Container } from '@mui/material'
import React from 'react'

export default function AppLoading() {
  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <CircularProgress />
    </Container>
  )
}
