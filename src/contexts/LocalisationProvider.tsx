import React, { PropsWithChildren } from 'react'
import { enAU } from 'date-fns/locale'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

export default function LocalisationProvider(props: PropsWithChildren) {
  const { children } = props

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enAU}>
      {children}
    </LocalizationProvider>
  )
}
