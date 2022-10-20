import { Carousel } from "primereact/carousel";

// STYLES
import styles from "./CustomerSlider.module.scss";

const CustomerSlider = () => {
	// Responsive Carousel Options
	const responsiveOptions = [
		{
			breakpoint: "1024px",
			numVisible: 1,
			numScroll: 1,
		},
		{
			breakpoint: "600px",
			numVisible: 1,
			numScroll: 1,
		},
		{
			breakpoint: "480px",
			numVisible: 1,
			numScroll: 1,
		},
	];

	// Customer Card
	const customerCard = [
		{
			id: 1,
			img: "customer.png",
			name: "Ahmed Abd El-Fatah",
			comment:
				"Our partners create innovative platforms for merchants that trust Payme to process their payments.",
		},
		{
			id: 1,
			img: "customer.png",
			name: "Ahmed Abd El-Fatah",
			comment:
				"Our partners create innovative platforms for merchants that trust Payme to process their payments.",
		},
		{
			id: 1,
			img: "customer.png",
			name: "Ahmed Abd El-Fatah",
			comment:
				"Our partners create innovative platforms for merchants that trust Payme to process their payments.",
		},
	];

	const customerTemplate = (customer) => {
		return (
			<div className={styles.customer_card}>
				<div className={styles.customer_img}>
					<img src={`/img/${customer.img}`} alt="" />
				</div>
				<div className={styles.card_txt}>
					<h4>{customer.name}</h4>
					<p>
						<q>{customer.comment}</q>
					</p>
				</div>
			</div>
		);
	};

	return (
		<div className={styles.customer_slider}>
			<Carousel
				value={customerCard}
				numVisible={1}
				numScroll={1}
				responsiveOptions={responsiveOptions}
				itemTemplate={customerTemplate}
			/>
		</div>
	);
};

export default CustomerSlider;
