<<<<<<< HEAD
import { useFormik } from "formik";
import { Button } from "primereact/button";

// COMPONENTS
import { TextInput } from "components/Form/Inputs";

// STYLES
import styles from "./NewsLetter.module.scss";

const NewsLetter = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validate: (data) => {
			let errors = {};

			if (!data.email) {
				errors.email = "Email is required.";
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
			) {
				errors.email = "Invalid email address. E.g. example@email.com";
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

	return (
		<section className={styles.news_letter}>
			<div className="container">
				<div className={styles.news_letter_content}>
					<img
						src="/img/newsletter-ellipses1.svg"
						alt=""
						className={styles.ellipses1}
					/>
					<img
						src="/img/newsletter-ellipses2.svg"
						alt=""
						className={styles.ellipses2}
					/>
					<h2>NEWSLETTER</h2>
					<p>
						Get the latest news about Crypto and Culture! We promise no spam,
						only bundles of joy.
					</p>
					<div className={styles.subscribe_holder}>
						<form
							onSubmit={formik.handleSubmit}
							className={styles.subscribe_form}
						>
							<div className={styles.inputs_wrapper}>
								{/* Email */}
								<TextInput
									inputName="email"
									placeHolder="Enter your email address"
									inputVal={formik.values.email}
									changeHandler={formik.handleChange}
								/>
							</div>
							<Button
								type="submit"
								label="Subscribe"
								className={styles.subscribe_btn}
							/>
						</form>
						{getFormErrorMessage("email")}
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsLetter;
=======
import { useFormik } from "formik";
import { Button } from "primereact/button";

// COMPONENTS
import { TextInput } from "components/Form/Inputs";

// STYLES
import styles from "./NewsLetter.module.scss";

const NewsLetter = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validate: (data) => {
			let errors = {};

			if (!data.email) {
				errors.email = "Email is required.";
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
			) {
				errors.email = "Invalid email address. E.g. example@email.com";
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

	return (
		<section className={styles.news_letter}>
			<div className="container">
				<div className={styles.news_letter_content}>
					<img
						src="/img/newsletter-ellipses1.svg"
						alt=""
						className={styles.ellipses1}
					/>
					<img
						src="/img/newsletter-ellipses2.svg"
						alt=""
						className={styles.ellipses2}
					/>
					<h2>NEWSLETTER</h2>
					<p>
						Get the latest news about Crypto and Culture! We promise no spam,
						only bundles of joy.
					</p>
					<div className={styles.subscribe_holder}>
						<form
							onSubmit={formik.handleSubmit}
							className={styles.subscribe_form}
						>
							<div className={styles.inputs_wrapper}>
								{/* Email */}
								<TextInput
									inputName="email"
									placeHolder="Enter your email address"
									inputVal={formik.values.email}
									changeHandler={formik.handleChange}
								/>
							</div>
							<Button
								type="submit"
								label="Subscribe"
								className={styles.subscribe_btn}
							/>
						</form>
						{getFormErrorMessage("email")}
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsLetter;
>>>>>>> bank key pages
