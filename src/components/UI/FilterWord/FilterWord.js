<<<<<<< HEAD
// STYLES
import styles from "./FilterWord.module.scss";

const FilterWord = ({ category, ...props }) => {
	return (
		<label className={styles.filter_word}>
			<input
				type="radio"
				name="categories"
				value={category.value}
				onChange={props.handleChange}
				checked={props.checkedCat}
			/>
			<div className={styles.txt}>{category.label}</div>
		</label>
	);
};

export default FilterWord;
=======
// STYLES
import styles from "./FilterWord.module.scss";

const FilterWord = ({ category, ...props }) => {
	return (
		<label className={styles.filter_word}>
			<input
				type="radio"
				name="categories"
				value={category.value}
				onChange={props.handleChange}
				checked={props.checkedCat}
			/>
			<div className={styles.txt}>{category.label}</div>
		</label>
	);
};

export default FilterWord;
>>>>>>> bank key pages
