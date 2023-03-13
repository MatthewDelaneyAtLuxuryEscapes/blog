'use client'
import { Button, Card, Container, Divider, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import BusinessTravellerLogo from '~/components/BusinessTravellerLogo'

export default function AuthLoginPage() {
  return (
    <Container maxWidth="xs">
      <Card elevation={0}>
        <Stack direction="column" alignItems="start" gap={3} p={5}>
          <BusinessTravellerLogo />
          <Stack direction="column" gap={3}>
            <div>
              <Typography variant="h6">Effortless business travel</Typography>
              <Typography variant="body2">
                Making it easier to manage your business trips.
              </Typography>
            </div>

            <TextField
              label="Email address"
              placeholder="Email"
              helperText="Enter the email you used to register and set up your password."
            />

            <Button variant="contained" color="primary" fullWidth>
              Continue
            </Button>

            <Divider>or</Divider>

            <Stack direction="column" gap={2}>
              <Button variant="outlined" color="primary" fullWidth>
                Continue with Google
              </Button>
              <Button variant="outlined" color="primary" fullWidth>
                Continue with Apple
              </Button>
              <Button variant="outlined" color="primary" fullWidth>
                Continue with Facebook
              </Button>
            </Stack>

            <Typography variant="caption">
              By continuing, you agree to our Terms & Conditions and Privacy Policy, and to
              subscribe to marketing communications for offers, alerts and services..
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </Container>
  )
}
