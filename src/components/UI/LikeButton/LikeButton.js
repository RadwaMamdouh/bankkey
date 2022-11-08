<<<<<<< HEAD
import { useState } from "react";
import { Button } from "primereact/button";

// STYLES
import styles from "./LikeButton.module.scss";

const LikeButton = () => {
	const [like, setLike] = useState(false);

	return (
		<Button
			aria-label="Like"
			className={styles.iconBtn}
			onClick={() => setLike(!like)}
		>
			{!like ? (
				<img src="/img/heart-icon.svg" alt="" />
			) : (
				<img src="/img/heart-filled.svg" alt="" />
			)}
		</Button>
	);
};

export default LikeButton;
=======
import { useState } from "react";
import { Button } from "primereact/button";

// STYLES
import styles from "./LikeButton.module.scss";

const LikeButton = () => {
	const [like, setLike] = useState(false);

	return (
		<Button
			aria-label="Like"
			className={styles.iconBtn}
			onClick={() => setLike(!like)}
		>
			{!like ? (
				<img src="/img/heart-icon.svg" alt="" />
			) : (
				<img src="/img/heart-filled.svg" alt="" />
			)}
		</Button>
	);
};

export default LikeButton;
>>>>>>> bank key pages
