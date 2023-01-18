import { Carousel } from "primereact/carousel";

// COMPONENTS
import OfferCard from "components/UI/OfferCard/OfferCard";

// STYLES
import styles from "./OffersSlider.module.scss";

const OffersSlider = () => {
	// Responsive Carousel Options
	const responsiveOptions = [
		{
			breakpoint: "1024px",
			numVisible: 4,
			numScroll: 1,
		},
		{
			breakpoint: "768px",
			numVisible: 2,
			numScroll: 1,
		},
		{
			breakpoint: "600",
			numVisible: 1,
			numScroll: 1,
		},
	];

	// Offer Card
	const offerCard = [
		{
			id: 1,
			image: "offer1.png",
			logo: "kfc-logo.svg",
			name: "KFC Batates And Zalabya",
			category: "Food",
			price: 200,
			priceAfterDiscount: 120,
			expiredDate: "2024-01-01",
			offerDiscount: "20% Discount on Zalabya",
			description: "Reedeamble at all KFC restaurants in the UK.",
			bestOffer: true,
		},
		{
			id: 2,
			image: "offer2.png",
			logo: "unionair.svg",
			name: "ICook Gas Cooker Unionaire",
			category: "Electronics",
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
			image: "offer3.png",
			logo: "b-tech.svg",
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
			id: 4,
			image: "offer4.png",
			logo: "noon.svg",
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
			id: 5,
			image: "offer1.png",
			logo: "kfc-logo.svg",
			name: "KFC Batates And Zalabya",
			category: "Food",
			price: 200,
			priceAfterDiscount: 120,
			expiredDate: "2024-01-01",
			offerDiscount: "20% Discount on Zalabya",
			description: "Reedeamble at all KFC restaurants in the UK.",
			bestOffer: true,
		},
	];

	const offerTemplate = (offer) => {
		return <OfferCard offer={offer} />;
	};

	return (
		<div className={styles.offer_slider}>
			<Carousel
				value={offerCard}
				numVisible={4}
				numScroll={1}
				responsiveOptions={responsiveOptions}
				itemTemplate={offerTemplate}
				showNavigators={false}
			/>
		</div>
	);
};

export default OffersSlider;
