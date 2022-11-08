<<<<<<< HEAD
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

// STYLES
import styles from "./GrayButton.module.scss";

const GrayButton = ({ ...props }) => {
	return (
		<>
			{props.btn ? (
				<Button
					type={props.type}
					label={props.label}
					className={styles.gray_btn}
					onClick={props.buttonClicked}
				>
					{props.withIcon && <img src={props.icon} alt="" />}
				</Button>
			) : (
				<Link to={props.redirectTo} className={styles.gray_btn}>
					<span>{props.label}</span>
					{props.withIcon && <img src={props.icon} alt="" />}
				</Link>
			)}
		</>
	);
};

export default GrayButton;
=======
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

// STYLES
import styles from "./GrayButton.module.scss";

const GrayButton = ({ ...props }) => {
	return (
		<>
			{props.btn ? (
				<Button
					type={props.type}
					label={props.label}
					className={styles.gray_btn}
				>
					{props.withIcon && <img src={props.icon} alt="" />}
				</Button>
			) : (
				<Link to={props.redirectTo} className={styles.gray_btn}>
					<span>{props.label}</span>
					{props.withIcon && <img src={props.icon} alt="" />}
				</Link>
			)}
		</>
	);
};

export default GrayButton;
>>>>>>> bank key pages
