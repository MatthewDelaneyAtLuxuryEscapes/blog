'use client'
import React from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import SellOutlinedIcon from '@mui/icons-material/SellOutlined'

export default function Home() {
  return (
    <Container component="main" maxWidth="xl" sx={{ py: 3 }}>
      <Grid container spacing={4} alignItems="stretch" alignContent="stretch">
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
            <Box p={3}>
              <Stack direction={{ xs: 'column', md: 'row' }} gap={3} alignItems="center">
                <Box>
                  <Typography variant="h4" gutterBottom>
                    Carmen, you&apos;re in!
                  </Typography>
                  <Typography variant="body1">
                    Welcome to Business Traveller, where you can effortlessly book and manage your
                    employees business trips. Complete setting up your organisation today,
                  </Typography>
                </Box>
                {/* <Box> */}
                <Card sx={{ p: 2 }}>
                  <Typography variant="overline">ORGANISATION</Typography>
                  <Stack direction="row" gap={1} alignItems="center">
                    <BusinessOutlinedIcon />
                    <Typography variant="h6">Legan entities</Typography>
                  </Stack>
                  <Typography variant="body2">
                    Complete your tax and company information for invoicing purposes.
                  </Typography>
                </Card>
              </Stack>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%' }}>
            <Stack direction="column" justifyContent="space-between" height="100%" py={2} gap={2}>
              <Box px={2}>
                <Typography variant="h6">Book your business travel</Typography>
                <Typography variant="body1">
                  Find flights, hotels and transfers at the best rates for you and your employees.
                </Typography>
              </Box>
              <Box px={2}>
                <Button variant="contained" color="primary" size="large" fullWidth>
                  Get started
                </Button>
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Stack direction="row" gap={1} alignItems="start">
                <Stack flexGrow="1" gap={2}>
                  <BusinessCenterOutlinedIcon fontSize="large" color="primary" />
                  <Stack direction="column" gap={0.5}>
                    <Typography variant="h4">0</Typography>
                    <Typography variant="caption" textTransform="uppercase">
                      Total bookings
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center">
                    <ArrowDropDownIcon fontSize="small" color="error" />
                    <Stack direction="row" gap={0.5}>
                      <Typography variant="caption" color="error">
                        0%
                      </Typography>
                      <Typography variant="caption">last 30 days</Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Stack direction="column" gap={4} height="100%">
            <Card>
              <Stack direction="row" gap={1} alignItems="start" p={2}>
                <Stack direction="row" gap={2} alignItems="center" flexGrow="1">
                  <SellOutlinedIcon fontSize="large" color="primary" />
                  <div>
                    <Typography variant="h6">$0</Typography>
                    <Typography variant="caption" textTransform="uppercase">
                      Total spent
                    </Typography>
                  </div>
                </Stack>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </Stack>
            </Card>

            <Card>
              <Stack direction="row" gap={1} alignItems="start" p={2}>
                <Stack direction="row" gap={2} alignItems="center" flexGrow="1">
                  <SellOutlinedIcon fontSize="large" color="primary" />
                  <div>
                    <Typography variant="h6">$0</Typography>
                    <Typography variant="caption" textTransform="uppercase">
                      Total savings
                    </Typography>
                  </div>
                </Stack>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </Stack>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}
