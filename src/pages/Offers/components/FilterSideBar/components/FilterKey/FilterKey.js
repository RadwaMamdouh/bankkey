import { Button } from "primereact/button";

// STYLES
import styles from "./FilterKey.module.scss";

const FilterKey = ({ title }) => {
	return (
		<div className={styles.filter_key}>
			<div className={styles.txt}>{title}</div>
			<Button
				className={`p-button-rounded p-button-text ${styles.removeBtn}`}
				aria-label="Remove"
			>
				<img src="/img/remove.svg" alt="" />
			</Button>
		</div>
	);
};

export default FilterKey;
