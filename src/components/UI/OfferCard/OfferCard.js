// COMPONENTS
import { Link } from "react-router-dom";
import GradientButton from "../GradientButton/GradientButton";

// STYLES
import styles from "./OfferCard.module.scss";

const OfferCard = ({ offer }) => {
	return (
		<div className={styles.offer_card}>
			<div className={styles.offer_img}>
				<img src={`/img/${offer.image}`} alt="" />
				{offer.bestOffer && (
					<div className={styles.best_offer}>
						<img src="/img/winner.svg" alt="" />
					</div>
				)}
			</div>
			<div className={styles.card_top}>
				<div className={styles.offer_logo}>
					<img src={`/img/${offer.logo}`} alt="" />
				</div>
				<div className={styles.name_category}>
					<Link to={`/offer/${offer.id}`} className={styles.name}>
						{offer.name}
					</Link>
					<div className={styles.category}>{offer.category}</div>
				</div>
			</div>
			<div className={styles.card_bottom}>
				<div className={styles.price_date}>
					<div className={styles.price}>
						<div className={styles.after_discount}>
							${offer.priceAfterDiscount}
						</div>
						<div className={styles.original_price}>${offer.price}</div>
					</div>
					<div className={styles.expired_date}>
						<img src="/img/calendar.svg" alt="" />
						<div className={styles.date}>Exp. {offer.expiredDate}</div>
					</div>
				</div>
				<div className={styles.offer_discount}>{offer.offerDiscount}</div>
				<div className={styles.offer_desc}>{offer.description}</div>

				{/* Get Offer Btn */}
				<GradientButton btn label="Get Offer" />
			</div>
		</div>
	);
};

export default OfferCard;
