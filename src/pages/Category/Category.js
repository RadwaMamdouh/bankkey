<<<<<<< HEAD
// COMPONENTS
import BreadCrumbComp from "components/UI/BreadCrumbComp/BreadCrumbComp";
import PageTitle from "components/UI/PageTitle/PageTitle";
import Bannar from "components/UI/Bannar/Bannar";
import ProductCard from "components/UI/ProductCard/ProductCard";
import Pagination from "components/UI/Pagination/Pagination";

// Child Components
import FilterSideBar from "./components/FilterSideBar/FilterSideBar";

// STYLES
import styles from "./Category.module.scss";

const Category = () => {
	// Bread Crumb
	const items = [
		{ label: "Home" },
		{ label: "Electronic Shop" },
		{ label: "Filter Result" },
	];

	// Products
	const products = [
		{
			id: 1,
			image: "product1.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 2,
			image: "product2.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 3,
			image: "product3.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 4,
			image: "product4.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 5,
			image: "product5.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 6,
			image: "product6.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 7,
			image: "product7.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 8,
			image: "product8.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 9,
			image: "product2.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
	];

	return (
		<div className={styles.category}>
			<div className="container">
				{/* Bread Crumb */}
				<BreadCrumbComp items={items} />

				{/* Page Title */}
				<PageTitle title="Electronic Shop" />

				{/* Bannar */}
				<Bannar></Bannar>

				{/* Page Content */}
				<div className="row">
					<div className="col-lg-4 col-xl-3 mb-4 mb-lg-0">
						<FilterSideBar />
					</div>
					<div className="col-lg-8 col-xl-9">
						<div className={styles.products}>
							<div className="row">
								{products.map((product) => (
									<div className="col-md-6 col-xl-4" key={product.id}>
										<ProductCard product={product} />
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

export default Category;
=======
// COMPONENTS
import BreadCrumbComp from "components/UI/BreadCrumbComp/BreadCrumbComp";
import PageTitle from "components/UI/PageTitle/PageTitle";
import Bannar from "components/UI/Bannar/Bannar";
import ProductCard from "components/UI/ProductCard/ProductCard";
import Pagination from "components/UI/Pagination/Pagination";

// Child Components
import FilterSideBar from "./components/FilterSideBar/FilterSideBar";

// STYLES
import styles from "./Category.module.scss";

const Category = () => {
	// Bread Crumb
	const items = [
		{ label: "Home" },
		{ label: "Electronic Shop" },
		{ label: "Filter Result" },
	];

	// Products
	const products = [
		{
			id: 1,
			image: "product1.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 2,
			image: "product2.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 3,
			image: "product3.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 4,
			image: "product4.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 5,
			image: "product5.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 6,
			image: "product6.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 7,
			image: "product7.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 8,
			image: "product8.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
		{
			id: 9,
			image: "product2.png",
			name: "Dell Optiplex 9020 Small Form Business Desktop",
			price: 120,
			priceAfterDiscount: 200,
			discount: 17,
			rate: 4.3,
		},
	];

	return (
		<div className={styles.category}>
			<div className="container">
				{/* Bread Crumb */}
				<BreadCrumbComp items={items} />

				{/* Page Title */}
				<PageTitle title="Electronic Shop" />

				{/* Bannar */}
				<Bannar />

				{/* Page Content */}
				<div className="row">
					<div className="col-lg-4 col-xl-3 mb-4 mb-lg-0">
						<FilterSideBar />
					</div>
					<div className="col-lg-8 col-xl-9">
						<div className={styles.products}>
							<div className="row">
								{products.map((product) => (
									<div className="col-md-6 col-xl-4" key={product.id}>
										<ProductCard product={product} />
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

export default Category;
>>>>>>> bank key pages
