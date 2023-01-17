// COMPONENTS
import DialogBox from "../DialogBox/DialogBox";

// STYLES
import styles from "./DeleteDocumentModal.module.scss";

const DeleteDocumentModal = ({ ...props }) => {
	return (
		<DialogBox
			header="Delete Document"
			displayDialog={props.showModal}
			hideModal={props.hideModal}
			buttonLbl="Confirm"
		>
			<div className={styles.delete_document_modal}>
				<img
					src="/img/delete-msg-icon.svg"
					alt=""
					className={styles.delete_icon}
				/>
				<h5>Are you sure you want to delete this document?</h5>
				<p>Please make sure that you want to delete this document </p>
			</div>
		</DialogBox>
	);
};

export default DeleteDocumentModal;
