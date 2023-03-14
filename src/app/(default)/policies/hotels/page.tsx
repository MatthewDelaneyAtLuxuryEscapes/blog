'use client'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'

export default function HotelsPolicyPage() {
  return (
    <Stack direction="column" gap={2}>
      <Typography variant="h6">Credit earning</Typography>
      <Card>
        <CardHeader
          title="Earn credits"
          subheader="Allow your employees to earn credits onto their personal Luxury Escapes account from booking their work travel."
        />
        <CardContent>
          <Slider
            defaultValue={20}
            valueLabelDisplay="on"
            valueLabelFormat={(value) => `${value}%`}
            step={5}
            marks
            min={0}
            max={100}
          />
          <Typography variant="subtitle2">Set the percentage of credits</Typography>
        </CardContent>
      </Card>

      <Typography variant="h6">Budget</Typography>
      <Card>
        <CardHeader
          title="Domestic accommodation"
          subheader="Set the budget for employees travelling in their country"
          action={
            <Button variant="outlined" color="primary">
              Add region
            </Button>
          }
        />
        <CardContent>
          <Stack direction="column" gap={2}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
              <Typography variant="h6">Australia</Typography>
              <Button variant="text" color="error">
                Remove
              </Button>
            </Stack>
            <Stack direction="row" gap={3}>
              <FormControl sx={{ width: 220 }}>
                <InputLabel>Currency</InputLabel>
                <Select defaultValue="aud" label="Currency">
                  <MenuItem value="aud">AUD</MenuItem>
                  <MenuItem value="usd">USD</MenuItem>
                </Select>
              </FormControl>
              <TextField label="Budget per night" value="1,000.00" sx={{ width: 220 }} />
            </Stack>
            <Typography variant="subtitle1">
              The typical price for accommodation in Australia is A$500 per night.
            </Typography>

            <Divider />

            <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
              <Typography variant="h6">United States</Typography>
              <Button variant="text" color="error">
                Remove
              </Button>
            </Stack>
            <Stack direction="row" gap={3}>
              <FormControl sx={{ width: 220 }}>
                <InputLabel>Currency</InputLabel>
                <Select defaultValue="usd" label="Currency">
                  <MenuItem value="aud">AUD</MenuItem>
                  <MenuItem value="usd">USD</MenuItem>
                </Select>
              </FormControl>
              <TextField label="Budget per night" value="1,000.00" sx={{ width: 220 }} />
            </Stack>
            <Typography variant="subtitle1">
              The typical price for accommodation in United States is US$500 per night.
            </Typography>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardHeader
          title="International accommodation"
          subheader="Set the budget for employees travelling outside their local region"
          action={
            <Button variant="outlined" color="primary">
              Add region
            </Button>
          }
        />
        <CardContent>
          <Stack direction="column" gap={2}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
              <Typography variant="h6">Asia Pacific</Typography>
              <Button variant="text" color="error">
                Remove
              </Button>
            </Stack>
            <Stack direction="row" gap={3}>
              <FormControl sx={{ width: 220 }}>
                <InputLabel>Currency</InputLabel>
                <Select defaultValue="aud" label="Currency">
                  <MenuItem value="aud">AUD</MenuItem>
                  <MenuItem value="usd">USD</MenuItem>
                </Select>
              </FormControl>
              <TextField label="Budget per night" value="1,000.00" sx={{ width: 220 }} />
            </Stack>
            <Typography variant="subtitle1">
              The typical price for accommodation in Asia Pacific is A$500 per night.
            </Typography>

            <Divider />

            <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
              <Typography variant="h6">North America</Typography>
              <Button variant="text" color="error">
                Remove
              </Button>
            </Stack>
            <Stack direction="row" gap={3}>
              <FormControl sx={{ width: 220 }}>
                <InputLabel>Currency</InputLabel>
                <Select defaultValue="usd" label="Currency">
                  <MenuItem value="aud">AUD</MenuItem>
                  <MenuItem value="usd">USD</MenuItem>
                </Select>
              </FormControl>
              <TextField label="Budget per night" value="1,000.00" sx={{ width: 220 }} />
            </Stack>
            <Typography variant="subtitle1">
              The typical price for accommodation in North America is US$500 per night.
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  )
}
