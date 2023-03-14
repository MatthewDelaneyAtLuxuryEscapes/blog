export interface Invitee {
  fullName: string
  email: string
  role: App.Employee['role']
}

export function reqPOSTInvitations(invitees: Invitee[]) {
  return new Promise<boolean>((resolve, reject) => {
    if (invitees.length) {
      resolve(true)
    }

    reject('no invitees')
  })
}
