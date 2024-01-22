import React from 'react'
import styles from './GreyButton.module.css'

const GreyButton = ({children, isClick, props}) => {

  return ( 
      <button onClick={isClick} className={styles.button}
      >{children}</button>
  )
}

export default GreyButton;
