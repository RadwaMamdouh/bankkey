<<<<<<< HEAD
import { Rating } from "primereact/rating";

// STYLES
import styles from "./Rate.module.scss";

const Rate = ({
	rateVal,
	handleRateChange,
	showVal,
	readOnly,
	val,
	...props
}) => {
	return (
		<div className={styles.rate_holder}>
			{showVal && !props.rightPos && (
				<div className={styles.rate_value}>
					{val}
					{props.withPercantage && "%"}
				</div>
			)}
			<Rating
				value={rateVal}
				cancel={false}
				onChange={handleRateChange}
				readOnly={readOnly}
			/>
			{showVal && props.rightPos && (
				<div className={styles.rate_value}>
					{val}
					{props.withPercantage && "%"}
				</div>
			)}
		</div>
	);
};

export default Rate;
=======
import { Rating } from "primereact/rating";

// STYLES
import styles from "./Rate.module.scss";

const Rate = ({
	rateVal,
	handleRateChange,
	showVal,
	readOnly,
	val,
	...props
}) => {
	return (
		<div className={styles.rate_holder}>
			{showVal && !props.rightPos && (
				<div className={styles.rate_value}>
					{val}
					{props.withPercantage && "%"}
				</div>
			)}
			<Rating
				value={rateVal}
				cancel={false}
				onChange={handleRateChange}
				readOnly={readOnly}
			/>
			{showVal && props.rightPos && (
				<div className={styles.rate_value}>
					{val}
					{props.withPercantage && "%"}
				</div>
			)}
		</div>
	);
};

export default Rate;
>>>>>>> bank key pages
