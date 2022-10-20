// COMPONENTS
import BreadCrumbComp from "components/UI/BreadCrumbComp/BreadCrumbComp";
import PageTitle from "components/UI/PageTitle/PageTitle";

// Child Components
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import DescReviews from "./components/DescReviews/DescReviews";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";

// STYLES
import styles from "./ProductDetails.module.scss";

const ProductDetails = () => {
	// Bread Crumb
	const items = [
		{ label: "Home" },
		{ label: "Electronic Shop" },
		{ label: "Electronic Shop" },
		{ label: "LG OLED" },
	];

	return (
		<div className={styles.product_details}>
			<div className="container">
				{/* Bread Crumb */}
				<BreadCrumbComp items={items} />

				{/* Page Title */}
				<PageTitle title="LG OLED" />

				{/* Top Details */}
				<div className={styles.pro_details_top}>
					{/* Product Data */}
					<div className={styles.carousel_info}>
						<div className="row">
							{/* Product Images */}
							<div className="col-xl-6 mb-5 mb-xl-0">
								<ProductCarousel />
							</div>

							{/* Product Info */}
							<div className="col-xl-6">
								<ProductInfo />
							</div>
						</div>
					</div>

					{/* Description & Reviews */}
					<DescReviews />
				</div>

				{/* Related Products */}
				<RelatedProducts />
			</div>
		</div>
	);
};

export default ProductDetails;
