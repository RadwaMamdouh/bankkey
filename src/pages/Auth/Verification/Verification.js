<<<<<<< HEAD
import { useFormik } from "formik";
import { Link } from "react-router-dom";

// Utils
import { LOGO, phone } from "utils/constants/Images";

// COMPONENTS
import { TextInput } from "components/Form/Inputs";
import GradientButton from "components/UI/GradientButton/GradientButton";

// STYLES
import styles from "./Verification.module.scss";

const Verification = () => {
	const formik = useFormik({
		initialValues: {
			code: "",
		},
		validate: (data) => {
			let errors = {};

			if (!data.code) {
				errors.code = "Code is required.";
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
		<div className={styles.log_page}>
			<Link to="/" className={styles.app_logo}>
				<img src={LOGO} alt="" />
			</Link>
			<div className="row">
				<div className="col-lg-6">
					<div className={styles.log_left}>
						<img src="/img/login.png" alt="" className={styles.log_img} />
						<h2>Receive payments from any banking system</h2>
						<p>
							Connect your bank card, and create accounts in the selected
							currency.
						</p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className={styles.log_form}>
						<img src="/img/bell.svg" alt="" className={styles.emoji} />
						<div className={styles.log_form_head}>
							<h1>Second Step Verification </h1>
							<img src={phone} alt="" className={styles.phone_icon} />
							<div className={styles.verification_code}>
								<h5>Enter the verification code we sent to</h5>
								<p>+38076767677</p>
							</div>
						</div>
						<form onSubmit={formik.handleSubmit}>
							<div className={styles.inputs_wrapper}>
								{/* Code */}
								<TextInput
									// inputLabel="E-mail or phone number"
									inputName="code"
									placeHolder="Type code here"
									inputVal={formik.values.code}
									changeHandler={formik.handleChange}
									inputError={getFormErrorMessage("code")}
								/>
							</div>
							<GradientButton btn type="submit" label="Submit" />
						</form>
						{/* Have Account */}
						<div className={styles.have_account}>
							<span>Didn’t gate the code?</span>
							<Link to="">Resend</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Verification;
=======
import { useFormik } from "formik";
import { Link } from "react-router-dom";

// Utils
import { LOGO } from "utils/constants/Logo";

// COMPONENTS
import { TextInput } from "components/Form/Inputs";
import GradientButton from "components/UI/GradientButton/GradientButton";

// STYLES
import styles from "./Verification.module.scss";

const Verification = () => {
	const formik = useFormik({
		initialValues: {
			code: "",
		},
		validate: (data) => {
			let errors = {};

			if (!data.code) {
				errors.code = "Code is required.";
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
		<div className={styles.log_page}>
			<Link to="/" className={styles.app_logo}>
				<img src={LOGO} alt="" />
			</Link>
			<div className="row">
				<div className="col-lg-6">
					<div className={styles.log_left}>
						<img src="/img/login.png" alt="" className={styles.log_img} />
						<h2>Receive payments from any banking system</h2>
						<p>
							Connect your bank card, and create accounts in the selected
							currency.
						</p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className={styles.log_form}>
						<img src="/img/bell.svg" alt="" className={styles.emoji} />
						<div className={styles.log_form_head}>
							<h1>Second Step Verification </h1>
							<img src="/img/phone.svg" alt="" className={styles.phone_icon} />
							<div className={styles.verification_code}>
								<h5>Enter the verification code we sent to</h5>
								<p>+38076767677</p>
							</div>
						</div>
						<form onSubmit={formik.handleSubmit}>
							<div className={styles.inputs_wrapper}>
								{/* Code */}
								<TextInput
									// inputLabel="E-mail or phone number"
									inputName="code"
									placeHolder="Type code here"
									inputVal={formik.values.code}
									changeHandler={formik.handleChange}
									inputError={getFormErrorMessage("code")}
								/>
							</div>
							<GradientButton btn type="submit" label="Submit" />
						</form>
						{/* Have Account */}
						<div className={styles.have_account}>
							<span>Didn’t gate the code?</span>
							<Link to="">Resend</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Verification;
>>>>>>> bank key pages
