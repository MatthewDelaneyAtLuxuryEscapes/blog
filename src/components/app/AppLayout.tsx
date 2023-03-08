import { Box, Paper, useMediaQuery, useTheme } from '@mui/material'
import React, { PropsWithChildren, useMemo } from 'react'
import useToggleState from '~/hooks/useToggleState'
import AppNavDrawer, { APP_NAV_DRAWER_WIDTH } from './AppNavDrawer'
import AppNavHeader from './AppNavHeader'

export default function AppLayout(props: PropsWithChildren) {
  const theme = useTheme()
  const { children } = props
  const [isDrawerOpen, openDrawer, closeDrawer, toggleDrawer] = useToggleState(true)

  const mainContentTransition = useMemo(
    () =>
      theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    [theme.transitions],
  )

  const isMediaSmAndUp = useMediaQuery(theme.breakpoints.up('sm'))

  const { drawerVariant } = useMemo<{ drawerVariant: 'temporary' | 'persistent' }>(() => {
    return {
      drawerVariant: isMediaSmAndUp ? 'persistent' : 'temporary',
    }
  }, [isMediaSmAndUp])

  return (
    <Paper square elevation={0}>
      <Box display="flex">
        <AppNavDrawer variant={drawerVariant} isOpen={isDrawerOpen} onClose={closeDrawer} />
        <Box
          flexGrow="1"
          sx={{
            ml: !isDrawerOpen && isMediaSmAndUp ? `-${APP_NAV_DRAWER_WIDTH}px` : undefined,
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
