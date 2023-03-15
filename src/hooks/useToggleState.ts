import { useCallback, useState } from 'react'

interface TogglableState {
  isToggled: boolean
  toggleOn: () => void
  toggleOff: () => void
  toggle: () => void
}

export default function useToggleState(initialState = false): TogglableState {
  const [isToggled, setIsToggled] = useState<boolean>(initialState)

  const toggleOn = useCallback(() => {
    setIsToggled(true)
  }, [])
  const toggleOff = useCallback(() => {
    setIsToggled(false)
  }, [])
  const toggle = useCallback(() => {
    setIsToggled((curr) => !curr)
  }, [])

  return { isToggled, toggleOn, toggleOff, toggle }
}
