<<<<<<< HEAD
import { useFormik } from "formik";
import { Link } from "react-router-dom";

// Utils
import { LOGO, recoveryPassword } from "utils/constants/Images";

// COMPONENTS
import { PasswordInput } from "components/Form/Inputs";
import GradientButton from "components/UI/GradientButton/GradientButton";

// STYLES
import styles from "./ResetPassword.module.scss";

const ResetPassword = () => {
	const formik = useFormik({
		initialValues: {
			password: "",
			confirmNewPassword: "",
		},
		validate: (data) => {
			let errors = {};

			if (!data.password) {
				errors.password = "Password is required.";
			}

			if (!data.confirmNewPassword) {
				errors.confirmNewPassword = "Confirm new password is required.";
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
						<img src={recoveryPassword} alt="" className={styles.log_img} />
						<h2>Receive payments from any banking system</h2>
						<p>
							Connect your bank card, and create accounts in the selected
							currency.
						</p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className={styles.log_form}>
						<img src="/img/padlock.svg" alt="" className={styles.emoji} />
						<div className={styles.log_form_head}>
							<h1>Set new password</h1>
							<p>Please set new password</p>
						</div>
						<form onSubmit={formik.handleSubmit}>
							<div className={styles.inputs_wrapper}>
								{/* Password */}
								<PasswordInput
									inputLabel="Password"
									inputName="password"
									placeHolder="Type your pasword"
									inputVal={formik.values.password}
									changeHandler={formik.handleChange}
									inputError={getFormErrorMessage("password")}
								/>

								{/* Confirm New Password */}
								<PasswordInput
									inputLabel="Confirm New Password"
									inputName="confirmNewPassword"
									placeHolder="Type confirm new password"
									inputVal={formik.values.confirmNewPassword}
									changeHandler={formik.handleChange}
									inputError={getFormErrorMessage("confirmNewPassword")}
								/>
							</div>
							<GradientButton btn type="submit" label="Submit" />
						</form>
						{/* Login */}
						<div className={styles.have_account}>
							<Link to="/login">Login</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
=======
import { useFormik } from "formik";
import { Link } from "react-router-dom";

// Utils
import { LOGO } from "utils/constants/Logo";

// COMPONENTS
import { PasswordInput } from "components/Form/Inputs";
import GradientButton from "components/UI/GradientButton/GradientButton";

// STYLES
import styles from "./ResetPassword.module.scss";

const ResetPassword = () => {
	const formik = useFormik({
		initialValues: {
			password: "",
			confirmNewPassword: "",
		},
		validate: (data) => {
			let errors = {};

			if (!data.password) {
				errors.password = "Password is required.";
			}

			if (!data.confirmNewPassword) {
				errors.confirmNewPassword = "Confirm new password is required.";
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
						<img
							src="/img/recovery-password.png"
							alt=""
							className={styles.log_img}
						/>
						<h2>Receive payments from any banking system</h2>
						<p>
							Connect your bank card, and create accounts in the selected
							currency.
						</p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className={styles.log_form}>
						<img src="/img/padlock.svg" alt="" className={styles.emoji} />
						<div className={styles.log_form_head}>
							<h1>Set new password</h1>
							<p>Please set new password</p>
						</div>
						<form onSubmit={formik.handleSubmit}>
							<div className={styles.inputs_wrapper}>
								{/* Password */}
								<PasswordInput
									inputLabel="Password"
									inputName="password"
									placeHolder="Type your pasword"
									inputVal={formik.values.password}
									changeHandler={formik.handleChange}
									inputError={getFormErrorMessage("password")}
								/>

								{/* Confirm New Password */}
								<PasswordInput
									inputLabel="Confirm New Password"
									inputName="confirmNewPassword"
									placeHolder="Type confirm new password"
									inputVal={formik.values.confirmNewPassword}
									changeHandler={formik.handleChange}
									inputError={getFormErrorMessage("confirmNewPassword")}
								/>
							</div>
							<GradientButton btn type="submit" label="Submit" />
						</form>
						{/* Login */}
						<div className={styles.have_account}>
							<Link to="/login">Login</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
>>>>>>> bank key pages
