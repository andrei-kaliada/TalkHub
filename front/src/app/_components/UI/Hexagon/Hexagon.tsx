import React, { FC } from 'react'
import styles from './Hexagon.module.scss'

const Hexagon: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.avatar}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export default Hexagon
