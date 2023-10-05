import { FC } from 'react'
import styles from './Menu.module.scss'
import { MENU } from './menu.data'
import MenuItem from './menuItem/MenuItem'

interface IProps {
  isOpen: boolean
}

const Menu: FC<IProps> = ({ isOpen }) => {
  return (
    <aside className={styles.menu}>
      {MENU.map((menu) => (
        <MenuItem key={menu.name} menuItem={menu} isOpen={isOpen} />
      ))}
    </aside>
  )
}

export default Menu
