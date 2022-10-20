import { Button } from "primereact/button";
import { Link } from "react-router-dom";

// STYLES
import styles from "./DarkButton.module.scss";

const DarkButton = ({ ...props }) => {
	return props.btn ? (
		<Button
			type={props.type}
			label={props.label}
			className={`${styles.dark_btn} ${props.outlined && styles.outlinedBtn}`}
			onClick={props.buttonClicked}
		>
			{props.withIcon && (
				<img src={props.icon} alt="" className={styles.btn_img} />
			)}
		</Button>
	) : (
		<Link
			to={props.redirectTo}
			className={`${styles.dark_btn} ${props.outlined && styles.outlinedBtn}`}
		>
			{props.withIcon && <img src={props.icon} alt="" />}
			<span>{props.label}</span>
		</Link>
	);
};

export default DarkButton;
