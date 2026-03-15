import { Button } from "primereact/button";

// Utils
import { editYellow, deleteYellow } from "utils/constants/Images";

// COMPONENTS
import Status from "components/UI/Status/Status";
import DeleteDocumentModal from "components/UI/DeleteDocumentModal/DeleteDocumentModal";

// STYLES
import styles from "./DocumentBox.module.scss";
import { useState } from "react";

const DocumentBox = ({ document }) => {
	const [deleteModal, setDeleteModal] = useState(false);

	return (
		<>
			<div className={styles.document_box}>
				<div className={styles.doc_img}>
					<img src={`/img/${document.image}`} alt="" />
				</div>
				<div className={styles.doc_info}>
					<div className={styles.doc_name}>{document.name}</div>
					<div className={styles.size_status}>
						<div className={styles.size}>Size {document.size}</div>
						<Status status={document.status} />
					</div>
					<div className={styles.doc_btns}>
						<Button aria-label="Edit" className={styles.doc_btn}>
							<img src={editYellow} alt="" />
						</Button>
						<Button
							aria-label="Delete"
							className={styles.doc_btn}
							onClick={() => setDeleteModal(true)}>
							<img src={deleteYellow} alt="" />
						</Button>
					</div>
				</div>
			</div>

			{/* Delete Document Modal */}
			<DeleteDocumentModal
				showModal={deleteModal}
				hideModal={() => setDeleteModal(false)}
			/>
		</>
	);
};

export default DocumentBox;
