// COMPONENTS
import OffersSlider from "./components/OffersSlider/OffersSlider";

// STYLES
import styles from "./OffersSection.module.scss";

const OffersSection = () => {
	return (
		<div className={styles.offers_section}>
			<img
				src="/img/offers-floatImg1.png"
				alt=""
				className={styles.floatImg1}
			/>
			<img
				src="/img/offers-floatImg2.png"
				alt=""
				className={styles.floatImg2}
			/>
			<div className="container">
				<div className={styles.offersSec_content}>
					<h2>Offers</h2>
					<p>
						How to benefit Choose Offer and you will be redirected to their main
						website
					</p>

					{/* Slider */}
					<OffersSlider />
				</div>
			</div>
		</div>
	);
};

export default OffersSection;
