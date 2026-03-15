import { TabView, TabPanel } from "primereact/tabview";

// Child Components
import Description from "./components/Description/Description";
import Reviews from "./components/Reviews/Reviews";

// STYLES
import styles from "./DescReviews.module.scss";

const DescReviews = () => {
	return (
		<div className={styles.desc_reviews}>
			<TabView>
				<TabPanel header="Description">
					<div className={styles.description_body}>
						<Description />
					</div>
				</TabPanel>
				<TabPanel header="Reviews">
					<div className={styles.reviews_body}>
						<Reviews />
					</div>
				</TabPanel>
			</TabView>
		</div>
	);
};

export default DescReviews;
