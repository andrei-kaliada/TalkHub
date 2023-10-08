'use client';
import Button from '@/app/_components/UI/Button/Button'
import Icon from '@/app/_components/UI/Icons/Icons'
import { IMessage } from '@/app/_types/LiveChat/IMessage'
import classnames from 'classnames'
import { KeyboardEvent, useState } from 'react'
import styles from './LiveClassChat.module.scss'
import MessageItem from './MessageItem/MessageItem'

type TSwitcher = {
	type: 'message' | 'participants'
}

const LiveClassChat = () => {
	const [messages, setMessages] = useState<IMessage[]>([])
	const [text, setText] = useState<string>('')
	const [participants, setParticipants] = useState<string[]>(["Alex", "John", "Sara"])
	const [switcher, setSwitcher] = useState<TSwitcher>({type: 'message'})

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
			<div className={styles.chatBox}>
				<div className={styles.chatBar}>
					<div className={styles.chatBtns}>
						<Button onClick={() => setSwitcher({type: 'message'})} type='button' classBtn={classnames(styles.message, {[styles.active]: switcher.type === 'message'})}>
							<span>Message</span>
						</Button>
						<Button onClick={() => setSwitcher({type: 'participants'})} type='button' classBtn={classnames(styles.participants, {[styles.active]: switcher.type === 'participants'})}>
							<span>Participants</span>
						</Button>
					</div>
					<div className={styles.messagesBar}>
						{
							switcher.type === 'message' ? (
								messages.map((message, index) => (
									<MessageItem key={index} message={message} />
								))
							) : (
								participants.map((user, index) => (
									<div key={index}>{user}</div>
								))
							)
						}
					</div>
				</div>
				<div className={styles.inputBar}>
					<button  onClick={handleMessage} className={styles.sendBtn}>
						<Icon name={'SendHorizontal'} />
					</button>
					<input onKeyDown={handleKeyDown} onChange={(event) => setText(event.target.value)} value={text} type="text" />
				</div>
			</div>
		</div>
	);
};

export default LiveClassChat;
