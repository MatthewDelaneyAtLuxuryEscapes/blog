import React, { PropsWithChildren, useMemo } from 'react'
// eslint-disable-next-line no-restricted-imports
import { SnackbarOrigin, SnackbarProvider as NotistackProvider } from 'notistack'

import { useMediaQuery, useTheme } from '@mui/material'

export default function SnackbsarProvider(props: PropsWithChildren) {
  const { children } = props
  const theme = useTheme()
  const isMdAndUp = useMediaQuery(theme.breakpoints.up('md'))

  const snackbarAnchorOrigin = useMemo<SnackbarOrigin>(() => {
    if (isMdAndUp) {
      return { horizontal: 'right', vertical: 'top' }
    }

    return { horizontal: 'center', vertical: 'bottom' }
  }, [isMdAndUp])

  return (
    <NotistackProvider maxSnack={5} anchorOrigin={snackbarAnchorOrigin}>
      {children}
    </NotistackProvider>
  )
}
