// STYLES
import styles from "./Partners.module.scss";

const Partners = () => {
	return (
		<section className={styles.partners}>
			<img
				src="/img/partners-ellipses1.svg"
				alt=""
				className={styles.ellipses1}
			/>
			<div className="container">
				<div className={styles.partners_content}>
					<h2>Partners</h2>
					<h5>Powering payments for partners around the world</h5>
					<p>
						Our partners create innovative platforms for merchants that trust
						Payme to process their payments.
					</p>
					<div className={styles.hr_line}></div>
					<div
						className={styles.partners_imgs}
						data-aos="flip-up"
						data-aos-duration="3000"
						data-aos-delay="500">
						<img
							src="/img/shinhan-bank.svg"
							alt=""
							className={styles.partner_img}
						/>
						<img src="/img/tp-bank.svg" alt="" className={styles.partner_img} />
						<img src="/img/acb.svg" alt="" className={styles.partner_img} />
						<img src="/img/gucci.svg" alt="" className={styles.partner_img} />
						<img src="/img/nike.svg" alt="" className={styles.partner_img} />
						<img src="/img/puma.svg" alt="" className={styles.partner_img} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Partners;
