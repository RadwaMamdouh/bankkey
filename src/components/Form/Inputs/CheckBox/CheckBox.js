import { Checkbox } from "primereact/checkbox";

// STYLES
import styles from "./CheckBox.module.scss";

export function CheckBox({ ...props }) {
	return (
		<div className={styles.check_box}>
			<div className="field-checkbox">
				<Checkbox
					inputId={props.data.key}
					name={props.name}
					value={props.value}
					onChange={props.handleChange}
					checked={props.checked}
				/>
				<label htmlFor={props.data.key}>{props.data.name}</label>
			</div>
		</div>
	);
}
