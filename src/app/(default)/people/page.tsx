'use client'
import React from 'react'

import { Button, Chip, Skeleton, Stack, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined'

import PageMainContainer from '~/components/PageMainContainer'
import useToggleState from '~/hooks/useToggleState'
import { useEmployeesQuery } from '~/requests/employees'
import pluralise from '~/utilities/pluralise'

import EmployeeInvitationDialog from './EmployeeInvitationDialog'

const COLUMNS: GridColDef<App.Employee>[] = [
  {
    field: 'fullName',
    headerName: 'Name',
    valueGetter: (params) => {
      const { firstName, middleName, lastName } = params.row

      return [firstName, middleName, lastName].join(' ')
    },
    minWidth: 150,
    maxWidth: 300,
    flex: 1,
  },
  { field: 'email', headerName: 'Email', minWidth: 150, maxWidth: 300, flex: 1 },
  { field: 'position', headerName: 'Position', minWidth: 150, maxWidth: 300, flex: 1 },
  {
    field: 'role',
    headerName: 'Role',
    width: 100,
    flex: 1,
    renderCell: (params) => (
      <>
        {params.value === 'admin' && (
          <Chip label="Admin" icon={<SupervisorAccountOutlinedIcon />} variant="outlined" />
        )}
        {params.value === 'employee' && <Chip label="Employee" variant="outlined" />}
      </>
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    minWidth: 150,
    flex: 1,
    renderCell: (params) => (
      <>
        {params.value === 'activated' && <Chip color="success" label="Activated" />}
        {params.value === 'pending-invite' && <Chip color="warning" label="Pending invite" />}
        {params.value === 'deactivated' && <Chip label="Deactivated" />}
      </>
    ),
  },
]

export default function PeoplePage() {
  const employeesQuery = useEmployeesQuery()
  const {
    isToggled: isInviteDialogOpen,
    toggleOn: openInviteDialog,
    toggleOff: closeInviteDialog,
  } = useToggleState()

  return (
    <PageMainContainer>
      <Stack direction="column" gap={3}>
        <Stack direction="row" justifyContent="space-between" alignItems="start" gap={3}>
          <Stack direction="column" gap={1}>
            <Typography variant="h4">People</Typography>
            <Typography variant="body1" color="text.secondary">
              {employeesQuery.status === 'loading' && <Skeleton />}
              {employeesQuery.status === 'success' &&
                pluralise(employeesQuery.data?.length, 'user')}
            </Typography>
          </Stack>
          <Button variant="contained" color="primary" onClick={openInviteDialog}>
            Invite team mebers
          </Button>
        </Stack>

        <DataGrid
          autoHeight
          rows={employeesQuery.data ?? []}
          rowCount={employeesQuery.data?.length}
          columns={COLUMNS}
          loading={employeesQuery.status === 'loading'}
        />
      </Stack>

      <EmployeeInvitationDialog isOpen={isInviteDialogOpen} onClose={closeInviteDialog} />
    </PageMainContainer>
  )
}
