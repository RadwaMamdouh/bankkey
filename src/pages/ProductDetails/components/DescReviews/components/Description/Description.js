<<<<<<< HEAD
import { useState } from "react";
import { Button } from "primereact/button";

// STYLES
import styles from "./Description.module.scss";

const Description = () => {
	const [height, setHeight] = useState(false);

	return (
		<div className={styles.desc_Holder}>
			<div
				className={`${styles.desc_content} ${height ? styles.autoHeight : ""}`}
			>
				<p>
					The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED
					TV we've tested. Although all OLEDs deliver similar fantastic picture
					quality, this one stands out for its value because it has many
					gaming-oriented features that are great for gamers.
				</p>

				<ul>
					<li>
						Only 65G2 is shown in the image for example purposes. All 2022 LG
						OLED models feature eco-friendly packaging.
					</li>
					<li>
						65C2 Stand model is at a minimum 39% lighter than the C1 series.
					</li>
					<li>
						The 'Reducing CO2' footprint label applies to 65C2 only. All other
						C2 models feature a 'CO2 Measured' label.
					</li>
					<li>
						UL ECV certification based on TV frame and back cover. Percentage of
						recycled content varies by model and size.
					</li>
				</ul>

				<p>
					The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED
					TV we've tested. Although all OLEDs deliver similar fantastic picture
					quality, this one stands out for its value because it has many
					gaming-oriented features that are great for gamers.
				</p>

				<ul>
					<li>
						Only 65G2 is shown in the image for example purposes. All 2022 LG
						OLED models feature eco-friendly packaging.
					</li>
					<li>
						65C2 Stand model is at a minimum 39% lighter than the C1 series.
					</li>
					<li>
						The 'Reducing CO2' footprint label applies to 65C2 only. All other
						C2 models feature a 'CO2 Measured' label.
					</li>
					<li>
						UL ECV certification based on TV frame and back cover. Percentage of
						recycled content varies by model and size.
					</li>
				</ul>
			</div>

			{/* See More */}
			<Button
				label={!height ? "See more" : "Show less"}
				aria-label="See more"
				className={styles.see_more}
				onClick={() => setHeight(!height)}
			/>
		</div>
	);
};

export default Description;
=======
import { useState } from "react";
import { Button } from "primereact/button";

// STYLES
import styles from "./Description.module.scss";

const Description = () => {
	const [height, setHeight] = useState(false);

	return (
		<div className={styles.desc_Holder}>
			<div
				className={`${styles.desc_content} ${height ? styles.autoHeight : ""}`}
			>
				<p>
					The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED
					TV we've tested. Although all OLEDs deliver similar fantastic picture
					quality, this one stands out for its value because it has many
					gaming-oriented features that are great for gamers.
				</p>

				<ul>
					<li>
						Only 65G2 is shown in the image for example purposes. All 2022 LG
						OLED models feature eco-friendly packaging.
					</li>
					<li>
						65C2 Stand model is at a minimum 39% lighter than the C1 series.
					</li>
					<li>
						The 'Reducing CO2' footprint label applies to 65C2 only. All other
						C2 models feature a 'CO2 Measured' label.
					</li>
					<li>
						UL ECV certification based on TV frame and back cover. Percentage of
						recycled content varies by model and size.
					</li>
				</ul>

				<p>
					The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED
					TV we've tested. Although all OLEDs deliver similar fantastic picture
					quality, this one stands out for its value because it has many
					gaming-oriented features that are great for gamers.
				</p>

				<ul>
					<li>
						Only 65G2 is shown in the image for example purposes. All 2022 LG
						OLED models feature eco-friendly packaging.
					</li>
					<li>
						65C2 Stand model is at a minimum 39% lighter than the C1 series.
					</li>
					<li>
						The 'Reducing CO2' footprint label applies to 65C2 only. All other
						C2 models feature a 'CO2 Measured' label.
					</li>
					<li>
						UL ECV certification based on TV frame and back cover. Percentage of
						recycled content varies by model and size.
					</li>
				</ul>
			</div>

			{/* See More */}
			<Button
				label={!height ? "See more" : "Show less"}
				aria-label="See more"
				className={styles.see_more}
				onClick={() => setHeight(!height)}
			/>
		</div>
	);
};

export default Description;
>>>>>>> bank key pages
