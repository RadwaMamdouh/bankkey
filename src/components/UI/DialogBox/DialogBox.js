import { Dialog } from "primereact/dialog";

// COMPONENTS
import DialogBtns from "../DialogBtns/DialogBtns";

// STYLES
import styles from "./DialogBox.module.scss";

const DialogBox = ({
	header,
	displayDialog,
	hideModal,
	children,
	...props
}) => {
	return (
		<Dialog
			className={styles.dialog_box}
			header={header}
			visible={displayDialog}
			style={{ width: "50vw" }}
			footer={
				!props.hideBtns && (
					<DialogBtns
						btnLbl={props.buttonLbl}
						closeDialog={hideModal}
						btnClicked={props.btnClicked}
					/>
				)
			}
			onHide={hideModal}
		>
			{children}
		</Dialog>
	);
};

export default DialogBox;
