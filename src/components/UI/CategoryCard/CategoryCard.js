<<<<<<< HEAD
import { Link } from "react-router-dom";

// STYLES
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ categoryData }) => {
	return (
		<Link
			to={`/shop/category/${categoryData.id}`}
			className={styles.category_card}
		>
			<div className={styles.cat_img}>
				<img src={`/img/${categoryData.image}`} alt="" />
			</div>
			<div className={styles.cat_name}>{categoryData.name}</div>
		</Link>
	);
};

export default CategoryCard;
=======
import { Link } from "react-router-dom";

// STYLES
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ categoryData }) => {
	return (
		<Link
			to={`/shop/category/${categoryData.id}`}
			className={styles.category_card}
		>
			<div className={styles.cat_img}>
				<img src={`/img/${categoryData.image}`} alt="" />
			</div>
			<div className={styles.cat_name}>{categoryData.name}</div>
		</Link>
	);
};

export default CategoryCard;
>>>>>>> bank key pages
