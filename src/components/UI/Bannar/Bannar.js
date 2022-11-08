<<<<<<< HEAD
// STYLES
import styles from "./Bannar.module.scss";

const Bannar = ({ children }) => {
	return <div className={styles.bannar}>{children}</div>;
};

export default Bannar;
=======
// STYLES
import styles from "./Bannar.module.scss";

const Bannar = ({ img }) => {
	return (
		<div className={styles.bannar}>
			{/* <img src={`/img/${img}`} alt="" /> */}
		</div>
	);
};

export default Bannar;
>>>>>>> bank key pages
