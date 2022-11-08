// Child Components
import DocumentBox from "./components/DocumentBox/DocumentBox";

// STYLES
import styles from "./PersonalDocuments.module.scss";

const PersonalDocuments = () => {
	const documents = [
		{
			id: 1,
			image: "document1.png",
			name: "National ID front",
			size: "2M",
			status: "Pending",
		},
		{
			id: 2,
			image: "document2.png",
			name: "National ID back",
			size: "2M",
			status: "Done",
		},
		{
			id: 3,
			image: "document3.png",
			name: "Hr Letter",
			size: "2M",
			status: "Pending",
		},
		{
			id: 4,
			image: "document4.png",
			name: "Card Linces",
			size: "2M",
			status: "Done",
		},
	];
	return (
		<div className={styles.personal_documents}>
			<h2>Personal Documents</h2>

			{/* Documents */}
			<div className={styles.documents}>
				{documents.map((document) => (
					<DocumentBox document={document} key={document.id} />
				))}
			</div>

			{/* Other Files */}
			<div className={styles.other_files}>other files</div>
		</div>
	);
};

export default PersonalDocuments;
