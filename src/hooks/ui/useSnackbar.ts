// eslint-disable-next-line no-restricted-imports
import { useSnackbar as useNotistack } from 'notistack'

export default function useSnackbar() {
  const notistack = useNotistack()

  return notistack
}
