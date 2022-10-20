import { Galleria } from "primereact/galleria";

// STYLES
import styles from "./OfferCarousel.module.scss";

const OfferCarousel = () => {
	const images = [
		{
			itemImageSrc: "/img/offerSlider.png",
			thumbnailImageSrc: "/img/offerSlider.png",
			alt: "Description for Image 1",
			title: "Title 1",
		},
		{
			itemImageSrc: "/img/offerSlider1.png",
			thumbnailImageSrc: "/img/offerSlider1.png",
			alt: "Description for Image 2",
			title: "Title 2",
		},
		{
			itemImageSrc: "/img/offerSlider2.png",
			thumbnailImageSrc: "/img/offerSlider2.png",
			alt: "Description for Image 3",
			title: "Title 3",
		},
		{
			itemImageSrc: "/img/offerSlider3.png",
			thumbnailImageSrc: "/img/offerSlider3.png",
			alt: "Description for Image 4",
			title: "Title 4",
		},
	];

	const responsiveOptions2 = [
		{
			breakpoint: "768px",
			numVisible: 3,
		},
		{
			breakpoint: "560px",
			numVisible: 2,
		},
		{
			breakpoint: "414px",
			numVisible: 2,
		},
	];

	const itemTemplate = (item) => {
		return (
			<img
				src={item.itemImageSrc}
				onError={(e) =>
					(e.target.src =
						"https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
				}
				alt={item.alt}
				style={{ width: "100%", display: "block" }}
			/>
		);
	};

	const thumbnailTemplate = (item) => {
		return (
			<img
				src={item.thumbnailImageSrc}
				onError={(e) =>
					(e.target.src =
						"https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
				}
				alt={item.alt}
				style={{ width: "100%", display: "block" }}
			/>
		);
	};

	return (
		<div className={styles.offer_carousel}>
			<Galleria
				value={images}
				responsiveOptions={responsiveOptions2}
				numVisible={3}
				thumbnailsPosition="bottom"
				style={{ maxWidth: "100%" }}
				item={itemTemplate}
				thumbnail={thumbnailTemplate}
				showThumbnailNavigators={false}
			/>
		</div>
	);
};

export default OfferCarousel;
