// COMPONENTS
import Rate from "../Rate/Rate";

// STYLES
import styles from "./ReviewBox.module.scss";

const ReviewBox = ({ reviewData }) => {
	return (
		<div className={styles.review_box}>
			<div className={styles.review_head}>
				<div className={styles.reviewer_info}>
					<div className={styles.img}>
						<img src={`/img/${reviewData.image}`} alt="" />
					</div>
					<div className={styles.info}>
						<div className={styles.name}>{reviewData.name}</div>
						<Rate rateVal={reviewData.rate} readOnly={true} />
					</div>
				</div>
				<div className={styles.time}>{reviewData.time}</div>
			</div>
			<p className={styles.review_txt}>{reviewData.review}</p>
			{reviewData.verifiedPurchase && (
				<div className={styles.verified_purchase}>
					<div className={styles.icon}>
						<img src="/img/check.svg" alt="" />
					</div>
					<div className={styles.txt}>Verified Purchase</div>
				</div>
			)}
		</div>
	);
};

export default ReviewBox;
