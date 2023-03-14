'use client'
import { Box, Drawer, Paper, Stack } from '@mui/material'
import { usePathname } from 'next/navigation'
import React, { PropsWithChildren, useEffect } from 'react'
import useToggleState from '~/hooks/useToggleState'
import DefaultNavDrawerContent from './DefaultNavDrawerContent'
import DefaultNavHeader from './DefaultNavHeader'

export const DEFAULT_NAV_DRAWER_WIDTH = 256

export default function DefaultLayout(props: PropsWithChildren) {
  const { children } = props
  const { isToggled: isDrawerOpen, toggleOff: closeDrawer, toggle: toggleDrawer } = useToggleState()
  const pathname = usePathname()

  useEffect(() => {
    closeDrawer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

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
            width: DEFAULT_NAV_DRAWER_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: DEFAULT_NAV_DRAWER_WIDTH,
            },
          }}
        >
          <DefaultNavDrawerContent />
        </Drawer>
        <Drawer
          open={isDrawerOpen}
          variant="temporary"
          sx={{
            display: { xs: 'block', md: 'none' },
            width: DEFAULT_NAV_DRAWER_WIDTH,
            '& .MuiDrawer-paper': {
              width: DEFAULT_NAV_DRAWER_WIDTH,
            },
          }}
          onClose={closeDrawer}
        >
          <DefaultNavDrawerContent />
        </Drawer>

        <Box flexBasis="100%" maxWidth="100%" flexGrow="1">
          <DefaultNavHeader onToggleDrawer={toggleDrawer} />
          {children}
        </Box>
      </Stack>
    </Paper>
  )
}
