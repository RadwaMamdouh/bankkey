// COMPONENTS
import Bannar from "components/UI/Bannar/Bannar";
import BreadCrumbComp from "components/UI/BreadCrumbComp/BreadCrumbComp";
import OfferCard from "components/UI/OfferCard/OfferCard";
import PageTitle from "components/UI/PageTitle/PageTitle";
import Pagination from "components/UI/Pagination/Pagination";

// Child Components
import FilterSideBar from "./components/FilterSideBar/FilterSideBar";

// STYLES
import styles from "./Offers.module.scss";

const Offers = () => {
	// Bread Crumb
	const items = [{ label: "Home" }, { label: "Offers" }, { label: "Amazon" }];

	// Offer Card
	const offerCards = [
		{
			id: 1,
			image: "offer3.png",
			logo: "amazon.svg",
			name: "Dell Optiplex Amazon",
			category: "Electronics",
			price: 200,
			priceAfterDiscount: 120,
			expiredDate: "2024-01-01",
			offerDiscount: "30% Discount on Dell LapTop",
			description: "Dell Optiplex 9020 Small Form Business Desktop",
			bestOffer: false,
		},
		{
			id: 2,
			image: "offer4.png",
			logo: "amazon.svg",
			name: "head phone from noon",
			category: "Accessories",
			price: 200,
			priceAfterDiscount: 120,
			expiredDate: "2024-01-01",
			offerDiscount: "30% Discount on ICook",
			description:
				"I-Cook- Gas Cooker from Unionaire – 5 Burners – C6080SSNC511IDSC",
			bestOffer: false,
		},
		{
			id: 3,
			image: "offer5.png",
			logo: "amazon.svg",
			name: "head phone from noon",
			category: "Accessories",
			price: 200,
			priceAfterDiscount: 120,
			expiredDate: "2024-01-01",
			offerDiscount: "30% Discount on ICook",
			description:
				"I-Cook- Gas Cooker from Unionaire – 5 Burners – C6080SSNC511IDSC",
			bestOffer: false,
		},
		{
			id: 4,
			image: "offer6.png",
			logo: "amazon.svg",
			name: "Dell Optiplex  B.TECH",
			category: "Electronics",
			price: 200,
			priceAfterDiscount: 120,
			expiredDate: "2024-01-01",
			offerDiscount: "30% Discount on Dell LapTop",
			description: "Dell Optiplex 9020 Small Form Business Desktop",
			bestOffer: false,
		},
		{
			id: 5,
			image: "offer7.png",
			logo: "amazon.svg",
			name: "head phone from noon",
			category: "Accessories",
			price: 200,
			priceAfterDiscount: 120,
			expiredDate: "2024-01-01",
			offerDiscount: "30% Discount on ICook",
			description:
				"I-Cook- Gas Cooker from Unionaire – 5 Burners – C6080SSNC511IDSC",
			bestOffer: false,
		},
		{
			id: 6,
			image: "offer8.png",
			logo: "amazon.svg",
			name: "head phone from noon",
			category: "Accessories",
			price: 200,
			priceAfterDiscount: 120,
			expiredDate: "2024-01-01",
			offerDiscount: "30% Discount on ICook",
			description:
				"I-Cook- Gas Cooker from Unionaire – 5 Burners – C6080SSNC511IDSC",
			bestOffer: false,
		},
		{
			id: 7,
			image: "offer5.png",
			logo: "amazon.svg",
			name: "Dell Optiplex  B.TECH",
			category: "Electronics",
			price: 200,
			priceAfterDiscount: 120,
			expiredDate: "2024-01-01",
			offerDiscount: "30% Discount on Dell LapTop",
			description: "Dell Optiplex 9020 Small Form Business Desktop",
			bestOffer: false,
		},
		{
			id: 8,
			image: "offer9.png",
			logo: "amazon.svg",
			name: "head phone from noon",
			category: "Accessories",
			price: 200,
			priceAfterDiscount: 120,
			expiredDate: "2024-01-01",
			offerDiscount: "30% Discount on ICook",
			description:
				"I-Cook- Gas Cooker from Unionaire – 5 Burners – C6080SSNC511IDSC",
			bestOffer: false,
		},
		{
			id: 9,
			image: "offer6.png",
			logo: "amazon.svg",
			name: "head phone from noon",
			category: "Accessories",
			price: 200,
			priceAfterDiscount: 120,
			expiredDate: "2024-01-01",
			offerDiscount: "30% Discount on ICook",
			description:
				"I-Cook- Gas Cooker from Unionaire – 5 Burners – C6080SSNC511IDSC",
			bestOffer: false,
		},
	];

	return (
		<div className={styles.offers}>
			<div className="container">
				{/* Bread Crumb */}
				<BreadCrumbComp items={items} />

				{/* Page Title */}
				<PageTitle title="Offers Found" />

				{/* Bannar */}
				<Bannar />

				{/* Page Content */}
				<div className="row">
					<div className="col-lg-4 col-xl-3 mb-4 mb-lg-0">
						<FilterSideBar />
					</div>
					<div className="col-lg-8 col-xl-9">
						<div className={styles.offers_cards}>
							<div className="row">
								{offerCards.map((offer) => (
									<div className="col-md-6 col-xl-4" key={offer.id}>
										<OfferCard offer={offer} />
									</div>
								))}
							</div>
						</div>

						<Pagination />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Offers;
