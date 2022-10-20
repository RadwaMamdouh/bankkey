import { BreadCrumb } from "primereact/breadcrumb";

// STYLES
import styles from "./BreadCrumbComp.module.scss";

const BreadCrumbComp = ({ items }) => {
	return <BreadCrumb model={items} className={styles.breadCrumb} />;
};

export default BreadCrumbComp;
