// eslint-disable-next-line no-restricted-imports
import { SnackbarProvider as NotistackProvider } from 'notistack'
import React, { PropsWithChildren } from 'react'

export default function SnackbsarProvider(props: PropsWithChildren) {
  const { children } = props

  return <NotistackProvider maxSnack={5}>{children}</NotistackProvider>
}
