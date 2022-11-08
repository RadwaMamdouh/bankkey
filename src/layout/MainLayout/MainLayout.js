<<<<<<< HEAD
import { Outlet } from "react-router-dom";

// COMPONENTS
import Footer from "layout/Footer/Footer";
import Header from "layout/Header/Header";

// STYLES
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
	return (
		<div className={styles.main_layout}>
			<Header />
			<div className={styles.outlet_content}>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
=======
import { Outlet } from "react-router-dom";

// COMPONENTS
import Footer from "layout/Footer/Footer";
import Header from "layout/Header/Header";

// STYLES
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
	return (
		<div className={styles.main_layout}>
			<Header />
			<div className={styles.outlet_content}>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
>>>>>>> bank key pages
