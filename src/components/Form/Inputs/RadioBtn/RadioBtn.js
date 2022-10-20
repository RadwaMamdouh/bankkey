import { RadioButton } from "primereact/radiobutton";

// STYLES
import styles from "./RadioBtn.module.scss";

export function RadioBtn({ ...props }) {
	return (
		<div className={styles.radio_btn}>
			<label className="field-radiobutton">
				<div className={styles.inputLbl}>
					<RadioButton
						name={props.name}
						value={props.value}
						onChange={props.handleChange}
						checked={props.checked}
					/>
					<div className={styles.lbl}>{props.label}</div>
				</div>
				<div className={styles.inputIcon}>
					{props.inputIcon &&
						props.inputIcon.map((icon, index) => (
							<img src={`/img/${icon}`} alt="" key={index} />
						))}
				</div>
			</label>
		</div>
	);
}
