import { useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";

// Utils
import { LOGO } from "utils/constants/Images";

// COMPONENTS
import GrayButton from "components/UI/GrayButton/GrayButton";
import GradientButton from "components/UI/GradientButton/GradientButton";

// STYLES
import styles from "./Header.module.scss";

const Header = () => {
	// Show Side Bar
	const [show, setShow] = useState(false);

	// Token
	const token = true;

	const navigate = useNavigate();

	// User Dropdown
	const menu = useRef(null);
	const menu2 = useRef(null);
	const items = [
		{
			label: "Profile",
			icon: "pi pi-user",
			command: () => {
				navigate("/profile");
			},
		},
		{
			label: "Logout",
			icon: "pi pi-sign-out",
			command: () => {},
		},
	];

	return (
		<>
			<header
				className={`${styles.app_header} ${!token ? "" : styles.logged_header}`}>
				<div className="container">
					<div className={styles.app_header_content}>
						<div className={styles.header_left}>
							<Link to="/" className={styles.app_logo}>
								<img src={LOGO} alt="" />
							</Link>

							<ul className={`${styles.menu_links} d-none d-lg-flex`}>
								<li className={styles.menu_link}>
									<NavLink to="/">Home</NavLink>
								</li>
								<li className={styles.menu_link}>
									<NavLink to="/shop">Shop</NavLink>
								</li>
								<li className={styles.menu_link}>
									<NavLink to="">Careers</NavLink>
								</li>
								<li className={styles.menu_link}>
									<NavLink to="/offers">Offers</NavLink>
								</li>
								<li className={styles.menu_link}>
									<NavLink to="">Contact Us</NavLink>
								</li>
							</ul>
						</div>

						{/* Open Side Bar in Responsive */}
						<Button
							className={`${styles.openSidebarBtn} d-flex d-lg-none`}
							onClick={() => setShow(true)}>
							<img src="/img/burger.png" alt="" />
						</Button>

						<div className="d-none d-lg-flex">
							{!token ? (
								<div className={styles.header_btns}>
									<GrayButton label="Login" redirectTo="/login" />
									<GradientButton label="Sign up" redirectTo="/sign-up" />
								</div>
							) : (
								<>
									{/* Open Side Bar in Responsive */}
									<Button
										className={`${styles.openSidebarBtn} d-flex d-lg-none`}
										onClick={() => setShow(true)}>
										<img src="/img/burger.png" alt="" />
									</Button>

									<div className={`${styles.logged_actions} d-none d-lg-flex`}>
										{/*<Button className={styles.icon_btn}>
											<img src="/img/shopping-bag.svg" alt="" />
										</Button>
										<Button className={styles.icon_btn}>
											<img src="/img/heart.svg" alt="" />
										</Button>*/}
										<div className={styles.user_dropdown}>
											<Menu
												model={items}
												popup
												ref={menu}
												id="popup_menu"
												appendTo="self"
											/>
											<Button
												className={styles.menu_btn}
												onClick={(event) => menu.current.toggle(event)}
												aria-controls="popup_menu"
												aria-haspopup>
												<div className={styles.profile_pic}>
													<img src="/img/profile.png" alt="" />
												</div>
												<div className={styles.name}>Alaa Abd El Hafez</div>
												<i className="pi pi-angle-down"></i>
											</Button>
										</div>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</header>

			{/* Responsive Header */}
			<div
				className={`${styles.responsive_header} ${
					!token ? "" : styles.responsive_logged_header
				} ${show && styles.show} d-flex d-lg-none`}>
				{/* Open Side Bar */}
				<Button
					className={styles.closeSidebarBtn}
					onClick={() => setShow(false)}>
					<i className="pi pi-times"></i>
				</Button>

				<div className={styles.sidebar_content}>
					<ul className={styles.menu_links}>
						<li className={styles.menu_link}>
							<NavLink to="/">Home</NavLink>
						</li>
						<li className={styles.menu_link}>
							<NavLink to="/shop">Shop</NavLink>
						</li>
						<li className={styles.menu_link}>
							<NavLink to="">Careers</NavLink>
						</li>
						<li className={styles.menu_link}>
							<NavLink to="/offers">Offers</NavLink>
						</li>
						<li className={styles.menu_link}>
							<NavLink to="">Contact Us</NavLink>
						</li>
					</ul>
					{!token ? (
						<div className={styles.header_btns}>
							<GrayButton label="Login" redirectTo="/login" />
							<GradientButton label="Sign up" redirectTo="/sign-up" />
						</div>
					) : (
						<div className={`${styles.logged_actions}`}>
							{/*
							<Button className={styles.icon_btn}>
								<img src="/img/shopping-bag-white.svg" alt="" />
							</Button>
							<Button className={styles.icon_btn}>
								<img src="/img/heart-white.svg" alt="" />
							</Button>
							*/}
							<div className={styles.user_dropdown}>
								<Menu
									model={items}
									popup
									ref={menu2}
									id="popup_menu"
									appendTo="self"
								/>
								<Button
									className={styles.menu_btn}
									onClick={(event) => menu2.current.toggle(event)}
									aria-controls="popup_menu"
									aria-haspopup>
									<div className={styles.profile_pic}>
										<img src="/img/profile.png" alt="" />
									</div>
									<div className={styles.name}>Alaa Abd El Hafez</div>
									<i className="pi pi-angle-down"></i>
								</Button>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Header;
