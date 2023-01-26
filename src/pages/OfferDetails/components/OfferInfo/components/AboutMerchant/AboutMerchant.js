import { Link } from "react-router-dom";

// STYLES
import styles from "./AboutMerchant.module.scss";

const AboutMerchant = () => {
	const stores = [
		{
			id: 1,
			branch: "New Cairo",
			area: "Al Rehab",
		},
		{
			id: 2,
			branch: "Heliopolis",
			area: "Sun City Mall",
		},
		{
			id: 3,
			branch: "Maadi",
			area: "Al Lasilki",
		},
		{
			id: 4,
			branch: "Nasr City",
			area: "Technology Mall",
		},
		{
			id: 5,
			branch: "Downtown",
			area: "El Bostan Mall",
		},
		{
			id: 6,
			branch: "Heliopolis",
			area: "Sun City Mall",
		},
		{
			id: 9,
			branch: "Maadi",
			area: "Al Lasilki",
		},
		{
			id: 10,
			branch: "Maadi",
			area: "Al Lasilki",
		},
	];
	return (
		<div className={styles.about_merchant}>
			<div className={styles.about_sec}>
				<h5 className={styles.tit}>About:</h5>
				<p className={styles.about_txt}>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The point of
					using Lorem Ipsum is that it has a more-or-less normal distribution of
					letters, as opposed to using 'Content here, content here', making it
					look like readable English.
				</p>
			</div>
			<div className={styles.stores_sec}>
				<h5 className={styles.tit}>Stores:</h5>
				<div className={styles.stores}>
					{stores.map((store) => (
						<Link
							to=""
							key={store.id}
							className={styles.store_box}
							target="_blank"
						>
							<i className="pi pi-map-marker"></i>
							<span>
								{store.branch} - {store.area}
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutMerchant;
