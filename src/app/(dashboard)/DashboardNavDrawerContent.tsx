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
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined'
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined'
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined'
import BusinessTravellerLogo from '~/components/BusinessTravellerLogo'
import Link from 'next/link'

export default function DashboardNavDrawerContent() {
  const theme = useTheme()

  return (
    <>
      <Toolbar>
        <BusinessTravellerLogo />
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
                <DashboardOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
            <ListItemButton component={Link} href="/reporting">
              <ListItemIcon>
                <AutoGraphOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Reporting</ListItemText>
            </ListItemButton>
            <ListItemButton component={Link} href="/people">
              <ListItemIcon>
                <SupervisorAccountOutlinedIcon />
              </ListItemIcon>
              <ListItemText>People</ListItemText>
            </ListItemButton>
            <ListItemButton component={Link} href="/policies">
              <ListItemIcon>
                <NoteAltOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Policy</ListItemText>
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
