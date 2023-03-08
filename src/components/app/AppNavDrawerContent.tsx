import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, SxProps, Toolbar } from '@mui/material'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import WorkRoundedIcon from '@mui/icons-material/WorkRounded'
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded'
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import AppLogo from './AppLogo'

export default function AppNavDrawerContent() {
  return (
    <>
      <Toolbar>
        <AppLogo />
      </Toolbar>
      <List>
        <ListItem>
          <ListItemIcon>
            <DashboardRoundedIcon />
          </ListItemIcon>
          <ListItemText>Reporting</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <WorkRoundedIcon />
          </ListItemIcon>
          <ListItemText>Business Trips</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PeopleRoundedIcon />
          </ListItemIcon>
          <ListItemText>People</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ReceiptRoundedIcon />
          </ListItemIcon>
          <ListItemText>Policy</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SettingsRoundedIcon />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </ListItem>
      </List>
    </>
  )
}
