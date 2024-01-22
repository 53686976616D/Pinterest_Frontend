import React from 'react'
import styles from './IconButton.module.css'

const IconButton = ({children, isClick}) => {
  return (
    <div className={styles.container}>
      <button onClick={isClick} className={styles.button}>{children}</button>
    </div>
  )
}

export default IconButton
