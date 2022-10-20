import { Outlet } from "react-router-dom";

// STYLES
import styles from "./AuthLayout.module.scss";

const AuthLayout = () => {
	return (
		<div className={styles.auth_layout}>
			<Outlet />
		</div>
	);
};

export default AuthLayout;
