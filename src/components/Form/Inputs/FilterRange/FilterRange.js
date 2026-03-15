import { useState } from "react";
import { Slider } from "primereact/slider";

// STYLES
import styles from "./FilterRange.module.scss";

export function FilterRange({ from, to, ...props }) {
	const [value1, setValue1] = useState(50);

	return (
		<div className={styles.filter_range}>
			<Slider
				value={value1}
				min={50}
				max={500}
				onChange={(e) => setValue1(e.value)}
			/>
			<div className={styles.from_to}>
				<div className={styles.from_to_box}>
					<div className={styles.val}>
						{props.percentage ? "%" : "$"}
						{from}
					</div>
					<div className={styles.txt}>From</div>
				</div>
				<div className={styles.filter_val}>{value1}</div>
				<div className={styles.from_to_box}>
					<div className={styles.txt}>to</div>
					<div className={styles.val}>
						{props.percentage ? "%" : "$"}
						{to}
					</div>
				</div>
			</div>
		</div>
	);
}
