'use client'
import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import React from 'react'

export default function ReportingPage() {
  return (
    <Container component="main" maxWidth="xl" sx={{ py: 3 }}>
      <Stack direction="row" justifyContent="space-between" gap={3}>
        <Typography variant="h4">Reporting</Typography>
        <Button variant="contained" color="primary" startIcon={<DownloadOutlinedIcon />}>
          Export
        </Button>
      </Stack>
      <Grid container></Grid>
    </Container>
  )
}
