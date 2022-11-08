import { Button } from "primereact/button";
import { Link } from "react-router-dom";

// STYLES
import styles from "./GradientButton.module.scss";

const GradientButton = ({ ...props }) => {
	return (
		<>
			{props.btn ? (
				<Button
					type={props.type}
					label={props.label}
					className={styles.gradient_btn}
				>
					{props.withIcon && <img src={props.icon} alt="" />}
				</Button>
			) : (
				<Link to={props.redirectTo} className={styles.gradient_btn}>
					<span>{props.label}</span>
					{props.withIcon && <img src={props.icon} alt="" />}
				</Link>
			)}
		</>
	);
};

export default GradientButton;
