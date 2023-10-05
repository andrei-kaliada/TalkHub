'use client';
import Button from '@/app/_components/UI/Button/Button'
import Icon from '@/app/_components/UI/Icons/Icons'
import { IMessage } from '@/app/_types/LiveChat/IMessage'
import { KeyboardEvent, useState } from 'react'
import styles from './LiveClassChat.module.scss'
import MessageItem from './MessageItem/MessageItem'

const LiveClassChat = () => {
	const [messages, setMessages] = useState<IMessage[]>([])
	const [text, setText] = useState<string>('')
	const handleMessage = () => {
		if(text.trim().length > 0){
			setMessages(messages => [...messages, {text}])
			setText('')
		}
	}

	const handleKeyDown = (event: KeyboardEvent) => {
		if(event.key === 'Enter' && text.trim().length > 0) {
			setMessages(messages => [...messages, {text}])
			setText('')
		}
	}
	return (
		<div className={styles.liveClassChat}>
			<div className={styles.chatBar}>
				<div className={styles.chatBtns}>
					<Button type='button' classBtn={styles.message}>
						<span>Message</span>
					</Button>
					<Button type='button' classBtn={styles.participants}>
						<span>Participants</span>
					</Button>
				</div>
				<div className={styles.messagesBar}>
					{
						messages.map((message, index) => (
							<MessageItem key={index} message={message} />
						))
					}
				</div>
			</div>
			<div className={styles.inputBar}>
				<div  onClick={handleMessage} className={styles.sendBtn}>
					<Icon name={'SendHorizontal'} />
				</div>
				<input onKeyDown={handleKeyDown} onChange={(event) => setText(event.target.value)} value={text} type="text" />
			</div>
		</div>
	);
};

export default LiveClassChat;
