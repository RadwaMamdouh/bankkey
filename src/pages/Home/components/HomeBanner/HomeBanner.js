// COMPONENTS
import Bannar from "components/UI/Bannar/Bannar";

// STYLES
import styles from "./HomeBanner.module.scss";

const HomeBanner = () => {
	return (
		<div className={styles.home_banner}>
			<div className="container">
				<Bannar />
			</div>
		</div>
	);
};

export default HomeBanner;
