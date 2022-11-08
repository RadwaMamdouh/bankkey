<<<<<<< HEAD
import { useState } from "react";

// COMPONENTS
import BreadCrumbComp from "components/UI/BreadCrumbComp/BreadCrumbComp";
import PageTitle from "components/UI/PageTitle/PageTitle";
import Bannar from "components/UI/Bannar/Bannar";
import { SearchInput } from "components/Form/Inputs";
import GradientButton from "components/UI/GradientButton/GradientButton";
import FilterWord from "components/UI/FilterWord/FilterWord";
import CategoryCard from "components/UI/CategoryCard/CategoryCard";
import Pagination from "components/UI/Pagination/Pagination";

// STYLES
import styles from "./Shop.module.scss";

const Shop = () => {
	// Bread Crumb
	const items = [{ label: "Home" }, { label: "Shops" }];

	// CategoriesWords
	const categoriesWords = [
		{
			id: 1,
			label: "All",
			value: "all",
		},
		{
			id: 2,
			label: "Electronics",
			value: "e1",
		},
		{
			id: 3,
			label: "Fashion And Clothes",
			value: "f1",
		},
		{
			id: 4,
			label: "Electronics",
			value: "e2",
		},
		{
			id: 5,
			label: "Fashion And Clothes",
			value: "f2",
		},
		{
			id: 6,
			label: "Electronics",
			value: "e3",
		},
		{
			id: 7,
			label: "Fashion And Clothes",
			value: "f3",
		},
		{
			id: 8,
			label: "Electronics",
			value: "e4",
		},
		{
			id: 9,
			label: "Fashion And Clothes",
			value: "f4",
		},
		{
			id: 10,
			label: "Electronics",
			value: "e5",
		},
		{
			id: 11,
			label: "Fashion And Clothes",
			value: "f5",
		},
	];
	const [selectedCategory, setSelectedCategory] = useState(
		categoriesWords[0].value
	);

	// categories
	const categories = [
		{
			id: 1,
			image: "cat1.png",
			name: "Arafa Stores",
		},
		{
			id: 2,
			image: "cat2.png",
			name: "Bath and body works",
		},
		{
			id: 3,
			image: "cat3.png",
			name: "Sharp",
		},
		{
			id: 4,
			image: "cat4.png",
			name: "2B",
		},
		{
			id: 5,
			image: "cat5.png",
			name: "El Araby",
		},
		{
			id: 6,
			image: "cat6.png",
			name: "Sumsung",
		},
		{
			id: 7,
			image: "cat7.png",
			name: "Sharp",
		},
		{
			id: 8,
			image: "cat4.png",
			name: "2B",
		},
		{
			id: 9,
			image: "cat1.png",
			name: "Arafa Stores",
		},
		{
			id: 10,
			image: "cat2.png",
			name: "Bath and body works",
		},
		{
			id: 11,
			image: "cat3.png",
			name: "Sharp",
		},
		{
			id: 12,
			image: "cat4.png",
			name: "2B",
		},
	];

	return (
		<div className={styles.shop}>
			<div className="container">
				{/* Bread Crumb */}
				<BreadCrumbComp items={items} />

				{/* Page Title */}
				<PageTitle title="Shops" />

				{/* Bannar */}
				<Bannar></Bannar>

				{/* Search Categories */}
				<div className={styles.categories_box}>
					{/* Search Input Holder */}
					<div className={styles.srch_holder}>
						<div className="row align-items-center">
							<div className="col-md-10">
								<SearchInput placeHolder="Shop search" />
							</div>
							<div className="col-md-2">
								<GradientButton btn label="Search" />
							</div>
						</div>
					</div>

					{/* Filter Words */}
					<div className={styles.filter_words}>
						{categoriesWords.map((cat) => (
							<FilterWord
								key={cat.id}
								category={cat}
								handleChange={(e) => setSelectedCategory(e.target.value)}
								checkedCat={selectedCategory === cat.value}
							/>
						))}
					</div>
				</div>

				{/* Categories */}
				<div className={styles.categories}>
					<div className="row">
						{categories.map((category) => (
							<div className="col-md-6 col-lg-4 col-xl-3" key={category.id}>
								<CategoryCard categoryData={category} />
							</div>
						))}
					</div>
				</div>

				<Pagination />
			</div>
		</div>
	);
};

export default Shop;
=======
import { useState } from "react";

// COMPONENTS
import BreadCrumbComp from "components/UI/BreadCrumbComp/BreadCrumbComp";
import PageTitle from "components/UI/PageTitle/PageTitle";
import Bannar from "components/UI/Bannar/Bannar";
import { SearchInput } from "components/Form/Inputs";
import GradientButton from "components/UI/GradientButton/GradientButton";
import FilterWord from "components/UI/FilterWord/FilterWord";
import CategoryCard from "components/UI/CategoryCard/CategoryCard";
import Pagination from "components/UI/Pagination/Pagination";

// STYLES
import styles from "./Shop.module.scss";

const Shop = () => {
	// Bread Crumb
	const items = [{ label: "Home" }, { label: "Shops" }];

	// CategoriesWords
	const categoriesWords = [
		{
			id: 1,
			label: "All",
			value: "all",
		},
		{
			id: 2,
			label: "Electronics",
			value: "e1",
		},
		{
			id: 3,
			label: "Fashion And Clothes",
			value: "f1",
		},
		{
			id: 4,
			label: "Electronics",
			value: "e2",
		},
		{
			id: 5,
			label: "Fashion And Clothes",
			value: "f2",
		},
		{
			id: 6,
			label: "Electronics",
			value: "e3",
		},
		{
			id: 7,
			label: "Fashion And Clothes",
			value: "f3",
		},
		{
			id: 8,
			label: "Electronics",
			value: "e4",
		},
		{
			id: 9,
			label: "Fashion And Clothes",
			value: "f4",
		},
		{
			id: 10,
			label: "Electronics",
			value: "e5",
		},
		{
			id: 11,
			label: "Fashion And Clothes",
			value: "f5",
		},
	];
	const [selectedCategory, setSelectedCategory] = useState(
		categoriesWords[0].value
	);

	// categories
	const categories = [
		{
			id: 1,
			image: "cat1.png",
			name: "Arafa Stores",
		},
		{
			id: 2,
			image: "cat2.png",
			name: "Bath and body works",
		},
		{
			id: 3,
			image: "cat3.png",
			name: "Sharp",
		},
		{
			id: 4,
			image: "cat4.png",
			name: "2B",
		},
		{
			id: 5,
			image: "cat5.png",
			name: "El Araby",
		},
		{
			id: 6,
			image: "cat6.png",
			name: "Sumsung",
		},
		{
			id: 7,
			image: "cat7.png",
			name: "Sharp",
		},
		{
			id: 8,
			image: "cat4.png",
			name: "2B",
		},
		{
			id: 9,
			image: "cat1.png",
			name: "Arafa Stores",
		},
		{
			id: 10,
			image: "cat2.png",
			name: "Bath and body works",
		},
		{
			id: 11,
			image: "cat3.png",
			name: "Sharp",
		},
		{
			id: 12,
			image: "cat4.png",
			name: "2B",
		},
	];

	return (
		<div className={styles.shop}>
			<div className="container">
				{/* Bread Crumb */}
				<BreadCrumbComp items={items} />

				{/* Page Title */}
				<PageTitle title="Shops" />

				{/* Bannar */}
				<Bannar />

				{/* Search Categories */}
				<div className={styles.categories_box}>
					{/* Search Input Holder */}
					<div className={styles.srch_holder}>
						<div className="row align-items-center">
							<div className="col-md-10">
								<SearchInput placeHolder="Shop search" />
							</div>
							<div className="col-md-2">
								<GradientButton btn label="Search" />
							</div>
						</div>
					</div>

					{/* Filter Words */}
					<div className={styles.filter_words}>
						{categoriesWords.map((cat) => (
							<FilterWord
								key={cat.id}
								category={cat}
								handleChange={(e) => setSelectedCategory(e.target.value)}
								checkedCat={selectedCategory === cat.value}
							/>
						))}
					</div>
				</div>

				{/* Categories */}
				<div className={styles.categories}>
					<div className="row">
						{categories.map((category) => (
							<div className="col-md-6 col-lg-4 col-xl-3" key={category.id}>
								<CategoryCard categoryData={category} />
							</div>
						))}
					</div>
				</div>

				<Pagination />
			</div>
		</div>
	);
};

export default Shop;
>>>>>>> bank key pages
