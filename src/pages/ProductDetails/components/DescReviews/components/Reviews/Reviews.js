import { useState } from "react";
import { useFormik } from "formik";
import { Button } from "primereact/button";

// COMPONENTS
import Rate from "components/UI/Rate/Rate";
import ReviewBox from "components/UI/ReviewBox/ReviewBox";
import DarkButton from "components/UI/DarkButton/DarkButton";
import TextAreaInput from "components/Form/Inputs/TextAreaInput/TextAreaInput";

// STYLES
import styles from "./Reviews.module.scss";

const Reviews = () => {
	// Rates
	const rates = [
		{ value: 98, rateVal: 5 },
		{ value: 78, rateVal: 4 },
		{ value: 55, rateVal: 3 },
		{ value: 60, rateVal: 2 },
		{ value: 10, rateVal: 1 },
	];

	// Reviews
	const reviews = [
		{
			id: 1,
			image: "review1.png",
			name: "Sotapdi Kunda",
			rate: 5,
			review:
				"Pulse Illustration Kit is a vector illustration constructor with unique 15 characters and 88 objectsPulse Illustration Kit is a vector illustration constructor with unique 15 characters and 88 objects.",
			time: "3min",
			verifiedPurchase: true,
		},
		{
			id: 2,
			image: "review2.png",
			name: "Samantha",
			rate: 4,
			review:
				"Pulse Illustration Kit is a vector illustration constructor with unique 15 characters and 88 objectsPulse Illustration Kit is a vector illustration constructor with unique 15 characters and 88 objects.",
			time: "1month ago",
			verifiedPurchase: true,
		},
		{
			id: 3,
			image: "review3.png",
			name: "Michell Mariya",
			rate: 2,
			review:
				"Pulse Illustration Kit is a vector illustration constructor with unique 15 characters and 88 objectsPulse Illustration Kit is a vector illustration constructor with unique 15 characters and 88 objects.",
			time: "2 hr ago",
			verifiedPurchase: false,
		},
		{
			id: 4,
			image: "review1.png",
			name: "Sotapdi Kunda",
			rate: 5,
			review:
				"Pulse Illustration Kit is a vector illustration constructor with unique 15 characters and 88 objectsPulse Illustration Kit is a vector illustration constructor with unique 15 characters and 88 objects.",
			time: "3min",
			verifiedPurchase: true,
		},
	];

	// See All Handler
	const [heightAuto, setHeightAuto] = useState(false);

	// Write a Review Form
	const formik = useFormik({
		initialValues: {
			review: "",
		},
		validate: (data) => {
			let errors = {};

			if (!data.review) {
				errors.review = "This field is required";
			}

			return errors;
		},
		onSubmit: (data) => {
			formik.resetForm();
		},
	});

	const isFormFieldValid = (name) =>
		!!(formik.touched[name] && formik.errors[name]);

	const getFormErrorMessage = (name) => {
		return (
			isFormFieldValid(name) && (
				<small className="p-error">{formik.errors[name]}</small>
			)
		);
	};

	// Select Rate
	const [rating, setRating] = useState(2);

	return (
		<div className={styles.reviews_holder}>
			<div className="row">
				<div className="col-lg-3 mb-5 mb-lg-0">
					<div className={styles.verified_ratings}>
						<div className={styles.col_tit}>VERIFIED RATINGS</div>
						<div className={styles.total_rates}>
							<div className={styles.total_rate}>
								<Rate rateVal={4.5} showVal readOnly={true} val={4.5} />
								<div className={styles.whoRate_num}>342 Rate</div>
							</div>
							<div className={styles.rates}>
								{rates.map((rate, index) => (
									<div className={styles.rate_row} key={index}>
										<Rate
											rateVal={rate.rateVal}
											showVal
											readOnly={true}
											val={rate.value}
											withPercantage
											rightPos
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-9">
					<div className={styles.product_reviews}>
						<div className={styles.col_head}>
							<div className={styles.col_tit}>VERIFIED RATINGS</div>
							<Button
								label={!heightAuto ? "See All" : "Show Less"}
								aria-label="See All"
								className={styles.see_all}
								onClick={() => setHeightAuto(!heightAuto)}
							/>
						</div>

						{/* Reviews */}
						<div
							className={`${styles.reviews_rows} ${
								heightAuto ? styles.heightAuto : ""
							}`}>
							{reviews.map((review) => (
								<ReviewBox reviewData={review} key={review.id} />
							))}
						</div>

						{/* Write a Review */}
						<div className={styles.write_review}>
							<div className={styles.write_review_tit}>Write a Review</div>
							<div className={styles.write_review_form}>
								<form onSubmit={formik.handleSubmit}>
									<div className={styles.form_head}>
										<div className={styles.select_rate}>
											<div className={styles.tit}>Select to rate</div>
											<Rate
												rateVal={rating}
												handleRateChange={(e) => {
													setRating(e.value);
												}}
												readOnly={false}
											/>
										</div>
										<div className={styles.form_btns}>
											<DarkButton btn type="button" label="Cancel" outlined />
											<DarkButton btn type="submit" label="Submit" />
										</div>
									</div>
									<div className={styles.form_body}>
										<TextAreaInput
											label="Your Review"
											name="review"
											value={formik.values.review}
											placeHolder="Type somthing"
											changeHandler={formik.handleChange}
											inputError={getFormErrorMessage("review")}
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
