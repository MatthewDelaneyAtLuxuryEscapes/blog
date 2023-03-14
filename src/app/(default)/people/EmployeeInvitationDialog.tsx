import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import React, { FormEventHandler, useCallback, useRef, useState } from 'react'
import useSnackbar from '~/hooks/ui/useSnackbar'
import { Invitee, reqPOSTInvitations } from '~/requests/invitations'
import { useMutation } from 'react-query'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const EMPTY_INVITEE: Invitee = {
  fullName: '',
  email: '',
  role: 'employee',
} as const

export default function EmployeeInvitationDialog(props: Props) {
  const { enqueueSnackbar } = useSnackbar()
  const { isOpen, onClose } = props
  const fullNameInputRef = useRef<HTMLInputElement>()
  const [invitees, setInvitees] = useState<Invitee[]>([])
  const [newInvitee, setNewInvitee] = useState<Invitee>(EMPTY_INVITEE)

  const handleNewInviteeFullNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewInvitee((prev) => ({ ...prev, fullName: e.target.value }))
  }, [])

  const handleNewInviteeEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewInvitee((prev) => ({ ...prev, email: e.target.value }))
  }, [])

  const handleNewInviteeRoleChange = useCallback((e: SelectChangeEvent<App.Employee['role']>) => {
    setNewInvitee((prev) => ({ ...prev, role: e.target.value as App.Employee['role'] }))
  }, [])

  const resetNewInvitee = useCallback(() => {
    setNewInvitee(EMPTY_INVITEE)
  }, [])

  const addToInvitees = useCallback<FormEventHandler>(
    (e) => {
      e.preventDefault()
      setInvitees((prev) => [...prev, newInvitee])
      resetNewInvitee()
      fullNameInputRef.current?.focus()
    },
    [newInvitee, resetNewInvitee],
  )

  const removeInviteeByIndex = useCallback((index: number) => {
    setInvitees((prev) => {
      const newInvitees = [...prev]
      delete newInvitees[index]

      return newInvitees
    })
  }, [])

  const { mutate: invite } = useMutation<boolean, string, Invitee[]>({
    mutationFn: reqPOSTInvitations,
    onSuccess: (data, variables) => {
      let message = `${variables.length}`
      if (variables.length > 1) {
        message += ' invites have been sent out.'
      } else {
        message += ' invite has been sent out.'
      }
      enqueueSnackbar(message, { variant: 'success' })
      onClose()
      setInvitees([])
    },
  })

  const sendInvites = useCallback(() => {
    invite(invitees)
  }, [invite, invitees])

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Invite team members</DialogTitle>
      <DialogContent>
        <form onSubmit={addToInvitees}>
          <Stack direction="column" gap={2} alignItems="start">
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              gap={{ xs: 2, sm: 1 }}
              alignSelf="stretch"
            >
              <TextField
                inputRef={fullNameInputRef}
                label="Full name"
                value={newInvitee.fullName}
                required
                onChange={handleNewInviteeFullNameChange}
                sx={{ flexGrow: 1 }}
              />
              <TextField
                label="Work email"
                value={newInvitee.email}
                required
                onChange={handleNewInviteeEmailChange}
                sx={{ flexGrow: 1 }}
              />
              <FormControl sx={{ width: 120 }}>
                <InputLabel>Role</InputLabel>
                <Select label="Role" value={newInvitee.role} onChange={handleNewInviteeRoleChange}>
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="employee">Employee</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Button variant="text" startIcon={<AddIcon />} type="submit">
              Add another
            </Button>
          </Stack>
        </form>
        <List>
          {invitees.map((invitee, index) => (
            <ListItem
              key={`${invitee.fullName}-${index}`}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete invite"
                  onClick={() => removeInviteeByIndex(index)}
                >
                  <DeleteForeverOutlinedIcon />
                </IconButton>
              }
            >
              <ListItemText primary={invitee.fullName} secondary={invitee.email} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between' }}>
        <Button variant="text" onClick={onClose}>
          Dismiss
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={invitees.length === 0}
          onClick={sendInvites}
        >
          Send invites
        </Button>
      </DialogActions>
    </Dialog>
  )
}
