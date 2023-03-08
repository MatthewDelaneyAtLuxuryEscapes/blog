import React from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SxProps,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import WorkRoundedIcon from '@mui/icons-material/WorkRounded'
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded'
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import AppLogo from './AppLogo'

export const APP_NAV_DRAWER_WIDTH = 256

const APP_NAV_DRAWER_SX: SxProps = {
  width: APP_NAV_DRAWER_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: APP_NAV_DRAWER_WIDTH,
    boxSizing: 'border-box',
  },
}

interface Props {
  isOpen: boolean
  variant: 'persistent' | 'temporary'
  onClose: () => void
}

export default function AppNavDrawer(props: Props) {
  const { isOpen, variant, onClose } = props

  return (
    <Drawer open={isOpen} variant={variant} sx={APP_NAV_DRAWER_SX} onClose={onClose}>
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
    </Drawer>
  )
}
