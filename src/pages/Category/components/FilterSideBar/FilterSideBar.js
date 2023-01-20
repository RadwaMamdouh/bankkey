import { useState } from "react";

// COMPONENTS
import {
	CheckBox,
	ColorRadioBtn,
	FilterRange,
	SearchInput,
} from "components/Form/Inputs";
import DarkButton from "components/UI/DarkButton/DarkButton";
import GradientButton from "components/UI/GradientButton/GradientButton";

// Child Components
import FilterCollapse from "./components/FilterCollapse/FilterCollapse";
import FilterKey from "./components/FilterKey/FilterKey";

// STYLES
import styles from "./FilterSideBar.module.scss";

const FilterSideBar = () => {
	// Categories
	const categories = [
		{
			name: "Apple",
			key: "apple",
		},
		{
			name: "Dell",
			key: "dell",
		},
		{
			name: "HP",
			key: "hp",
		},
		{
			name: "Asos",
			key: "asos",
		},
		{
			name: "Canon",
			key: "canon",
		},
		{
			name: "All",
			key: "all",
		},
	];

	const [selectedCategories, setSelectedCategories] = useState([]);

	const onCategoryChange = (e) => {
		let _selectedCategories = [...selectedCategories];

		if (e.checked) {
			_selectedCategories.push(e.value);
		} else {
			for (let i = 0; i < _selectedCategories.length; i++) {
				const selectedCategory = _selectedCategories[i];

				if (selectedCategory.key === e.value.key) {
					_selectedCategories.splice(i, 1);
					break;
				}
			}
		}

		setSelectedCategories(_selectedCategories);
	};

	// Colors
	const colors = [
		{
			name: "Red",
			key: "red",
		},
		{
			name: "Green",
			key: "green",
		},
		{
			name: "Gray",
			key: "gray",
		},
		{
			name: "Black",
			key: "black",
		},
		{
			name: "Blue",
			key: "blue",
		},
		{
			name: "White",
			key: "white",
		},
	];

	const [selectedColor, setSelectedColor] = useState(null);

	// Devices
	const devices = [
		{
			name: "Phones",
			key: "phones",
		},
		{
			name: "Laptops",
			key: "laptops",
		},
		{
			name: "Printers",
			key: "printers",
		},
		{
			name: "Accessories",
			key: "accessories",
		},
		{
			name: "Sound Devices",
			key: "soundDevices",
		},
		{
			name: "Monitors",
			key: "monitors",
		},
	];

	const [selectedDevices, setSelectedDevices] = useState([]);

	const onDeviceChange = (e) => {
		let _selectedDevices = [...selectedDevices];

		if (e.checked) {
			_selectedDevices.push(e.value);
		} else {
			for (let i = 0; i < _selectedDevices.length; i++) {
				const selectedDevices = _selectedDevices[i];

				if (selectedDevices.key === e.value.key) {
					_selectedDevices.splice(i, 1);
					break;
				}
			}
		}

		setSelectedDevices(_selectedDevices);
	};

	return (
		<div className={styles.filter_holder}>
			<div className={styles.head}>
				<h2>Products Filter</h2>
				<img src="/img/filter.svg" alt="" />
			</div>
			<div className={styles.filter_body}>
				{/* Search */}
				<div className={styles.filter_box}>
					<FilterCollapse title="Search">
						<SearchInput placeHolder="Search product" />
						<div className={styles.search_keys}>
							<FilterKey title="Apple" />
							<FilterKey title="Iphone" />
							<FilterKey title="Laptop" />
							<FilterKey title="Mac book Pro" />
						</div>
					</FilterCollapse>
				</div>

				{/* Categories */}
				<div className={styles.filter_box}>
					<FilterCollapse title="Categories">
						{categories.map((category) => (
							<CheckBox
								name="categories"
								data={category}
								value={category}
								handleChange={onCategoryChange}
								checked={
									selectedCategories &&
									selectedCategories.some((item) => item.key === category.key)
								}
								key={category.key}
							/>
						))}
					</FilterCollapse>
				</div>

				{/* Price Filter */}
				<div className={styles.filter_box}>
					<FilterCollapse title="Price filter">
						<FilterRange />
					</FilterCollapse>
				</div>

				{/* Color */}
				<div className={styles.filter_box}>
					<FilterCollapse title="Color">
						{colors.map((color) => (
							<ColorRadioBtn
								name="colors"
								data={color}
								value={color}
								handleChange={(e) => setSelectedColor(e.value)}
								checked={selectedColor && selectedColor.key === color.key}
								key={color.key}
							/>
						))}
					</FilterCollapse>
				</div>

				{/* Devices */}
				<div className={styles.filter_box}>
					<FilterCollapse title="Devices">
						{devices.map((device) => (
							<CheckBox
								name="categories"
								data={device}
								value={device}
								handleChange={onDeviceChange}
								checked={
									selectedDevices &&
									selectedDevices.some((item) => item.key === device.key)
								}
								key={device.key}
							/>
						))}
					</FilterCollapse>
				</div>
			</div>

			{/* Filter Actions */}
			<div className={styles.filter_footer}>
				<DarkButton btn type="button" label="Clear" outlined />
				<GradientButton btn label="Apply" />
			</div>
		</div>
	);
};

export default FilterSideBar;
