import { IMessage } from '@/app/_types/LiveChat/IMessage'
import { FC } from 'react'
import styles from './MessageItem.module.scss'

interface IProps {
	message: IMessage
}

const MessageItem: FC<IProps> = ({message: {text}}) => {
	return (
		<div className={styles.messageItem}>
			<span>{text}</span>
		</div>
	);
};

export default MessageItem;
