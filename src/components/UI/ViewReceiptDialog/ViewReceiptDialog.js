// COMPONENTS
import DialogBox from "../DialogBox/DialogBox";

// STYLES
import styles from "./ViewReceiptDialog.module.scss";

const ViewReceiptDialog = ({ ...props }) => {
	return (
		<DialogBox
			header="View Receipt"
			displayDialog={props.showModal}
			hideModal={props.hideModal}
			hideBtns
		>
			<div className={styles.view_receipt}>
				<div className={styles.order_summary}>
					<div className="row">
						<div className="col-md-6">
							<h5>Order Summary</h5>
							<h4>Mac Book Pro</h4>
							<p>9.00 EGP per monthly</p>
						</div>
						<div className="col-md-12">
							<div className={styles.prices}>
								<div className={styles.price_row}>
									<div className={styles.txt}>Price</div>
									<div className={styles.val}>600.72EGP</div>
								</div>
								<div className={styles.price_row}>
									<div className={styles.txt}>Discount</div>
									<div className={styles.val}>-20 EGP</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.total}>
					<div className={styles.total_txt}>Total</div>
					<div className={styles.total_val}>600.72EGP</div>
				</div>
			</div>
		</DialogBox>
	);
};

export default ViewReceiptDialog;
