<<<<<<< HEAD
import { Carousel } from "primereact/carousel";

// COMPONENTS
import ProductCard from "components/UI/ProductCard/ProductCard";

// STYLES
import styles from "./RelatedProducts.module.scss";

const RelatedProducts = () => {
	// Products
	const products = [
		{
			id: 1,
			image: "product4.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 200,
			priceAfterDiscount: 120,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 2,
			image: "product5.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 200,
			priceAfterDiscount: 120,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 3,
			image: "product6.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 200,
			priceAfterDiscount: 120,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 4,
			image: "product1.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 200,
			priceAfterDiscount: 120,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 1,
			image: "product4.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 200,
			priceAfterDiscount: 120,
			discount: 17,
			rate: 4.3,
		},
	];

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

	const productTemplate = (product) => {
		return <ProductCard product={product} />;
	};

	return (
		<div className={styles.related_products}>
			<div className={styles.related_products_title}>Related Products</div>
			<Carousel
				value={products}
				numVisible={4}
				numScroll={1}
				responsiveOptions={responsiveOptions}
				itemTemplate={productTemplate}
				showNavigators={false}
			/>
		</div>
	);
};

export default RelatedProducts;
=======
import { Carousel } from "primereact/carousel";

// COMPONENTS
import ProductCard from "components/UI/ProductCard/ProductCard";

// STYLES
import styles from "./RelatedProducts.module.scss";

const RelatedProducts = () => {
	// Products
	const products = [
		{
			id: 1,
			image: "product4.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 200,
			priceAfterDiscount: 120,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 2,
			image: "product5.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 200,
			priceAfterDiscount: 120,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 3,
			image: "product6.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 200,
			priceAfterDiscount: 120,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 4,
			image: "product1.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 200,
			priceAfterDiscount: 120,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 1,
			image: "product4.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 200,
			priceAfterDiscount: 120,
			discount: 17,
			rate: 4.3,
		},
	];

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

	const productTemplate = (product) => {
		return <ProductCard product={product} />;
	};

	return (
		<div className={styles.related_products}>
			<div className={styles.related_products_title}>Related Products</div>
			<Carousel
				value={products}
				numVisible={4}
				numScroll={1}
				responsiveOptions={responsiveOptions}
				itemTemplate={productTemplate}
				showNavigators={false}
			/>
		</div>
	);
};

export default RelatedProducts;
>>>>>>> bank key pages
