import { useDispatch } from "react-redux";
import "./CartItem.css";
import {
    addItem,
    decrementItem,
    deleteItem,
} from "../../store/slices/cartSlice";

const CartItem = (props) => {
    const { id, title, image01, quantity, totalPrice } = props.item;
    const dispatch = useDispatch();

    return (
        <div className="cart-item d-flex align-items-center justify-content-between">
            <div className="cart-item-content d-flex gap-2">
                <div className="cart-item-img">
                    <img src={image01} alt="" />
                </div>
                <div className="cart-item-infos">
                    <div>
                        <h6>{title}</h6>
                        <div className="d-flex align-items-center gap-4">
                            {quantity}x{" "}
                            <span className="color-primary fw-semibold">
                                ${totalPrice}
                            </span>
                        </div>
                    </div>
                    <div className="quantity-modifier d-flex mt-3">
                        <span
                            onClick={() => {
                                dispatch(addItem(props.item));
                            }}
                        >
                            <i className="ri-add-fill"></i>
                        </span>
                        <input
                            type="text"
                            className="quantity"
                            value={quantity}
                            readOnly
                        />
                        <span
                            onClick={() => {
                                dispatch(decrementItem(id));
                            }}
                        >
                            <i className="ri-subtract-fill"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div
                className="cart-item-delete"
                onClick={() => {
                    dispatch(deleteItem(id));
                }}
            >
                <i className="ri-close-fill"></i>
            </div>
        </div>
    );
};

export default CartItem;
