/* eslint-disable no-magic-numbers */
'use client'

import { common, grey } from '@mui/material/colors'
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
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: common.white,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: 'none',
          boxSizing: 'border-box',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: grey[50],
        },
      },
    },
  },
})

export type LETheme = typeof leTheme

export default leTheme
