import styles from './MainContent.module.scss'

const MainContent = () => {
	return (
		<div className={styles.mainContent}>
			<div className={styles.videoPlayer}>
				<video width={'100%'} height={'100%'} controls poster='/images/skype.jpg'>
					<source src="movie.mp4" type='video/mp4' />
				</video>
			</div>
			<div className={styles.info}>
				<div className={styles.title}>
					<h2>The Business of ILLustration and Lettering</h2>
					<div className={styles.descr}>Chapter 5 - Basic letter drawing</div>
				</div>
				<div className={styles.classDescription}>
					<div className={styles.overview}>
						<div className={styles.overviewTitle}>
							Overview
						</div>
						<div className={styles.overviewDescr}>
						Nurture yourself while you practice your drawing skills with two distinct and meditative techniques. One-line drawing in trendy, but it is way to break down hapes two distinct and meditative techniques. One-line while you practice your drawing skills with two... 
						</div>
					</div>
					<div className={styles.overview}>
						<div className={styles.overviewTitle}>
							Overview
						</div>
						<div className={styles.overviewDescr}>
						Nurture yourself while you practice your drawing skills with two distinct and meditative techniques. One-line drawing in trendy, but it is way to break down hapes two distinct and meditative techniques. One-line while you practice your drawing skills with two... 
						</div>
					</div>
					<div className={styles.overview}>
						<div className={styles.overviewTitle}>
							Overview
						</div>
						<div className={styles.overviewDescr}>
						Nurture yourself while you practice your drawing skills with two distinct and meditative techniques. One-line drawing in trendy, but it is way to break down hapes two distinct and meditative techniques. One-line while you practice your drawing skills with two... 
						</div>
					</div>
					<div className={styles.overview}>
						<div className={styles.overviewTitle}>
							Overview
						</div>
						<div className={styles.overviewDescr}>
						Nurture yourself while you practice your drawing skills with two distinct and meditative techniques. One-line drawing in trendy, but it is way to break down hapes two distinct and meditative techniques. One-line while you practice your drawing skills with two... 
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
