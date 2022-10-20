// COMPONENTS
import DarkButton from "components/UI/DarkButton/DarkButton";

// Child Components
import CreditUpdatesBox from "./components/CreditUpdatesBox/CreditUpdatesBox";

// STYLES
import styles from "./ProfileIntro.module.scss";

const ProfileIntro = () => {
	const profileInfo = {
		image: "profile-img.png",
		userName: "Alaa Abd El Hafez",
		email: "Alaa123Hafez@gmial.com",
		phoneNumber: "+02 01123587254",
		totalCredit: 11000,
		spentPaid: 2000,
		availableCredit: 2000,
		inDiscusion: 222,
	};

	return (
		<div className={styles.profile_intro}>
			<div className={styles.profile_img}>
				<img src={`/img/${profileInfo.image}`} alt="" />
			</div>
			<div className={styles.profile_data}>
				<div className={styles.top_sec}>
					<div className={styles.info}>
						<div className="row">
							<div className="col-md-9 col-xl-4 mb-4 mb-xl-0">
								<div className={styles.info_box}>
									<div className={styles.tit}>User name</div>
									<div className={styles.val}>{profileInfo.userName}</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-4 mb-4 mb-xl-0">
								<div className={styles.info_box}>
									<div className={styles.tit}>Email</div>
									<div className={styles.val}>{profileInfo.email}</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-4 mb-4 mb-xl-0">
								<div className={styles.info_box}>
									<div className={styles.tit}>Phone Number</div>
									<div className={styles.val}>{profileInfo.phoneNumber}</div>
								</div>
							</div>
						</div>
					</div>
					<DarkButton
						btn
						type="button"
						label="Edit"
						icon="/img/edit.svg"
						withIcon
						outlined
					/>
				</div>
				<div className={styles.credit_updates}>
					<div className={styles.credit_updates_tit}>Credit Updates</div>
					<div className={styles.credit_boxes}>
						<div className="row">
							<div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
								<CreditUpdatesBox
									icon="totalCredit.svg"
									title="Total credit"
									value={`${profileInfo.totalCredit} EGP`}
								/>
							</div>
							<div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
								<CreditUpdatesBox
									icon="spentPaid.svg"
									title="Spent paid"
									value={`${profileInfo.spentPaid} EGP`}
								/>
							</div>
							<div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
								<CreditUpdatesBox
									icon="availableCredit.svg"
									title="Available credit"
									value={`${profileInfo.availableCredit} EGP`}
								/>
							</div>
							<div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
								<CreditUpdatesBox
									icon="inDiscusion.svg"
									title="in discusion"
									value={profileInfo.inDiscusion}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileIntro;
