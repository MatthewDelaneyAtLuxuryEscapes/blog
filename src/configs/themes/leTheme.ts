'use client'
import { blue, common, grey } from '@mui/material/colors'
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
    primary: {
      main: blue[500],
      light: blue[400],
      dark: blue[600],
    },
    neutral: {
      main: common.white,
      light: common.white,
      dark: grey[100],
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
      variants: [
        {
          props: { variant: 'contained', color: 'neutral' },
          style: {},
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: common.white,
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '8px 16px 16px',
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
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
