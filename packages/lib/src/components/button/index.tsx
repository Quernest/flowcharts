import React from 'react'
import styles from './button.module.css'

interface ButtonProps {
  variant?: 'contained' | 'outlined'
  color?: 'primary' | 'secondary'
  onClick?: () => void
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  onClick,
  children,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={`${styles.button} ${styles[variant]} ${styles[color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
