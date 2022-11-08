// STYLES
import styles from "./HowItWork.module.scss";

const HowItWork = () => {
	return (
		<section className={styles.how_it_work}>
			<div className="container">
				<h2>how does it work?</h2>
				<div className={styles.hr_line}></div>
				<div className="row">
					<div className="col-md-6 col-lg-4 col-xl-3 mb-5 mb-xl-0">
						<div className={styles.how_box}>
							<div className={styles.num}>01</div>
							<div className={styles.txt}>Improved employee happiness,</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 col-xl-3 mb-5 mb-xl-0">
						<div className={styles.how_box}>
							<div className={styles.num}>02</div>
							<div className={styles.txt}>
								Remove the hassle of handling corporate loans
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 col-xl-3 mb-5 mb-xl-0">
						<div className={styles.how_box}>
							<div className={styles.num}>03</div>
							<div className={styles.txt}>
								Remove the hassle of handling corporate loans
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 col-xl-3 mb-5 mb-xl-0">
						<div className={styles.how_box}>
							<div className={styles.num}>04</div>
							<div className={styles.txt}>
								Remove the hassle of handling corporate loans
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWork;
