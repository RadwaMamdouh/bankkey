import { Button } from "primereact/button";

// COMPONENTS
import GradientButton from "components/UI/GradientButton/GradientButton";

// STYLES
import styles from "./IntroSection.module.scss";

const IntroSection = () => {
	return (
		<section className={styles.intro_section}>
			<div className="container">
				<div className="row d-flex align-items-center">
					<div className="col-lg-6 mb-4 mb-lg-0">
						<h1>next generation Payment method or online payment</h1>
						<p>
							Send, recieve and pay bills anywhere in this world with one-click
							and fully secure payment method.
						</p>
						<div className={styles.btns_holder}>
							<Button className={styles.app_store_btn}>
								<img src="/img/google-play.svg" alt="" />
							</Button>
							<Button className={styles.app_store_btn}>
								<img src="/img/app-store.svg" alt="" />
							</Button>
						</div>
						<GradientButton
							btn
							label="offer BankyKey for you"
							withIcon
							icon="/img/arrow-right.svg"
						/>
					</div>
					<div className="col-lg-6">
						<img src="/img/intro-img.png" alt="" className={styles.intro_img} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default IntroSection;
