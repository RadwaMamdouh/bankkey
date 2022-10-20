import { Button } from "primereact/button";
import { Link } from "react-router-dom";

// Utils
import { FooterLogo } from "utils/constants/Images";

// STYLES
import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<div className={styles.app_footer}>
			<div className="container">
				<div className={styles.footer_content}>
					<div className={styles.top_footer}>
						<div className="row">
							<div className="col-md-6 col-xl-4 mb-5 mb-xl-0">
								<div className={styles.footer_col}>
									<div className={styles.footer_logo}>
										<img src={FooterLogo} alt="" />
									</div>
									<p className={styles.app_desc}>
										Social Payment For Eazypay and Payment Transfer
									</p>
									<div className={styles.btns_holder}>
										<Button className={styles.app_store_btn}>
											<img src="/img/google-play.svg" alt="" />
										</Button>
										<Button className={styles.app_store_btn}>
											<img src="/img/app-store.svg" alt="" />
										</Button>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-2 mb-5 mb-xl-0">
								<div className={styles.footer_col}>
									<h5>Company</h5>
									<div className={styles.footer_links}>
										<Link to="">About Us</Link>
										<Link to="">Careers</Link>
										<Link to="">Contact</Link>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-2 mb-5 mb-xl-0">
								<div className={styles.footer_col}>
									<h5>Help</h5>
									<div className={styles.footer_links}>
										<Link to="">Blog</Link>
										<Link to="">FAQ</Link>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-4 mb-5 mb-xl-0">
								<div className={`${styles.footer_col} ${styles.last_col}`}>
									<div className={styles.last_footer_links}>
										<Link to="">Terms of Service</Link>
										<Link to="">Privacy Policy</Link>
									</div>
									<div className={styles.social_links}>
										<Link to="" target="_blank" className={styles.social_link}>
											<img src="/img/facebook.png" alt="" />
										</Link>
										<Link to="" target="_blank" className={styles.social_link}>
											<img src="/img/twitter.png" alt="" />
										</Link>
										<Link to="" target="_blank" className={styles.social_link}>
											<img src="/img/linkedin.png" alt="" />
										</Link>
										<Link to="" target="_blank" className={styles.social_link}>
											<img src="/img/instagram.png" alt="" />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.copyRights}>© BankyKey 2022. All rights</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
