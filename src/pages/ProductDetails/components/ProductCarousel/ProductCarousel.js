import { Galleria } from "primereact/galleria";

// STYLES
import styles from "./ProductCarousel.module.scss";

const ProductCarousel = () => {
	const images = [
		{
			itemImageSrc: "/img/carousel5.svg",
			thumbnailImageSrc: "/img/carousel1.svg",
			alt: "Description for Image 1",
			title: "Title 1",
		},
		{
			itemImageSrc: "/img/carousel2.svg",
			thumbnailImageSrc: "/img/carousel2.svg",
			alt: "Description for Image 2",
			title: "Title 2",
		},
		{
			itemImageSrc: "/img/carousel3.svg",
			thumbnailImageSrc: "/img/carousel3.svg",
			alt: "Description for Image 3",
			title: "Title 3",
		},
		{
			itemImageSrc: "/img/carousel4.svg",
			thumbnailImageSrc: "/img/carousel4.svg",
			alt: "Description for Image 4",
			title: "Title 4",
		},
	];

	const responsiveOptions2 = [
		{
			breakpoint: "768px",
			numVisible: 4,
		},
		{
			breakpoint: "560px",
			numVisible: 4,
		},
		{
			breakpoint: "414px",
			numVisible: 4,
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
		<div className={styles.product_carousel}>
			<Galleria
				value={images}
				responsiveOptions={responsiveOptions2}
				numVisible={4}
				thumbnailsPosition={window.innerWidth >= 768 ? "left" : "bottom"}
				style={{ maxWidth: "100%" }}
				item={itemTemplate}
				thumbnail={thumbnailTemplate}
				showThumbnailNavigators={false}
			/>
		</div>
	);
};

export default ProductCarousel;
