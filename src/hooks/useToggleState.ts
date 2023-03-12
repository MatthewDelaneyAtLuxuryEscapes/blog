import { useCallback, useState } from 'react'

interface TogglableState {
  isToggled: boolean
  toggleOn: () => void
  toggleOff: () => void
  toggle: () => void
}

export default function useToggleState(initialState = false): TogglableState {
  const [isToggled, toggleBoolean] = useState<boolean>(initialState)

  const toggleOn = useCallback(() => {
    toggleBoolean(true)
  }, [])
  const toggleOff = useCallback(() => {
    toggleBoolean(false)
  }, [])
  const toggle = useCallback(() => {
    toggleBoolean((curr) => !curr)
  }, [])

  return { isToggled, toggleOn, toggleOff, toggle }
}
