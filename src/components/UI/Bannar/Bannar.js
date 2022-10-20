// STYLES
import styles from "./Bannar.module.scss";

const Bannar = ({ children }) => {
	return <div className={styles.bannar}>{children}</div>;
};

export default Bannar;
