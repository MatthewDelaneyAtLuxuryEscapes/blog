'use client'
import React, { PropsWithChildren } from 'react'

import DefaultLayout from './DefaultLayout'

export default function DefaultRootLayout(props: PropsWithChildren) {
  const { children } = props

  return <DefaultLayout>{children}</DefaultLayout>
}
