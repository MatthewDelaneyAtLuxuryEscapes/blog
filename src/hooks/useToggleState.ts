import { useCallback, useState } from 'react'

type TogglableState = readonly [
  booleanState: boolean,
  toggleOn: () => void,
  toggleOff: () => void,
  toggleBoolean: () => void,
]

export default function useToggleState(initialState = false): TogglableState {
  const [booleanState, toggleBoolean] = useState<boolean>(initialState)

  const toggleOn = useCallback(() => {
    toggleBoolean(true)
  }, [])
  const toggleOff = useCallback(() => {
    toggleBoolean(false)
  }, [])
  const toggle = useCallback(() => {
    toggleBoolean((curr) => !curr)
  }, [])

  return [booleanState, toggleOn, toggleOff, toggle]
}
