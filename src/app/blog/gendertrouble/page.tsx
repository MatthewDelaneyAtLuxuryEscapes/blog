'use client'
import React from 'react'

import { Typography } from '@mui/material'

import PageMainContainer from '~/components/PageMainContainer'

export default function BlogPage() {
  return (
    <PageMainContainer>
      <Typography sx={{ display: 'flex', justifyContent: 'center' }} variant="h3">
        Judith Butler - Gender Trouble
      </Typography>
      <Typography variant="h4">Subjects of Sex/Gender/Desire</Typography>
      <Typography>
        In chapter 1 of Gender Trouble by Judith Butler, she (much like Kant in his{' '}
        <i>Critique of Pure Reason</i>), attempts to examine and breakdown the assumptions she feels
        are limiting feminist discourse. To whit:
      </Typography>
    </PageMainContainer>
  )
}
