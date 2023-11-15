import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import {
    AllFood,
    CartPage,
    Checkout,
    Contact,
    FoodDetails,
    Home,
    Login,
    Register,
    ResetPassword,
} from "../pages";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="home" element={<Home />} />
            <Route path="foods" element={<Outlet />}>
                <Route path="" element={<AllFood />} />
                <Route path=":id" element={<FoodDetails />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="reset" element={<ResetPassword />} />
        </Routes>
    );
};

export default Routers;
