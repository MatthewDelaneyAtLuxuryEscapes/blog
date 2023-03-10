/* eslint-disable no-magic-numbers */
'use client'

import { common, grey } from '@mui/material/colors'
import { createTheme, Theme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true
  }
}

const leTheme: Theme = createTheme({
  palette: {
    neutral: {
      main: common.white,
      light: common.white,
      dark: grey[200],
      contrastText: common.black,
    },
  },
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
          height: '100%',
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
