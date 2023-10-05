import classnames from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import styles from './SidebarInfo.module.scss'

interface IProps {
  isOpen: boolean
}

const SidebarInfo: FC<IProps> = ({ isOpen }) => {
  return (
    <div className={styles.sidebarInfo}>
      <Image
        className={classnames(styles.photo, {
          [styles.collapsedAvatar]: !isOpen,
        })}
        width={150}
        height={150}
        src={'/images/icons/avatar.png'}
        alt={'avatar'}
      />
      <div className={classnames(styles.info, { [styles.active]: !isOpen })}>
        <div className={styles.fullName}>{'Haris Ahmed'}</div>
        <div className={styles.role}>{'Assistant professor'}</div>
      </div>
      {!isOpen && <div className={styles.activeFullName}>{'H A'}</div>}
    </div>
  )
}

export default SidebarInfo
