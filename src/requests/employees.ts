import { useQuery } from 'react-query'

const SAMPLE_INITIAL_EMPLOYEES: App.Employee[] = [
  {
    id: 1,
    firstName: 'Michael',
    middleName: 'Garry',
    lastName: 'Scott',
    email: 'littlekidlover@dndrmfln.us',
    position: 'Regional Manager',
    role: 'admin',
    status: 'activated',
  },
  {
    id: 2,
    firstName: 'James',
    middleName: 'Duncan',
    lastName: 'Halpert',
    email: 'jimothy@dndrmfln.us',
    position: 'Sales Representative',
    role: 'employee',
    status: 'pending-invite',
  },
  {
    id: 3,
    firstName: 'Dwight',
    middleName: 'Kurt',
    lastName: 'Schrute',
    email: 'dwight.k.schrute.iii@dndrmfln.us',
    position: 'Assistant to the Regional Manager',
    role: 'employee',
    status: 'activated',
  },
  {
    id: 4,
    firstName: 'Creed',
    lastName: 'Bratton',
    email: 'scuba4life@dndrmfln.us',
    position: 'Quality Assurance Relations',
    role: 'employee',
    status: 'activated',
  },
  {
    id: 5,
    firstName: 'Devon',
    lastName: 'White',
    email: 'devon.w@dndrmfln.us',
    position: 'Quality Assurance Relations',
    role: 'employee',
    status: 'deactivated',
  },
]

export function useEmployeesQuery() {
  return useQuery<App.Employee[], string>({
    queryKey: 'employees',
    queryFn: () => SAMPLE_INITIAL_EMPLOYEES,
    enabled: true,
    placeholderData: [],
  })
}
