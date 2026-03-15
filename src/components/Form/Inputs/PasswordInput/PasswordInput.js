import { Password } from "primereact/password";

// STYLES
import styles from "./PasswordInput.module.scss";

export function PasswordInput({ ...props }) {
	return (
		<div className="input_holder">
			<label className={styles.field_holder}>
				{props.inputLabel && <h6>{props.inputLabel}</h6>}
				<Password
					name={props.inputName}
					value={props.inputVal}
					placeholder={props.placeHolder}
					onChange={props.changeHandler}
					toggleMask
					className="w-100"
				/>
			</label>
			{props.inputError}
		</div>
	);
}
