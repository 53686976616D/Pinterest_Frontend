import React from 'react'
import styles from './Tooltip.module.css'

const Tooltip = ({children, setText}) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <span className={styles.tooltiptext}>{setText}</span>
    </div>
  )
}

export default Tooltip
