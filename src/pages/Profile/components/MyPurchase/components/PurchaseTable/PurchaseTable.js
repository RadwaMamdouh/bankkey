import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

// COMPONENTS
import Status from "components/UI/Status/Status";
import Pagination from "components/UI/Pagination/Pagination";
import PayNowDialog from "components/UI/PayNowDialog/PayNowDialog";
import ViewReceiptDialog from "components/UI/ViewReceiptDialog/ViewReceiptDialog";

// STYLES
import styles from "./PurchaseTable.module.scss";

const PurchaseTable = () => {
	// Purchase Table Data
	const purchases = [
		{
			id: 1,
			name: "Mac Book Pro Laptop",
			status: "Completed",
			installment: "15.00",
			dueInstallment: "20 May 2022",
		},
		{
			id: 2,
			name: "Head Phone",
			status: "Pending",
			installment: "15.00",
			dueInstallment: "20 May 2022",
		},
		{
			id: 3,
			name: "LG LDEA",
			status: "Pending",
			installment: "15.00",
			dueInstallment: "20 May 2022",
		},
		{
			id: 4,
			name: "LG LDEA",
			status: "Pending",
			installment: "15.00",
			dueInstallment: "20 May 2022",
		},
		{
			id: 5,
			name: "Head Phone",
			status: "Pending",
			installment: "15.00",
			dueInstallment: "20 May 2022",
		},
		{
			id: 6,
			name: "Mac Book Pro Laptop",
			status: "Completed",
			installment: "15.00",
			dueInstallment: "20 May 2022",
		},
		{
			id: 7,
			name: "Mac Book Pro Laptop",
			status: "Completed",
			installment: "15.00",
			dueInstallment: "20 May 2022",
		},
	];

	// Status Column
	const statusTemplate = (rowData) => {
		return <Status status={rowData.status} />;
	};

	// Action Column
	const actionTemplate = (rowData) => {
		return (
			<div className={styles.action_btns}>
				<Button
					className={styles.invoice_btn}
					onClick={() => setDisplayReceiptDialog(true)}
				>
					<img src="/img/invoice.svg" alt="" />
				</Button>
				<Button
					label="Pay Now"
					className={styles.pay_now}
					onClick={() => setDisplayDialog(true)}
				/>
			</div>
		);
	};

	// Show Pay Now Dialog
	const [displayDialog, setDisplayDialog] = useState(false);

	// Show View Receipt Dialog
	const [displayReceiptDialog, setDisplayReceiptDialog] = useState(false);

	return (
		<>
			<div className={styles.purchase_table}>
				<DataTable value={purchases} responsiveLayout="scroll">
					<Column field="name" header="Name"></Column>
					<Column field={statusTemplate} header="Status"></Column>
					<Column field="installment" header="Instalment"></Column>
					<Column field="dueInstallment" header="Due Instalment"></Column>
					<Column field={actionTemplate} header="Action"></Column>
				</DataTable>
				<Pagination />
			</div>

			{/* Pay Now Dialog */}
			<PayNowDialog
				showModal={displayDialog}
				hideModal={() => setDisplayDialog(false)}
			/>

			{/* View Receipt Dialog */}
			<ViewReceiptDialog
				showModal={displayReceiptDialog}
				hideModal={() => setDisplayReceiptDialog(false)}
			/>
		</>
	);
};

export default PurchaseTable;
