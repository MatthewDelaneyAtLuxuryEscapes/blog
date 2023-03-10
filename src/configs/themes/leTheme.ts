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

  interface PaletteColor {
    darker?: string
    darkest?: string
    lighter?: string
    lightest?: string
  }

  interface SimplePaletteColorOptions {
    darker?: string
    darkest?: string
    lighter?: string
    lightest?: string
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
      dark: blue[600],
      darker: blue[700],
      darkest: blue[900],
      light: blue[400],
      lighter: blue[200],
      lightest: blue[50],
    },
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
