<<<<<<< HEAD
// Utils
import { getStatus } from "utils/getStatus";

// STYLES
import styles from "./Status.module.scss";

const Status = ({ status }) => {
	return (
		<div className={styles.status}>
			<div className={getStatus(status)}>{status}</div>
		</div>
	);
};

export default Status;
=======
// Utils
import { getStatus } from "utils/getStatus";

// STYLES
import styles from "./Status.module.scss";

const Status = ({ status }) => {
	return (
		<div className={styles.status}>
			<div className={getStatus(status)}>{status}</div>
		</div>
	);
};

export default Status;
>>>>>>> bank key pages
