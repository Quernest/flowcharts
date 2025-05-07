import React from 'react'
import { defaultColor, useColorContext } from '../../contexts/color-context'
import styles from './color-picker.module.css'

const ColorPicker: React.FC = () => {
  const { globalColor, globalColors, setGlobalColor } = useColorContext()

  return (
    <div className={styles.colorPickerGrid}>
      {globalColors.map((color) => (
        <div
          key={color}
          className={[
            styles.colorCircle,
            color === defaultColor && styles.borderForWhite,
            globalColor === color && styles.selected,
          ]
            .filter(Boolean)
            .join(' ')}
          style={{ backgroundColor: color }}
          onClick={() => setGlobalColor(color)}
        />
      ))}
    </div>
  )
}

export default ColorPicker
