<<<<<<< HEAD
// COMPONENTS
import DarkButton from "../DarkButton/DarkButton";

// STYLES
import styles from "./DialogBtns.module.scss";

const DialogBtns = ({ ...props }) => {
	return (
		<div className={styles.dialog_btns}>
			<DarkButton
				btn
				type="button"
				label="Cancel"
				outlined
				buttonClicked={props.closeDialog}
			/>
			<DarkButton
				btn
				type="button"
				label={props.btnLbl}
				buttonClicked={props.btnClicked}
			/>
		</div>
	);
};

export default DialogBtns;
=======
// COMPONENTS
import DarkButton from "../DarkButton/DarkButton";

// STYLES
import styles from "./DialogBtns.module.scss";

const DialogBtns = ({ ...props }) => {
	return (
		<div className={styles.dialog_btns}>
			<DarkButton
				btn
				type="button"
				label="Cancel"
				outlined
				buttonClicked={props.closeDialog}
			/>
			<DarkButton
				btn
				type="button"
				label={props.btnLbl}
				buttonClicked={props.btnClicked}
			/>
		</div>
	);
};

export default DialogBtns;
>>>>>>> bank key pages
