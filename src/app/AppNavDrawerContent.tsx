import React from 'react'
import {
  alpha,
  Button,
  Card,
  CardActions,
  CardHeader,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  useTheme,
} from '@mui/material'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import WorkRoundedIcon from '@mui/icons-material/WorkRounded'
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded'
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import AppLogo from './AppLogo'
import Link from 'next/link'

export default function AppNavDrawerContent() {
  const theme = useTheme()

  return (
    <>
      <Toolbar>
        <AppLogo />
      </Toolbar>
      <Stack direction="column" gap={2} px={2} pb={4} justifyContent="space-between" height="100%">
        <Stack direction="column" gap={4}>
          <Card elevation={0}>
            <ListItem>
              <ListItemText primary="Luxury Escapes" secondary="Designer" />
            </ListItem>
          </Card>

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
        </Stack>

        <Card elevation={0} sx={{ backgroundColor: alpha(theme.palette.primary.main, 0.08) }}>
          <CardHeader
            title="Book business travel"
            titleTypographyProps={{ variant: 'h6', color: 'primary' }}
            subheader="Find flights, hotels and transfers at the best rates."
            subheaderTypographyProps={{ variant: 'body2' }}
          />
          <CardActions>
            <Button variant="contained" color="neutral" disableElevation fullWidth>
              Get started
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </>
  )
}
