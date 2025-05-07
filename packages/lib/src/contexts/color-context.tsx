import React, { createContext, useContext, useState } from 'react'
import { COLORS, noop } from '../utils'

interface ColorContextType {
  globalColor: string
  globalColors: string[]
  setGlobalColor: (color: string) => void
  setGlobalColors: (colors: string[]) => void
}

export const defaultColor = '#FFFFFF'

const ColorContext = createContext<ColorContextType>({
  globalColors: COLORS,
  globalColor: defaultColor,
  setGlobalColor: noop,
  setGlobalColors: noop,
})

export const useColorContext = (): ColorContextType => useContext(ColorContext)

interface ColorProviderProps {
  colors?: string[]
  children: React.ReactNode
}

export const ColorProvider: React.FC<ColorProviderProps> = ({
  children,
  colors: defaultColors = COLORS,
}) => {
  const [globalColors, setGlobalColors] = useState<string[]>(defaultColors)
  const [globalColor, setGlobalColor] = useState<string>(defaultColor)

  const value: ColorContextType = {
    globalColor,
    globalColors,
    setGlobalColors,
    setGlobalColor,
  }

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
}
