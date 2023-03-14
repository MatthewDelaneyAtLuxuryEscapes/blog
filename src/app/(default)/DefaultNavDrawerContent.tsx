import React, { FunctionComponent } from 'react'
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
  ListSubheader,
  Stack,
  Toolbar,
  useTheme,
} from '@mui/material'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined'
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined'
import BedOutlinedIcon from '@mui/icons-material/BedOutlined'
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined'
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined'
import BusinessTravellerLogo from '~/components/BusinessTravellerLogo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  href: string
  label: string
  Icon: FunctionComponent
}

const MAIN_NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Dashboard', Icon: DashboardOutlinedIcon },
  { href: '/reporting', label: 'Reporting', Icon: AutoGraphOutlinedIcon },
  { href: '/people', label: 'People', Icon: SupervisorAccountOutlinedIcon },
]

const POLICY_NAV_ITEMS: NavItem[] = [
  { href: '/policies/hotels', label: 'Hotels Policy', Icon: BedOutlinedIcon },
  { href: '/policies/flights', label: 'Flights Policy', Icon: FlightOutlinedIcon },
  { href: '/policies/transfers', label: 'Transfers Policy', Icon: AirplaneTicketOutlinedIcon },
]

export default function DefaultNavDrawerContent() {
  const theme = useTheme()
  const pathname = usePathname()

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
            {MAIN_NAV_ITEMS.map((nav) => (
              <ListItemButton
                key={nav.href}
                component={Link}
                href={nav.href}
                selected={pathname === nav.href}
                sx={{ borderRadius: 0.5 }}
              >
                <ListItemIcon>
                  <nav.Icon />
                </ListItemIcon>
                <ListItemText>{nav.label}</ListItemText>
              </ListItemButton>
            ))}
            <ListSubheader disableSticky>Policies</ListSubheader>
            {POLICY_NAV_ITEMS.map((nav) => (
              <ListItemButton
                key={nav.href}
                component={Link}
                href={nav.href}
                selected={pathname === nav.href}
                sx={{ borderRadius: 0.5 }}
              >
                <ListItemIcon>
                  <nav.Icon />
                </ListItemIcon>
                <ListItemText>{nav.label}</ListItemText>
              </ListItemButton>
            ))}
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
