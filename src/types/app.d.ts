declare namespace App {
  interface UniquelyIdentifiable<K = string | number> {
    id: K
  }
  interface Employee extends UniquelyIdentifiable {
    firstName: string
    middleName?: string
    lastName: string
    email: string
    position: string
    role: 'admin' | 'employee'
    status: 'activated' | 'pending-invite' | 'deactivated'
  }
}
