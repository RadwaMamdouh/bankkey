import { useFormik } from "formik";
import { Link } from "react-router-dom";

// Utils
import { LOGO, signup } from "utils/constants/Images";

// COMPONENTS
import { PasswordInput, TextInput } from "components/Form/Inputs";
import GradientButton from "components/UI/GradientButton/GradientButton";

// STYLES
import styles from "./SignUp.module.scss";

const SignUp = () => {
	const formik = useFormik({
		initialValues: {
			phoneNumber: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validate: (data) => {
			let errors = {};

			if (!data.phoneNumber) {
				errors.phoneNumber = "Phone number is required.";
			} else if (!/^[0-9]{9,15}$/g.test(data.phoneNumber)) {
				errors.phoneNumber = "Invalid phone number";
			}

			if (!data.email) {
				errors.email = "Email is required.";
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
			) {
				errors.email = "Invalid email address. E.g. example@email.com";
			}

			if (!data.password) {
				errors.password = "Password is required.";
			}

			if (!data.confirmPassword) {
				errors.confirmPassword = "Confirm password is required.";
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
						<img src={signup} alt="" className={styles.log_img} />
						<h2>Receive payments from any banking system</h2>
						<p>
							Connect your bank card, and create accounts in the selected
							currency.
						</p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className={styles.log_form}>
						<img src="/img/signup-shop.svg" alt="" className={styles.emoji} />
						<div className={styles.log_form_head}>
							<h1>Join us</h1>
							<p>we are happy to see you here</p>
						</div>
						<form onSubmit={formik.handleSubmit}>
							<div className={styles.inputs_wrapper}>
								{/* Phone Number */}
								<TextInput
									inputLabel="Phone number"
									inputName="phoneNumber"
									placeHolder="Type your phone number"
									inputVal={formik.values.phoneNumber}
									changeHandler={formik.handleChange}
									inputError={getFormErrorMessage("phoneNumber")}
								/>

								{/* Email */}
								<TextInput
									inputLabel="E-mail"
									inputName="email"
									placeHolder="Type your e-mail"
									inputVal={formik.values.email}
									changeHandler={formik.handleChange}
									inputError={getFormErrorMessage("email")}
								/>

								{/* Password */}
								<PasswordInput
									inputLabel="Password"
									inputName="password"
									placeHolder="Type your pasword"
									inputVal={formik.values.password}
									changeHandler={formik.handleChange}
									inputError={getFormErrorMessage("password")}
								/>

								{/* Confirm Password */}
								<PasswordInput
									inputLabel="Confirm New Password"
									inputName="confirmPassword"
									placeHolder="Type confirm new password"
									inputVal={formik.values.confirmPassword}
									changeHandler={formik.handleChange}
									inputError={getFormErrorMessage("confirmPassword")}
								/>
							</div>
							<GradientButton btn type="submit" label="Sign Up" />
						</form>
						{/* Have Account */}
						<div className={styles.have_account}>
							<span>Already have an account?</span>
							<Link to="/login">Login</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
