import { useState } from "react";
import { Button } from "primereact/button";

// COMPONENTS
import { TextInput } from "components/Form/Inputs";
import DarkButton from "../DarkButton/DarkButton";

// STYLES
import styles from "./ApplyCoupon.module.scss";

const ApplyCoupon = () => {
	// Apply Coupon
	const [applyCoupon, setApplyCoupon] = useState(false);

	// Hide Apply Coupon
	const hideApplyCoupon = () => {
		setApplyCoupon(false);
		setVerified(false);
	};

	// Coupon Input
	const [coupon, setCoupon] = useState("");

	// Verify Coupon
	const [verified, setVerified] = useState(false);

	// Remove Coupon
	const removeCoupon = () => {
		setCoupon("");
		setVerified(false);
	};

	return (
		<div className={styles.apply_coupon_holder}>
			<div className={styles.apply_coupon_head}>
				<Button
					label="Apply Coupon"
					className={styles.apply_coupon}
					onClick={() => setApplyCoupon(true)}
				/>
				{applyCoupon && (
					<Button className={styles.close} onClick={hideApplyCoupon}>
						<img src="/img/close.svg" alt="" />
					</Button>
				)}
			</div>
			{applyCoupon && (
				<div className={styles.apply_coupon_body}>
					<div className={styles.apply_input}>
						<TextInput
							inputName="coupon"
							inputVal={coupon}
							placeHolder="Enter Coupon"
							changeHandler={(e) => setCoupon(e.target.value)}
						/>
						{verified && (
							<img
								src="/img/check-circle.svg"
								alt=""
								className={styles.verified_icon}
							/>
						)}
						<DarkButton
							btn
							label={!verified ? "Apply" : "Remove"}
							buttonClicked={!verified ? () => setVerified(true) : removeCoupon}
						/>
					</div>
					<div className={styles.prices}>
						<div className={styles.price_row}>
							<div className={styles.txt}>Price</div>
							<div className={styles.val}>600.72EGP</div>
						</div>
						<div className={styles.price_row}>
							<div className={styles.txt}>Discount</div>
							<div className={styles.val}>-20 EGP</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ApplyCoupon;
