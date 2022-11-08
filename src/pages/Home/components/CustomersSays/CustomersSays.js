<<<<<<< HEAD
// Child Components
import CustomerSlider from "./components/CustomerSlider/CustomerSlider";

// STYLES
import styles from "./CustomersSays.module.scss";

const CustomersSays = () => {
	return (
		<section className={styles.customers_says}>
			<img
				src="/img/customers-says-ellipses.svg"
				alt=""
				className={styles.ellipses1}
			/>
			<div className="container">
				<h2>
					our customers says
					<br /> about us
				</h2>

				{/* Slider */}
				<CustomerSlider />
			</div>
		</section>
	);
};

export default CustomersSays;
=======
// Child Components
import CustomerSlider from "./components/CustomerSlider/CustomerSlider";

// STYLES
import styles from "./CustomersSays.module.scss";

const CustomersSays = () => {
	return (
		<section className={styles.customers_says}>
			<img
				src="/img/customers-says-ellipses.svg"
				alt=""
				className={styles.ellipses1}
			/>
			<div className="container">
				<h2>
					our customers says
					<br /> about us
				</h2>

				{/* Slider */}
				<CustomerSlider />
			</div>
		</section>
	);
};

export default CustomersSays;
>>>>>>> bank key pages
