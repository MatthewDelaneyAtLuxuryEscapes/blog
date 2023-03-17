'use client'
import React, { PropsWithChildren } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { Stack, Tab, Tabs } from '@mui/material'

import PageMainContainer from '~/components/PageMainContainer'

interface TabItem {
  label: string
  value: string
}

const POLICY_TAB_ITEMS: TabItem[] = [
  { label: 'Hotels', value: 'hotels' },
  { label: 'Flights', value: 'flights' },
  { label: 'Transfers', value: 'transfers' },
]

export default function PoliciesLayout(props: PropsWithChildren) {
  const { children } = props
  const policySegment = useSelectedLayoutSegment()

  return (
    <PageMainContainer>
      <Stack gap={4}>
        <Tabs value={policySegment}>
          {POLICY_TAB_ITEMS.map((tab) => (
            <Tab
              key={tab.value}
              value={tab.value}
              label={tab.label}
              component={Link}
              href={`/policies/${tab.value}`}
            />
          ))}
        </Tabs>

        {children}
      </Stack>
    </PageMainContainer>
  )
}
