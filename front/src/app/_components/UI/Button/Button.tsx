import classnames from 'classnames'
import { FC } from "react"
import styles from './Button.module.scss'

interface IProps {
	children: React.ReactNode;
	type: "button" | "submit" | "reset";
	classBtn?: string;
	onClick?: () => void
}

const Button: FC<IProps> = ({
	children,
	type,
	classBtn,
	onClick
}) => {
	return <button onClick={onClick} className={classnames(styles.button, classBtn)} type={type}>
		{children}</button>; 
};

export default Button;
