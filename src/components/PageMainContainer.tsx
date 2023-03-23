import '../app/blog/blog.css'

import React, { PropsWithChildren } from 'react'

import { Container } from '@mui/material'

export default function PageMainContainer(props: PropsWithChildren) {
  const { children } = props

  return (
    <Container
      className="wrapper"
      component="main"
      maxWidth="xl"
      sx={{ py: 3, color: 'white', fontSize: '2rem', gap: '1.5rem' }}
    >
      {children}
    </Container>
  )
}
