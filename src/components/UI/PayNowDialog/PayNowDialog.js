import { useState } from "react";

// COMPONENTS
import DialogBox from "components/UI/DialogBox/DialogBox";
import ApplyCoupon from "../ApplyCoupon/ApplyCoupon";
import { RadioBtn, TextInput } from "components/Form/Inputs";
import FawryPaymentDialog from "../FawryPaymentDialog/FawryPaymentDialog";

// STYLES
import styles from "./PayNowDialog.module.scss";

const PayNowDialog = ({ ...props }) => {
	// Payment
	const [payment, setPayment] = useState(null);

	// Fawry Payment
	const [fawryPayment, setFawryPayment] = useState(false);

	// Complete
	const completeHandler = () => {
		if (payment === "fawry") {
			setFawryPayment(true);
			props.hideModal();
		}
	};

	return (
		<>
			<DialogBox
				header="Instalment Pay Now"
				displayDialog={props.showModal}
				hideModal={props.hideModal}
				btnClicked={completeHandler}
				buttonLbl="Complete">
				<div className={styles.installment_payNow}>
					<div className="row">
						<div className="col-xl-6 mb-4 mb-xl-0">
							<div className={styles.purchase_details}>
								<h3>Purchase Details</h3>
								<div className={styles.purchase_item}>
									<div className={styles.img}>
										<img src="/img/purchase-details.png" alt="" />
									</div>
									<div className={styles.item_info}>
										<div className={styles.name}>Mac Book Pro</div>
										<div className={styles.qty}>QTY :1</div>
									</div>
								</div>
								<ApplyCoupon />
								<div className={styles.total}>
									<div className={styles.total_label}>Total</div>
									<div className={styles.total_val}>600.72EGP</div>
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className={styles.payment}>
								<h3>Payment</h3>
								<div className={styles.payment_choices}>
									<div className={styles.choice}>
										<RadioBtn
											name="payment"
											value="fawry"
											label="Pay with Fawry"
											handleChange={(e) => setPayment(e.value)}
											checked={payment === "fawry"}
											inputIcon={["fawry.svg"]}
										/>
										{payment === "fawry" && (
											<div className={styles.fawry_choice}>
												<TextInput
													inputName="phoneNumber"
													placeHolder="Enter your phone number"
												/>
											</div>
										)}
									</div>
									<div className={styles.choice}>
										<RadioBtn
											name="payment"
											value="card"
											label="Pay with card"
											handleChange={(e) => setPayment(e.value)}
											checked={payment === "card"}
											inputIcon={["visa.svg", "master-card.svg"]}
										/>
										{payment === "card" && (
											<div className={styles.card_choice}>
												<div className="row">
													<div className="col-md-12 mb-4">
														<TextInput
															inputName="cardNumber"
															placeHolder="Enter Card number"
														/>
													</div>
													<div className="col-md-6 mb-4 mb-md-0">
														<TextInput inputName="date" placeHolder="MM / YY" />
													</div>
													<div className="col-md-6">
														<TextInput inputName="cvv" placeHolder="CVV" />
													</div>
												</div>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</DialogBox>

			{/* Fawry Payment Dialog */}
			<FawryPaymentDialog
				showModal={fawryPayment}
				hideModalHandler={() => setFawryPayment(false)}
			/>
		</>
	);
};

export default PayNowDialog;
