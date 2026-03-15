import { useFormik } from "formik";
import { Link } from "react-router-dom";

// Utils
import { LOGO, login } from "utils/constants/Images";

// COMPONENTS
import { PasswordInput, TextInput } from "components/Form/Inputs";
import GradientButton from "components/UI/GradientButton/GradientButton";

// STYLES
import styles from "./LogIn.module.scss";

const LogIn = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
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

			if (!data.password) {
				errors.password = "Password is required.";
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
						<img src={login} alt="" className={styles.log_img} />
						<h2>Receive payments from any banking system</h2>
						<p>
							Connect your bank card, and create accounts in the selected
							currency.
						</p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className={styles.log_form}>
						<img src="/img/waving-hand.svg" alt="" className={styles.emoji} />
						<div className={styles.log_form_head}>
							<h1>Welcome back!</h1>
							<p>Please login to access your account.</p>
						</div>
						<form onSubmit={formik.handleSubmit}>
							<div className={styles.inputs_wrapper}>
								{/* Email */}
								<TextInput
									inputLabel="E-mail or phone number"
									inputName="email"
									placeHolder="Type your e-mail or phone number"
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
							</div>
							<Link to="/forget-password" className={styles.forget_pass}>
								Forgot password?
							</Link>
							<GradientButton btn type="submit" label="Login" />
						</form>
						{/* Have Account */}
						<div className={styles.have_account}>
							<span>Don't have an account?</span>
							<Link to="/sign-up">Sign Up</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
