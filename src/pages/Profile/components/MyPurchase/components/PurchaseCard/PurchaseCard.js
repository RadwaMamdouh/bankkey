import { Carousel } from "primereact/carousel";

// STYLES
import styles from "./PurchaseCard.module.scss";

const PurchaseCard = () => {
	const products = [
		{
			id: 1,
			image: "purchase1.png",
			name: "Mac Book Pro",
			installment: "15.00",
			restPrice: "600.72",
		},
		{
			id: 2,
			image: "purchase2.png",
			name: "Head Phone",
			installment: "15.00",
			restPrice: "600.72",
		},
		{
			id: 3,
			image: "purchase2.png",
			name: "Head Phone",
			installment: "15.00",
			restPrice: "600.72",
		},
		{
			id: 4,
			image: "purchase2.png",
			name: "Head Phone",
			installment: "15.00",
			restPrice: "600.72",
		},
	];

	const responsiveOptions = [
		{
			breakpoint: "1400px",
			numVisible: 2,
			numScroll: 1,
		},
		{
			breakpoint: "600px",
			numVisible: 2,
			numScroll: 1,
		},
		{
			breakpoint: "480px",
			numVisible: 1,
			numScroll: 1,
		},
	];

	const purchaseTemplate = (product) => {
		return (
			<div className="purchase_item">
				<div className={styles.img}>
					<img src={`/img/${product.image}`} alt="" />
				</div>
				<div className={styles.info}>
					<div className={styles.name}>{product.name}</div>
					<div className={styles.installment}>
						Installment: {product.installment}EGP
					</div>
					<div className={styles.rest_price}>
						Rest Price : {product.restPrice}EGP
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className={styles.purchase_card}>
			<Carousel
				value={products}
				numVisible={3}
				numScroll={1}
				responsiveOptions={responsiveOptions}
				itemTemplate={purchaseTemplate}
				showIndicators={false}
			/>
		</div>
	);
};

export default PurchaseCard;
