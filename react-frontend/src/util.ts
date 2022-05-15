import { MutableRefObject, useEffect } from "react"

// Hook that triggers on clicks outside of the passed ref
export function useOutsideAlerter(ref: MutableRefObject<any>, setMenu: Function) {
    useEffect(() => {
      function handleClickOutside(event: Event) {
        if (ref.current && !ref.current.contains(event.target))
        setMenu(false)
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [ref])
  }