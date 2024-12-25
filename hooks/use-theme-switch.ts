import { useState, useCallback } from 'react'
import type { ThemeVariant } from '@/types/theme'

export function useThemeSwitch(initialTheme: ThemeVariant = 'light') {
  const [theme, setTheme] = useState<ThemeVariant>(initialTheme)

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }, [])

  return {
    theme,
    toggleTheme
  }
}

