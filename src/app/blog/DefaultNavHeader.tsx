import React from 'react'

import { AppBar, Stack, Toolbar } from '@mui/material'

export default function DefaultNavHeader() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack direction="row" gap={1}></Stack>
      </Toolbar>
    </AppBar>
  )
}
