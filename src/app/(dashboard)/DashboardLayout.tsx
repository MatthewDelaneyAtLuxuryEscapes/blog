'use client'
import { Box, Drawer, Paper, useMediaQuery, useTheme } from '@mui/material'
import React, { PropsWithChildren, useEffect, useMemo } from 'react'
import debounce from 'lodash.debounce'
import useToggleState from '~/hooks/useToggleState'
import DashboardNavDrawerContent from './DashboardNavDrawerContent'
import DashboardNavHeader from './DashboardNavHeader'
import usePrevious from '~/hooks/usePrevious'

export const DASHBOARD_NAV_DRAWER_WIDTH = 256

export default function DashboardLayout(props: PropsWithChildren) {
  const theme = useTheme()
  const isSmAndUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true })
  const wasSmAndUp = usePrevious(isSmAndUp)

  const { children } = props
  const [isDrawerOpen, openDrawer, closeDrawer, toggleDrawer] = useToggleState()

  const mainContentTransition = useMemo(
    () =>
      theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    [theme.transitions],
  )

  useEffect(() => {
    if (!wasSmAndUp && isSmAndUp) {
      openDrawer()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSmAndUp, wasSmAndUp])

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
      sx={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}
    >
      <Box display="flex">
        <Drawer
          open={isDrawerOpen}
          variant="persistent"
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

        <Box
          flexGrow="1"
          sx={{
            ml: {
              md: !isDrawerOpen ? `-${DASHBOARD_NAV_DRAWER_WIDTH}px` : undefined,
            },
            transition: mainContentTransition,
          }}
        >
          <DashboardNavHeader isDrawerOpen={isDrawerOpen} onToggleDrawer={toggleDrawer} />
          {children}
        </Box>
      </Box>
    </Paper>
  )
}
