import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import { toggle } from "../../store/slices/cartVisibilitySlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmountCart = useSelector((state) => state.cart.totalAmount);
    const dispatch = useDispatch();

    return (
        <div className="cart-widget">
            <div className="content d-flex flex-column">
                <div className="cart-close p-3">
                    <span
                        onClick={() => {
                            dispatch(toggle());
                        }}
                    >
                        <i className="ri-close-fill"></i>
                    </span>
                </div>
                <div className="cart-content flex-grow-1 p-3 d-flex flex-column gap-5">
                    {cartItems.length === 0 ? (
                        <h6 className="text-center">No item added to cart!</h6>
                    ) : (
                        cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))
                    )}
                </div>
                <div className="cart-bottom p-3 d-flex align-items-center justify-content-between">
                    <p className="mb-0 d-flex align-items-center gap-3">
                        Subtotal:{" "}
                        <span className="fw-bold total-price">
                            ${totalAmountCart}
                        </span>
                    </p>
                    <button
                        onClick={() => {
                            dispatch(toggle());
                        }}
                    >
                        <Link to={"/checkout"}>Checkout</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
