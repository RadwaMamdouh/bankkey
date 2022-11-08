// STYLES
import styles from "./OurSolutions.module.scss";

const OurSolutions = () => {
	return (
		<section className={styles.our_solutions}>
			<img
				src="/img/solution-ellipses1.svg"
				alt=""
				className={styles.ellipses1}
			/>
			<img
				src="/img/solution-ellipses2.svg"
				alt=""
				className={styles.ellipses2}
			/>
			<div className="container">
				<h2>Our Solutions</h2>
				<div className={styles.solution_cards}>
					<div className="row">
						<div className="col-md-6 col-lg-6 col-xl-4 mb-5 mb-xl-0">
							<div className={styles.solution_card}>
								<div className={styles.img}>
									<img src="/img/shopping.svg" alt="" />
								</div>
								<h5>Shopping from top merchants</h5>
								<p>
									of bills, mobile, internet, electricity, landline, water and
									more
								</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-6 col-xl-4 mb-5 mb-xl-0">
							<div className={styles.solution_card}>
								<div className={styles.img}>
									<img src="/img/discounts.svg" alt="" />
								</div>
								<h5>Discounts</h5>
								<p>
									of bills, mobile, internet, electricity, landline, water and
									more
								</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-6 col-xl-4 mb-5 mb-xl-0">
							<div className={styles.solution_card}>
								<div className={styles.img}>
									<img src="/img/settlements.svg" alt="" />
								</div>
								<h5>settlements</h5>
								<p>
									of bills, mobile, internet, electricity, landline, water and
									more
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurSolutions;
