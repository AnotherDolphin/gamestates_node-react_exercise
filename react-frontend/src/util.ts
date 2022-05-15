import { MutableRefObject, useEffect } from 'react'

// Hook that triggers on clicks outside of the passed ref
export function useOutsideAlerter(ref: MutableRefObject<any>, setMenu: Function) {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) setMenu(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [ref])
}

export const platforms = [
  'PC',
  'PS3',
  'Xbox 360',
  'PS4',
  'Xbox One',
  'Nintendo Switch',
  'PS5',
  'Android',
]

export const genres = [
  'MOBA',
  'MMORPG',
  'RPG',
  'Action RPG',
  'FPS',
  'Stealth',
  'Sandbox',
  'Card Game',
  'Sport',
  'Multiplayer',
]
