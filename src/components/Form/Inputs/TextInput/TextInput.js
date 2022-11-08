import { InputText } from "primereact/inputtext";

// STYLES
import styles from "./TextInput.module.scss";

export function TextInput({ ...props }) {
	return (
		<div className="input_holder">
			<label className={styles.field_holder}>
				{props.inputLabel && <h6>{props.inputLabel}</h6>}
				<InputText
					name={props.inputName}
					value={props.inputVal}
					placeholder={props.placeHolder}
					onChange={props.changeHandler}
					className="w-100"
				/>
			</label>
			{props.inputError}
		</div>
	);
}
