<<<<<<< HEAD
import { InputTextarea } from "primereact/inputtextarea";

// STYLES
import styles from "./TextAreaInput.module.scss";

const TextAreaInput = ({ label, ...props }) => {
	return (
		<div className={styles.textarea_holder}>
			<label className={styles.field_holder}>
				{label.length > 0 && <h6>{label}</h6>}
				<InputTextarea
					className={styles.textArea_input}
					name={props.name}
					value={props.value}
					onChange={props.changeHandler}
					placeholder={props.placeHolder}
				/>
			</label>
			{props.inputError}
		</div>
	);
};

export default TextAreaInput;
=======
import { InputTextarea } from "primereact/inputtextarea";

// STYLES
import styles from "./TextAreaInput.module.scss";

const TextAreaInput = ({ label, ...props }) => {
	return (
		<div className={styles.textarea_holder}>
			<label className={styles.field_holder}>
				{label.length > 0 && <h6>{label}</h6>}
				<InputTextarea
					className={styles.textArea_input}
					name={props.name}
					value={props.value}
					onChange={props.changeHandler}
					placeholder={props.placeHolder}
				/>
			</label>
			{props.inputError}
		</div>
	);
};

export default TextAreaInput;
>>>>>>> bank key pages
