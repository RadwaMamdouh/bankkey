// COMPONENTS
import Rank from "components/UI/Rank/Rank";
import CustomRadioBtn from "components/Form/Inputs/CustomRadioBtn/CustomRadioBtn";
import GradientButton from "components/UI/GradientButton/GradientButton";
// import LikeButton from "components/UI/LikeButton/LikeButton";
// import CartButton from "components/UI/CartButton/CartButton";

// STYLES
import styles from "./ProductInfo.module.scss";

const ProductInfo = () => {
	// Size
	const sizes = [
		{
			label: "106 cm (42)",
			value: 106,
		},
		{
			label: "121 cm (48)",
			value: 121,
		},
		{
			label: "139 cm (55)",
			value: 139,
		},
		{
			label: "164 cm (65)",
			value: 164,
		},
		{
			label: "196 cm (77)",
			value: 196,
		},
	];

	// Installments
	const installments = [
		{
			label: "6",
			value: 6,
		},
		{
			label: "12",
			value: 12,
		},
		{
			label: "18",
			value: 18,
		},
		{
			label: "24",
			value: 24,
		},
		{
			label: "36",
			value: 36,
		},
	];

	return (
		<div className={styles.product_info}>
			<div className={styles.product_info_row}>
				<div className={styles.model_rate}>
					<div className={styles.model}>Model: OLED42C2PSA</div>
					<Rank rankVal={4.3} />
				</div>
				<div className={styles.availability}>
					<div className={styles.availability_txt}>Availability:</div>
					<div className={styles.availability_val}>
						only 2 avilable in stock
					</div>
				</div>
				<h2>LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR</h2>
				<ul className={styles.details_list}>
					<li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
					<li>
						Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume
					</li>
					<li>Hands-free Voice Control, Always Ready</li>
					<li>
						Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode
					</li>
					<li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
				</ul>
			</div>

			{/* Size */}
			<div className={styles.product_info_row}>
				<div className={styles.sec_tit}>Size</div>
				<div className={styles.sizes}>
					{sizes.map((size, index) => (
						<CustomRadioBtn
							name="size"
							label={size.label}
							value={size.value}
							key={index}
						/>
					))}
				</div>
			</div>

			{/* Price & Installments */}
			<div className={styles.product_info_row}>
				{/* Total Price & Per Installment */}
				<div className={styles.price_installment}>
					<div className="row">
						<div className="col-md-6">
							<div className={styles.price_installment_box}>
								<div className={styles.tit}>Total price:</div>
								<div className={styles.price_holder}>
									<div className={styles.price}>$600.72</div>
									<div className={styles.afterDiscount}>$800.00</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className={styles.price_installment_box}>
								<div className={styles.tit}>Per instalment:</div>
								<div className={styles.price_holder}>
									<div className={styles.price}>$15.72</div>
									<div className={styles.afterDiscount}>$80.00</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Installmets */}
				<div className={styles.installments}>
					<div className={styles.installments_tit}>Installments</div>
					<div className={styles.installments_boxes}>
						{installments.map((installment, index) => (
							<CustomRadioBtn
								name="installments"
								label={installment.label}
								value={installment.value}
								key={index}
								installmentLbl
							/>
						))}
					</div>
				</div>

				{/* Buttons */}
				<div className={styles.btns_holder}>
					{/* Buy Now Btn */}
					<GradientButton label="Buy Now" btn />

					{/* Like Btn */}
					{/* <LikeButton /> */}

					{/* Cart Btn */}
					{/* <CartButton /> */}
				</div>
			</div>
		</div>
	);
};

export default ProductInfo;
