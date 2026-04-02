import { useState, useEffect, useCallback } from 'react'

export function useTypewriter(text: string, speed = 50, startDelay = 300) {
  const [displayed, setDisplayed] = useState('')
  const [isDone, setIsDone] = useState(false)

  const reset = useCallback(() => {
    setDisplayed('')
    setIsDone(false)
  }, [])

  useEffect(() => {
    reset()
    const delayTimer = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setIsDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(delayTimer)
  }, [text, speed, startDelay, reset])

  return { displayed, isDone }
}
