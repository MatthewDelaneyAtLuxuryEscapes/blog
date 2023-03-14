'use client'
import { Box, Drawer, Paper, Stack } from '@mui/material'
import React, { PropsWithChildren, useEffect } from 'react'
import debounce from 'lodash.debounce'
import useToggleState from '~/hooks/useToggleState'
import DashboardNavDrawerContent from './DashboardNavDrawerContent'
import DashboardNavHeader from './DashboardNavHeader'

export const DASHBOARD_NAV_DRAWER_WIDTH = 256

export default function DashboardLayout(props: PropsWithChildren) {
  const { children } = props
  const { isToggled: isDrawerOpen, toggleOff: closeDrawer, toggle: toggleDrawer } = useToggleState()

  useEffect(() => {
    const handleResize = debounce(() => {
      document.documentElement.style.setProperty('--vh', `calc(${window.innerHeight}px * 0.01)`)
    }, 100)

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Paper
      square
      elevation={0}
      sx={{ display: 'flex', flexDirection: 'column', minHeight: '100%', maxWidth: '100%' }}
    >
      <Stack direction="row">
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            width: DASHBOARD_NAV_DRAWER_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: DASHBOARD_NAV_DRAWER_WIDTH,
            },
          }}
        >
          <DashboardNavDrawerContent />
        </Drawer>
        <Drawer
          open={isDrawerOpen}
          variant="temporary"
          sx={{
            display: { xs: 'block', md: 'none' },
            width: DASHBOARD_NAV_DRAWER_WIDTH,
            '& .MuiDrawer-paper': {
              width: DASHBOARD_NAV_DRAWER_WIDTH,
            },
          }}
          onClose={closeDrawer}
        >
          <DashboardNavDrawerContent />
        </Drawer>

        <Box flexBasis="100%" maxWidth="100%" flexGrow="1">
          <DashboardNavHeader onToggleDrawer={toggleDrawer} />
          {children}
        </Box>
      </Stack>
    </Paper>
  )
}
