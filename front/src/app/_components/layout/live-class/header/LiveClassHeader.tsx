
import Button from '@/app/_components/UI/Button/Button'
import Icon from '@/app/_components/UI/Icons/Icons'
import styles from './LiveClassHeader.module.scss'

const LiveClassHeader = () => {
	return (
		<div className={styles.header}>
			<div className={styles.inviteButtons}>
				<div className={styles.inviteToClass}>
					<Icon name={'UserMinus2'} />
					<div className={styles.text}>Invited to the class</div>
					<span className={styles.quantity}>52</span>
				</div>
				<div className={styles.absentFromClass}>
					<Icon name={'UserPlus2'} />
					<div className={styles.text}>Absent people</div>
					<span className={styles.quantity}>52</span>
				</div>
			</div>
			<div className={styles.addAndSearchBtns}>
				<Button type={'button'} classBtn={styles.addPeopleBtn}>
						<Icon name={'Plus'} />
						<div>Add people</div>
				</Button>
				<div className={styles.searchInputWrapper}>
					<Icon name={"Search"} />
					<input 
					type='text'
					placeholder="Search..."
					className={styles.searchInput}
					/>
				</div>
			</div>

		</div>
	);
};

export default LiveClassHeader;
