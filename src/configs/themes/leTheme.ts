'use client'

import { createTheme, Theme } from '@mui/material/styles'

const leTheme: Theme = createTheme({
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
})

export type LETheme = typeof leTheme

export default leTheme
