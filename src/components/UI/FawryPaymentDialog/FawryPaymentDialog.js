import { Button } from "primereact/button";

// COMPONENTS
import DialogBox from "../DialogBox/DialogBox";

// STYLES
import styles from "./FawryPaymentDialog.module.scss";

const FawryPaymentDialog = ({ ...props }) => {
	return (
		<DialogBox
			header="Your Fawry Payment"
			displayDialog={props.showModal}
			hideModal={props.hideModalHandler}
			buttonLbl="Done"
		>
			<div className={styles.fawry_payment}>
				<div className={styles.head}>
					<h4>Fawry Reference Number:9181248960189.99 EGP</h4>
					<Button className={styles.copy_btn}>
						<img src="/img/copy.svg" alt="" />
					</Button>
				</div>
				<p className={styles.msg}>
					Your payment code with Ibn Abbas has been successfully activated, and
					please pay to Ibn Abbas's account with Fawry - the service code is 788
					and the payment code is valid for 7 days.
				</p>
			</div>
		</DialogBox>
	);
};

export default FawryPaymentDialog;
