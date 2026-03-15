// STYLES
import styles from "./CreditUpdatesBox.module.scss";

const CreditUpdatesBox = ({ icon, title, value }) => {
	return (
		<div className={styles.creditUpdates_box}>
			<img src={`/img/${icon}`} alt="" className={styles.icon} />
			<div className={styles.credit_data}>
				<div className={styles.val}>{value}</div>
				<div className={styles.tit}>{title}</div>
			</div>
		</div>
	);
};

export default CreditUpdatesBox;
