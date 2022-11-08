import { Link, useParams } from "react-router-dom";

// COMPONENTS
import Rank from "../Rank/Rank";
import GradientButton from "../GradientButton/GradientButton";
import LikeButton from "../LikeButton/LikeButton";
import CartButton from "../CartButton/CartButton";

// STYLES
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
	let { id } = useParams();

	return (
		<div className={styles.product_card}>
			<div className={styles.pro_img}>
				<img src={`/img/${product.image}`} alt="" />
				<div className={styles.discount}>-${product.discount}% off</div>
			</div>
			<div className={styles.product_card_body}>
				<Link
					to={`/shop/category/${id}/product/${product.id}`}
					className={styles.product_name}
				>
					{product.name}
				</Link>
				<div className={styles.price_rate}>
					<div className={styles.price}>
						<div className={styles.afterDiscount}>
							${product.priceAfterDiscount}
						</div>
						<div className={styles.original_price}>${product.price}</div>
					</div>
					<Rank rankVal={product.rate} />
				</div>
				<div className={styles.card_btns}>
					{/* Buy Now Btn */}
					<GradientButton btn label="Buy Now" />

					{/* Like Btn */}
					<LikeButton />

					{/* Cart Btn */}
					<CartButton />
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
