import { Route, Routes } from "react-router-dom";

// Layouts
import AuthLayout from "layout/AuthLayout/AuthLayout";
import MainLayout from "layout/MainLayout/MainLayout";

// PAGES
import {
	Category,
	ForgetPassword,
	Home,
	LogIn,
	Offers,
	ProductDetails,
	Profile,
	RecoveryPassword,
	ResetPassword,
	Shop,
	SignUp,
	Verification,
} from "pages";

const AllRoutes = () => (
	<Routes>
		{/* Authentication Routes */}
		<Route element={<AuthLayout />}>
			<Route exact strict path="/login" element={<LogIn />} />
			<Route exact strict path="/sign-up" element={<SignUp />} />
			<Route
				exact
				strict
				path="/forget-password"
				element={<ForgetPassword />}
			/>
			<Route exact strict path="/verification" element={<Verification />} />
			<Route
				exact
				strict
				path="/recovery-password"
				element={<RecoveryPassword />}
			/>
			<Route exact strict path="/reset-password" element={<ResetPassword />} />
		</Route>

		{/* Main Routes */}
		<Route element={<MainLayout />}>
			<Route exact strict path="/" element={<Home />} />
			<Route exact strict path="/shop" element={<Shop />} />
			<Route exact strict path="/shop/category/:id" element={<Category />} />
			<Route
				exact
				strict
				path="/shop/category/:id/product/:id"
				element={<ProductDetails />}
			/>
			<Route exact strict path="/Offers" element={<Offers />} />
			<Route exact strict path="/profile" element={<Profile />} />
		</Route>
	</Routes>
);

export default AllRoutes;
