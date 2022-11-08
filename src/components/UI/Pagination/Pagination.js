import { useState } from "react";
import { Paginator } from "primereact/paginator";

// STYLES
import styles from "./Pagination.module.scss";

const Pagination = () => {
	const [basicFirst, setBasicFirst] = useState(0);
	const [basicRows, setBasicRows] = useState(10);
	const onBasicPageChange = (event) => {
		setBasicFirst(event.first);
		setBasicRows(event.rows);
	};

	return (
		<div className={styles.pagination}>
			<Paginator
				first={basicFirst}
				rows={basicRows}
				totalRecords={120}
				onPageChange={onBasicPageChange}
			></Paginator>
		</div>
	);
};

export default Pagination;
