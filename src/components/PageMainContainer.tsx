import React, { PropsWithChildren } from 'react'

import { Container } from '@mui/material'

export default function PageMainContainer(props: PropsWithChildren) {
  const { children } = props

  return (
    <Container component="main" maxWidth="xl" sx={{ py: 3 }}>
      {children}
    </Container>
  )
}
