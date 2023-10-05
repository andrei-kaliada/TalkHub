'use client'
import classnames from 'classnames'
import { FC, useState } from 'react'
import styles from './Sidebar.module.scss'
import SidebarHeader from './header/SidebarHeader'
import SidebarInfo from './info/SidebarInfo'
import Menu from './menu/Menu'

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const handleFadeButton = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div
      className={classnames(styles.sidebar, { [styles.closeSidebar]: !isOpen })}
    >
      <SidebarHeader handleFadeButton={handleFadeButton} />
      <SidebarInfo isOpen={isOpen} />
      <Menu isOpen={isOpen} />
    </div>
  )
}

export default Sidebar
