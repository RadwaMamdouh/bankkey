import { Carousel } from "primereact/carousel";

// COMPONENTS
import OfferSlider from "components/UI/OfferSlider/OfferSlider";
import OfferCard from "components/UI/OfferCard/OfferCard";

// STYLES
import styles from "./MoreOffers.module.scss";

const MoreOffers = () => {
	// Responsive Carousel Options
	const responsiveOptions = [
		{
			breakpoint: "1024px",
			numVisible: 3,
			numScroll: 1,
		},
		{
			breakpoint: "992px",
			numVisible: 2,
			numScroll: 1,
		},
		{
			breakpoint: "768px",
			numVisible: 2,
			numScroll: 1,
		},
		{
			breakpoint: "600px",
			numVisible: 1,
			numScroll: 1,
		},
	];

	// Offer Card
	const offerCard = [
		{
			id: 1,
			image: "offer5.png",
			logo: "amazon.svg",
			name: "Dell Optiplex  B.TECH",
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
			id: 2,
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
			id: 3,
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
		{
			id: 4,
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
			id: 5,
			image: "offer5.png",
			logo: "amazon.svg",
			name: "Dell Optiplex  B.TECH",
			category: "Electronics",
			price: 200,
			priceAfterDiscount: 120,
			expiredDate: "2024-01-01",
			offerDiscount: "30% Discount on ICook",
			description:
				"I-Cook- Gas Cooker from Unionaire – 5 Burners – C6080SSNC511IDSC",
			bestOffer: false,
		},
	];

	const offerTemplate = (offer) => {
		return <OfferCard offer={offer} />;
	};

	return (
		<div className={styles.more_offers}>
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

			<div className={styles.more_offers_slider}>
				<div className="container">
					<h2 className={styles.more_offers_title}>More offers</h2>
					<p className={styles.more_offers_desc}>
						How to benefit Choose Offer and you will be redirected to their main
						website
					</p>

					{/* Offers Slider */}
					<OfferSlider>
						<Carousel
							value={offerCard}
							numVisible={4}
							numScroll={1}
							responsiveOptions={responsiveOptions}
							itemTemplate={offerTemplate}
							showNavigators={false}
						/>
					</OfferSlider>
				</div>
			</div>
		</div>
	);
};

export default MoreOffers;
