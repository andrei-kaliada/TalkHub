import { FC } from 'react'
import styles from './FadeButton.module.scss'

interface IProps {
  handleButton: () => void
}

const FadeButton: FC<IProps> = ({ handleButton }) => {
  return (
    <div onClick={() => handleButton()} className={styles.fadeButton}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default FadeButton
