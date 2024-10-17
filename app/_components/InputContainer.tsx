import React from 'react'
import styles from './input.module.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputContainer = (props: Props) => {
  return (
    <div className={styles.inputContainer}>
      <input {...props} />
    </div>
  )
}

export default InputContainer
