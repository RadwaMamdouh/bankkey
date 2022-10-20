import { useState } from "react";

// COMPONENTS
import GradientButton from "components/UI/GradientButton/GradientButton";

// STYLES
import styles from "./OfferDetails.module.scss";

const OfferDetails = () => {
	const [code, setCode] = useState(false);
	return (
		<div className={styles.offer_details}>
			<ul className={styles.details_list}>
				<li>
					For the second year in a row, Source Today ranked Velocity in their
					Top 50 Distributors. This year.
				</li>
				<li>
					we ranked 16 out of 50, which puts us 10 spots above last year’s
					ranking.
				</li>
				<li>
					we ranked 16 out of 50, which puts us 10 spots above last year’s
					ranking.
				</li>
			</ul>

			<div className="row mb-5">
				<div className="col-md-6 mb-4 mb-md-0">
					<div className={styles.details_box}>
						<h5 className={styles.box_title}>Total price:</h5>
						<div className={styles.price}>
							<div className={styles.after_discount}>$600.72</div>
							<div className={styles.original_price}>$800.00</div>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className={styles.details_box}>
						<h5 className={styles.box_title}>offer Discount:</h5>
						<div className={styles.discount_box}>20% off</div>
					</div>
				</div>
			</div>

			{/* Get Offer Btn */}
			{!code && (
				<GradientButton
					btn
					label="Get this offer"
					withIcon
					icon="/img/arrow-right.svg"
					buttonClicked={() => setCode(true)}
				/>
			)}

			{/* Copy */}
			{code && (
				<div className={styles.copy_holder}>
					<div className={styles.code_box}>A8GU</div>
					<GradientButton
						btn
						label="Copy"
						withIcon
						icon="/img/copy-white.svg"
					/>
				</div>
			)}
		</div>
	);
};

export default OfferDetails;
