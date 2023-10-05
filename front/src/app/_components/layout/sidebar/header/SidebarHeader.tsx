import FadeButton from '@/app/_components/UI/FadeButton/FadeButton'
import Image from 'next/image'
import { FC } from 'react'
import styles from './SidebarHeader.module.scss'

interface IProps {
  handleFadeButton: () => void
}

const SidebarHeader: FC<IProps> = ({ handleFadeButton }) => {
  return (
    <div className={styles.sidebarHeader}>
      <Image
        width={25}
        height={25}
        src={'/images/icons/logo.svg'}
        alt={'logo'}
      />
      <FadeButton handleButton={handleFadeButton} />
    </div>
  )
}

export default SidebarHeader
