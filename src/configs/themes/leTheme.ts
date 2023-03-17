'use client'
import { blue, common } from '@mui/material/colors'
import { createTheme, ThemeOptions } from '@mui/material/styles'

import { INTRINSIC_GREY } from './colours'

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

export const lightTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blue[500],
      light: blue[400],
      dark: blue[600],
    },
    neutral: {
      main: common.white,
      light: common.white,
      dark: INTRINSIC_GREY[100],
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
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: '16px',
          },
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '8px 24px 24px',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          '.MuiDialogTitle-root + &': {
            paddingTop: '8px',
          },
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
          backgroundColor: INTRINSIC_GREY[50],
        },
      },
    },
  },
})
