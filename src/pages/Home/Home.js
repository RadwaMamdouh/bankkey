// Child Components
import IntroSection from "./components/IntroSection/IntroSection";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import OffersSection from "./components/OffersSection/OffersSection";
import GuaranteePrivacy from "./components/GuaranteePrivacy/GuaranteePrivacy";
import HowItWork from "./components/HowItWork/HowItWork";
import OurSolutions from "./components/OurSolutions/OurSolutions";
import CustomersSays from "./components/CustomersSays/CustomersSays";
import Partners from "./components/Partners/Partners";
import NewsLetter from "./components/NewsLetter/NewsLetter";

// STYLES
import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div className={styles.home}>
			<IntroSection />
			<HomeBanner />
			<OffersSection />
			<GuaranteePrivacy />
			<HowItWork />
			<OurSolutions />
			<CustomersSays />
			<Partners />
			<NewsLetter />
		</div>
	);
};

export default Home;
