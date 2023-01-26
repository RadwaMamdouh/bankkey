// COMPONENTS
import BreadCrumbComp from "components/UI/BreadCrumbComp/BreadCrumbComp";
import PageTitle from "components/UI/PageTitle/PageTitle";

// Child Components
import OfferCarousel from "./components/OfferCarousel/OfferCarousel";
import OfferInfo from "./components/OfferInfo/OfferInfo";
import MoreOffers from "./components/MoreOffers/MoreOffers";

// STYLES
import styles from "./OfferDetails.module.scss";

const OfferDetails = () => {
	// Bread Crumb
	const items = [
		{ label: "Home" },
		{ label: "Offers" },
		{ label: "Dell Optiplex Amazon" },
	];

	return (
		<div className={styles.offer_details}>
			<div className="container">
				{/* Bread Crumb */}
				<BreadCrumbComp items={items} />

				{/* Page Title */}
				<PageTitle title="In Stores offers" />

				{/* Top Details */}
				<div className={styles.offer_details_top}>
					{/* Offer Data */}
					<div className={styles.carousel_info}>
						<div className="row">
							{/* Offer Images */}
							<div className="col-xl-6 mb-5 mb-xl-0">
								<OfferCarousel />
							</div>

							{/* Offer Info */}
							<div className="col-xl-6">
								<OfferInfo />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* More Offers */}
			<MoreOffers />
		</div>
	);
};

export default OfferDetails;
