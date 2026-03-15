import { useFormik } from "formik";
import { Link } from "react-router-dom";

// Utils
import { LOGO, forgetPassword } from "utils/constants/Images";

// COMPONENTS
import { TextInput } from "components/Form/Inputs";
import GradientButton from "components/UI/GradientButton/GradientButton";

// STYLES
import styles from "./ForgetPassword.module.scss";

const ForgetPassword = () => {
	const formik = useFormik({
		initialValues: {
			phoneNumber: "",
		},
		validate: (data) => {
			let errors = {};

			if (!data.phoneNumber) {
				errors.phoneNumber = "Phone number is required.";
			} else if (!/^[0-9]{9,15}$/g.test(data.phoneNumber)) {
				errors.phoneNumber = "Invalid phone number";
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
						<img src={forgetPassword} alt="" className={styles.log_img} />
						<h2>Receive payments from any banking system</h2>
						<p>
							Connect your bank card, and create accounts in the selected
							currency.
						</p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className={styles.log_form}>
						<img src="/img/key.svg" alt="" className={styles.emoji} />
						<div className={styles.log_form_head}>
							<h1>Forget password</h1>
							<p>please enter your phone number to recover password</p>
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

export default ForgetPassword;
