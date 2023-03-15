import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import React, { PropsWithChildren } from 'react'

export default function LocalisationProvider(props: PropsWithChildren) {
  const { children } = props
  return <LocalizationProvider dateAdapter={AdapterDateFns}>{children}</LocalizationProvider>
}
