// STYLES
import styles from "./GuaranteePrivacy.module.scss";

const GuaranteePrivacy = () => {
	return (
		<section className={styles.guarantee_privacy}>
			<div className="container">
				<div className="row d-flex align-items-center">
					<div className="col-lg-4">
						<img
							src="/img/guarantee-img.png"
							alt=""
							className={styles.guarantee_img}
						/>
					</div>
					<div className="col-lg-8 mb-5 mb-lg-0">
						<h2>A simple mobile experience that guarantees your privacy</h2>
						<p>
							Manage and track your savings, expenses, and receive valuable
							financial recommendations
						</p>
						<img src="/img/coins.svg" alt="" className={styles.coins_img} />
						<div className={styles.cards_holder}>
							<div className={styles.cardBox}>
								<div className={styles.icon}>
									<img src="/img/users.svg" alt="" />
								</div>
								<div className={styles.count}>1M + Users</div>
							</div>
							<div className={styles.cardBox}>
								<div className={styles.icon}>
									<img src="/img/secure.svg" alt="" />
								</div>
								<div className={styles.count}>100% Secure</div>
							</div>
							<div className={styles.cardBox}>
								<div className={styles.icon}>
									<img src="/img/fees.svg" alt="" />
								</div>
								<div className={styles.count}>0% Fees</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GuaranteePrivacy;
