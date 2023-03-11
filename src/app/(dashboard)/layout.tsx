'use client'
import React, { PropsWithChildren } from 'react'
import DashboardLayout from './DashboardLayout'

export default function DashboardRootLayout(props: PropsWithChildren) {
  const { children } = props

  return <DashboardLayout>{children}</DashboardLayout>
}
