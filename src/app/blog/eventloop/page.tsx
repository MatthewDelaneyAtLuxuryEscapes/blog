'use client'
import React from 'react'

import { Typography } from '@mui/material'

import PageMainContainer from '~/components/PageMainContainer'

export default function EventLoopPage() {
  return (
    <PageMainContainer>
      <Typography sx={{ display: 'flex', justifyContent: 'center' }} variant="h3">
        The Javascript Event Loop
      </Typography>
      <Typography fontSize="2rem">Lets get out there and examine the event loop:</Typography>
      <Typography fontSize="2rem">
        The event has a stack, webapi&apos;s, and the callback queue (and a rendering queue). When
        you call an async function, it hits and runs the webapi, and places the function inside the
        async function on the callback queue. It pops the callback queue and places the callback on
        the Call Stack only when the Call Stack is empty.
      </Typography>
      <Typography fontSize="2rem">
        Remember that await basically makes things synchronous, but is non-blocking, importantly.
      </Typography>
    </PageMainContainer>
  )
}
