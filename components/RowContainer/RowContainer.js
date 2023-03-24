import React from 'react'
import styles from './RowContainer.module.scss';


function RowContainer({ children }) {
  return (
    <div className={styles.RowContainer}>{children}</div>
  )
}

export default RowContainer