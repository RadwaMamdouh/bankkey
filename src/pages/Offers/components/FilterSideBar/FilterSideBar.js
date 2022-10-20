import { useState } from "react";

// COMPONENTS
import { CheckBox, FilterRange, SearchInput } from "components/Form/Inputs";
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

	// Locations
	const locations = [
		{
			name: "Cairo",
			key: "cairo",
		},
		{
			name: "Giza",
			key: "giza",
		},
		{
			name: "Alexandria",
			key: "alexandria",
		},
		{
			name: "Suez",
			key: "suez",
		},
		{
			name: "Ismailia",
			key: "ismailia",
		},
		{
			name: "Port-Said",
			key: "portSaid",
		},
	];

	const [selectedLocations, setSelectedLocations] = useState([]);

	const onLocationChange = (e) => {
		let _selectedLocations = [...selectedLocations];

		if (e.checked) {
			_selectedLocations.push(e.value);
		} else {
			for (let i = 0; i < _selectedLocations.length; i++) {
				const selectedDevices = _selectedLocations[i];

				if (selectedDevices.key === e.value.key) {
					_selectedLocations.splice(i, 1);
					break;
				}
			}
		}

		setSelectedLocations(_selectedLocations);
	};

	return (
		<div className={styles.filter_holder}>
			<div className={styles.head}>
				<h2>Offers Filters</h2>
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

				{/* Offer Precentage */}
				<div className={styles.filter_box}>
					<FilterCollapse title="Offer precentage">
						<FilterRange from="10" to="100" percentage />
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

				{/* Filter By Location */}
				<div className={styles.filter_box}>
					<FilterCollapse title="Filter by location">
						{locations.map((location) => (
							<CheckBox
								name="locations"
								data={location}
								value={location}
								handleChange={onLocationChange}
								checked={
									selectedLocations &&
									selectedLocations.some((item) => item.key === location.key)
								}
								key={location.key}
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
