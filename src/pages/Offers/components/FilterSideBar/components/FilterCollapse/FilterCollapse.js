import { Accordion, AccordionTab } from "primereact/accordion";

// STYLES
import styles from "./FilterCollapse.module.scss";

const FilterCollapse = ({ title, children }) => {
	return (
		<div className={styles.filter_collapse}>
			<Accordion multiple activeIndex={[0]}>
				<AccordionTab header={title}>{children}</AccordionTab>
			</Accordion>
		</div>
	);
};

export default FilterCollapse;
