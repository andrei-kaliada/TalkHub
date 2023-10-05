import styles from './LiveClass.module.scss'
import LiveClassContent from './content/LiveClassContent'
import LiveClassHeader from './header/LiveClassHeader'

const LiveClass = () => {
	return (
	<div className={styles.liveClass}>
		<LiveClassHeader />
		<LiveClassContent />
	</div>
	);
};

export default LiveClass;
