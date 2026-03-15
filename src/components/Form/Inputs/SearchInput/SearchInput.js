import { InputText } from "primereact/inputtext";

// STYLES
import styles from "./SearchInput.module.scss";

export function SearchInput({ ...props }) {
	return (
		<div className={styles.search_input}>
			<span className="p-input-icon-right">
				<i className="pi pi-search" />
				<InputText placeholder={props.placeHolder} className="w-100" />
			</span>
		</div>
	);
}
