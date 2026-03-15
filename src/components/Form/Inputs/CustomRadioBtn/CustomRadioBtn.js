// STYLES
import styles from "./CustomRadioBtn.module.scss";

const CustomRadioBtn = ({ ...props }) => {
	return (
		<label className={styles.custom_radioBtn}>
			<input type="radio" name={props.name} value={props.value} />
			{!props.installmentLbl ? (
				<div className={styles.txt}>{props.label}</div>
			) : (
				<div className={`${styles.txt} ${styles.installment_txt}`}>
					<span>{props.label}</span>
					<span>Months</span>
				</div>
			)}
		</label>
	);
};

export default CustomRadioBtn;
