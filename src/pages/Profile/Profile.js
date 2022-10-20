// COMPONENTS
import BreadCrumbComp from "components/UI/BreadCrumbComp/BreadCrumbComp";
import PageTitle from "components/UI/PageTitle/PageTitle";

// Child Components
import ProfileIntro from "./components/ProfileIntro/ProfileIntro";
import PersonalDocuments from "./components/PersonalDocuments/PersonalDocuments";
import MyPurchase from "./components/MyPurchase/MyPurchase";

// STYLES
import styles from "./Profile.module.scss";

const Profile = () => {
	// Bread Crumb
	const items = [{ label: "Home" }, { label: "My Profile" }];

	return (
		<div className={styles.profile}>
			<div className="container">
				{/* Bread Crumb */}
				<BreadCrumbComp items={items} />

				{/* Page Title */}
				<PageTitle title="My Profile" />

				{/* Profile Intro */}
				<ProfileIntro />

				{/* Profile Body */}
				<div className={styles.profile_body}>
					<div className="row">
						<div className="col-lg-4 mb-5 mb-lg-0">
							<PersonalDocuments />
						</div>
						<div className="col-lg-8">
							<MyPurchase />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
