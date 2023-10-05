import styles from './LiveClassContent.module.scss'
import LiveClassChat from './chat/LiveClassChat'
import MainContent from './main/MainContent'

const LiveClassContent = () => {
	return (
		<div className={styles.liveClassContent}>
			<MainContent />
			<LiveClassChat />
		</div>
	);
};

export default LiveClassContent;
