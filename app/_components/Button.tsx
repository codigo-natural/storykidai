import React from 'react'

type ButtonProps = {
  // label?: string
  className?: string
  onClick?: () => void
  disabled?: boolean
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  disabled
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-2 px-4 py-3 text-blue-700 bg-blue-200 rounded-md font-bold text-sm shadow-md transition duration-500 hover:bg-blue-300 hover:shadow-lg ${className}`}
    >
      {children}
    </button>
  )
}
