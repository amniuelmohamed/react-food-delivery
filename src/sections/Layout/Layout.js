import { useSelector } from "react-redux";
import { Cart } from "../../components";
import Routers from "../../routes/Routers";
import { Footer, Header } from "../../sections";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
    const isCartVisible = useSelector(
        (state) => state.cartVisibility.isVisible
    );
    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Header />
            {isCartVisible && <Cart />}
            <Routers />
            <Footer />
        </>
    );
};

export default Layout;
