<<<<<<< HEAD
import { RadioButton } from "primereact/radiobutton";

// STYLES
import styles from "./ColorRadioBtn.module.scss";

export function ColorRadioBtn({ ...props }) {
	return (
		<div className={styles.colorRadio_btn}>
			<div className="field-radiobutton">
				<RadioButton
					inputId={props.data.key}
					name={props.name}
					value={props.value}
					onChange={props.handleChange}
					checked={props.checked}
					className={props.data.key}
				/>
				<label htmlFor={props.data.key}>{props.data.name}</label>
			</div>
		</div>
	);
}
=======
import { RadioButton } from "primereact/radiobutton";

// STYLES
import styles from "./ColorRadioBtn.module.scss";

export function ColorRadioBtn({ ...props }) {
	return (
		<div className={styles.colorRadio_btn}>
			<div className="field-radiobutton">
				<RadioButton
					inputId={props.data.key}
					name={props.name}
					value={props.value}
					onChange={props.handleChange}
					checked={props.checked}
					className={props.data.key}
				/>
				<label htmlFor={props.data.key}>{props.data.name}</label>
			</div>
		</div>
	);
}
>>>>>>> bank key pages
