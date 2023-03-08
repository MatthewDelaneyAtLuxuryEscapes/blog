import { Box, Drawer, Paper, useTheme } from '@mui/material'
import React, { PropsWithChildren, useMemo } from 'react'
import useToggleState from '~/hooks/utilities/useToggleState'
import AppNavDrawerContent from './AppNavDrawerContent'
import AppNavHeader from './AppNavHeader'

export const APP_NAV_DRAWER_WIDTH = 256

export default function AppLayout(props: PropsWithChildren) {
  const theme = useTheme()

  const { children } = props
  const [isDrawerOpen, , closeDrawer, toggleDrawer] = useToggleState()

  const mainContentTransition = useMemo(
    () =>
      theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    [theme.transitions],
  )

  return (
    <Paper square elevation={0}>
      <Box display="flex">
        <Drawer
          open={isDrawerOpen}
          variant="persistent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            width: APP_NAV_DRAWER_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: APP_NAV_DRAWER_WIDTH,
              boxSizing: 'border-box',
            },
          }}
        >
          <AppNavDrawerContent />
        </Drawer>
        <Drawer
          open={isDrawerOpen}
          variant="temporary"
          sx={{
            display: { xs: 'block', sm: 'none' },
            width: APP_NAV_DRAWER_WIDTH,
            '& .MuiDrawer-paper': {
              width: APP_NAV_DRAWER_WIDTH,
              boxSizing: 'border-box',
            },
          }}
          onClose={closeDrawer}
        >
          <AppNavDrawerContent />
        </Drawer>
        <Box
          flexGrow="1"
          sx={{
            ml: {
              sm: !isDrawerOpen ? `-${APP_NAV_DRAWER_WIDTH}px` : undefined,
            },
            transition: mainContentTransition,
          }}
        >
          <AppNavHeader isDrawerOpen={isDrawerOpen} onToggleDrawer={toggleDrawer} />
          {children}
        </Box>
      </Box>
    </Paper>
  )
}
