'use client'
import React from 'react'

import { Button, Grid, Stack, Typography } from '@mui/material'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'

import PageMainContainer from '~/components/PageMainContainer'

export default function ReportingPage() {
  return (
    <PageMainContainer>
      <Stack direction="row" justifyContent="space-between" gap={3}>
        <Typography variant="h4">Reporting</Typography>
        <Button variant="contained" color="primary" startIcon={<DownloadOutlinedIcon />}>
          Export
        </Button>
      </Stack>
      <Grid container></Grid>
    </PageMainContainer>
  )
}
