import React from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import WorkRoundedIcon from '@mui/icons-material/WorkRounded'
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded'
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import AppLogo from './AppLogo'
import Link from 'next/link'

export default function AppNavDrawerContent() {
  return (
    <>
      <Toolbar>
        <AppLogo />
      </Toolbar>
      <List>
        <ListItemButton component={Link} href="/">
          <ListItemIcon>
            <DashboardRoundedIcon />
          </ListItemIcon>
          <ListItemText>Reporting</ListItemText>
        </ListItemButton>
        <ListItemButton component={Link} href="/business-trips">
          <ListItemIcon>
            <WorkRoundedIcon />
          </ListItemIcon>
          <ListItemText>Business Trips</ListItemText>
        </ListItemButton>
        <ListItemButton component={Link} href="/people">
          <ListItemIcon>
            <PeopleRoundedIcon />
          </ListItemIcon>
          <ListItemText>People</ListItemText>
        </ListItemButton>
        <ListItemButton component={Link} href="/policies">
          <ListItemIcon>
            <ReceiptRoundedIcon />
          </ListItemIcon>
          <ListItemText>Policy</ListItemText>
        </ListItemButton>
        <ListItemButton component={Link} href="/settings">
          <ListItemIcon>
            <SettingsRoundedIcon />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </ListItemButton>
      </List>
    </>
  )
}
