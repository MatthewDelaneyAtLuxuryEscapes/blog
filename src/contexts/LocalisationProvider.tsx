import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { enAU } from 'date-fns/locale'
import React, { PropsWithChildren } from 'react'

export default function LocalisationProvider(props: PropsWithChildren) {
  const { children } = props

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enAU}>
      {children}
    </LocalizationProvider>
  )
}
