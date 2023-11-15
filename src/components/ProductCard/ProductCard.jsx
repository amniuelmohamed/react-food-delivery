import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/cartSlice";

const ProductCard = (props) => {
    const { id, title, price, image01 } = props.item;
    const dispatch = useDispatch();

    return (
        <div className="product-card p-4">
            <div className="product-img mb-2">
                <img src={image01} alt={title} className="w-50" />
            </div>
            <h4 className="mb-4">
                <Link to={`/foods/${id}`}>{title}</Link>
            </h4>
            <div className="info d-flex justify-content-between align-items-center">
                <span className="price fw-bold color-primary">${price}</span>
                <button
                    onClick={() => {
                        dispatch(addItem(props.item));
                    }}
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
