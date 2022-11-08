import { Button } from "primereact/button";

// COMPONENTS
import Status from "components/UI/Status/Status";

// STYLES
import styles from "./DocumentBox.module.scss";

const DocumentBox = ({ document }) => {
	return (
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
						<img src="/img/edit-pink.svg" alt="" />
					</Button>
					<Button aria-label="Delete" className={styles.doc_btn}>
						<img src="/img/delete-pink.svg" alt="" />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default DocumentBox;
