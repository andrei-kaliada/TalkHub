'use client'
import Icon from '@/app/_components/UI/Icons/Icons'
import classnames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'
import { IMenu } from '../menu.interface'
import styles from './MenuItem.module.scss'

interface IProps {
  menuItem: IMenu
  isOpen: boolean
}

const MenuItem: FC<IProps> = ({ menuItem, isOpen }) => {
  const pathname = usePathname()
  const [quantityMessages, setQuantityMessages] = useState<number>(2)
  return (
    <Link href={menuItem.link}>
      <div
        className={classnames(
          styles.menuItem,
          { [styles.active]: pathname === menuItem.link },
          { [styles.closedSidebar]: !isOpen }
        )}
      >
        <Icon name={menuItem.icon} />
        <span className={styles.text}>{menuItem.name}</span>
        {/* {quantityMessages && <span>{quantityMessages}</span>} */}
      </div>
    </Link>
  )
}

export default MenuItem
