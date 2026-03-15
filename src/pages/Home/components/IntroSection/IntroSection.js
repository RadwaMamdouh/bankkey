import { useEffect } from "react";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

import { Button } from "primereact/button";

// COMPONENTS
import GradientButton from "components/UI/GradientButton/GradientButton";

// Utils
import { IntroImg } from "utils/constants/Images";

// STYLES
import styles from "./IntroSection.module.scss";

const IntroSection = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<section className={styles.intro_section}>
			<div className="container">
				<div className="row d-flex align-items-center">
					<div className="col-lg-6 mb-4 mb-lg-0">
						<h1 data-aos="fade-right" data-aos-duration="1000">
							next generation Payment method or online payment
						</h1>
						<p data-aos="fade-right" data-aos-duration="1000">
							Send, recieve and pay bills anywhere in this world with one-click
							and fully secure payment method.
						</p>
						<div className={styles.btns_holder}>
							<Button
								className={styles.app_store_btn}
								data-aos="zoom-in"
								data-aos-duration="1200">
								<img src="/img/google-play.svg" alt="" />
							</Button>
							<Button
								className={styles.app_store_btn}
								data-aos="zoom-in"
								data-aos-duration="1200">
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
						<img
							src={IntroImg}
							alt=""
							className={styles.intro_img}
							data-aos="fade-left"
							data-aos-duration="1000"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default IntroSection;
