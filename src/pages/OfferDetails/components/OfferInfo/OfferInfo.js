import { TabView, TabPanel } from "primereact/tabview";

// Child Components
import OfferDetails from "./components/OfferDetails/OfferDetails";
import AboutMerchant from "./components/AboutMerchant/AboutMerchant";

// STYLES
import styles from "./OfferInfo.module.scss";

const OfferInfo = () => {
	return (
		<div className={styles.offer_info}>
			<div className={styles.offer_info_top}>
				<div className={styles.offer_logo}>
					<img src="/img/noon.svg" alt="" />
				</div>
				<div className={styles.right_side}>
					<h2 className={styles.pro_name}>PS5 DualSense Wireless Controller</h2>
					<div className={styles.category_date}>
						<div className={styles.category_name}>Electronics</div>
						<div className={styles.expire_date}>
							<img src="/img/calendar-red.svg" alt="" />
							<span>Exp. 2024-01-01</span>
						</div>
					</div>
					<p className={styles.pro_desc}>
						How to benefit Choose Offer and you will be redirected to their main
						website
					</p>
				</div>
			</div>

			{/* Offer Details & About Merchant */}
			<div className={styles.merchant_details}>
				<TabView>
					<TabPanel header="Offer Details">
						<div className={styles.details_body}>
							<OfferDetails />
						</div>
					</TabPanel>
					<TabPanel header="About Marchent">
						<div className={styles.merchant_body}>
							<AboutMerchant />
						</div>
					</TabPanel>
				</TabView>
			</div>
		</div>
	);
};

export default OfferInfo;
