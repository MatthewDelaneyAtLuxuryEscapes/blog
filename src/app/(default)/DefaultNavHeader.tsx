import { AppBar, Avatar, Badge, IconButton, Stack, Toolbar } from '@mui/material'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

interface Props {
  onToggleDrawer: () => void
}

export default function DefaultNavHeader(props: Props) {
  const { onToggleDrawer } = props

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack direction="row" gap={1}>
          <IconButton onClick={onToggleDrawer} sx={{ display: { md: 'none' } }}>
            <MenuRoundedIcon />
          </IconButton>
        </Stack>
        <Stack direction="row" gap={1}>
          <IconButton>
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar>CY</Avatar>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
