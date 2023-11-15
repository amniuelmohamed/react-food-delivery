import { Col, Container, Input, Row } from "reactstrap";
import { Banner } from "../../components";
import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem, updateItemQuantity } from "../../store/slices/cartSlice";

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const dispatch = useDispatch();

    const quantityChangeHandler = (e, item) => {
        const newQuantity = e.target.value;
        const id = item.id;
        if (newQuantity === "zero") {
            dispatch(deleteItem(id));
        } else {
            dispatch(updateItemQuantity({ id, newQuantity }));
        }
    };

    return (
        <>
            <Banner title="Cart" />
            <section className="cart-page py-5">
                <Container>
                    {cartItems.length === 0 ? (
                        <div className="text-center py-4">
                            <h3 className="mb-5">Your Cart Is Empty!</h3>
                            <Link to={"/foods"} className="main-btn mx-auto">
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <Row>
                            <Col lg="9" className="order-2 order-lg-1">
                                <div className="shopping-cart bg-white px-4">
                                    <div className="title py-4">
                                        <h3 className="m-0 fw-normal">
                                            Shopping Cart
                                        </h3>
                                        <span>Price</span>
                                    </div>
                                    {cartItems.map((item) => (
                                        <div
                                            className="box d-flex justify-content-between gap-3 py-4 flex-wrap"
                                            key={item.id}
                                        >
                                            <Link to={`/foods/${item.id}`}>
                                                <img
                                                    src={item.image01}
                                                    alt="image01"
                                                />
                                            </Link>
                                            <div className="box-text flex-grow-1">
                                                <Link to={`/foods/${item.id}`}>
                                                    <h5>{item.title}</h5>
                                                </Link>
                                                <div className="d-flex align-items-center gap-3 mt-4">
                                                    <Input
                                                        bsSize="sm"
                                                        type="select"
                                                        value={item.quantity}
                                                        onChange={(e) => {
                                                            quantityChangeHandler(
                                                                e,
                                                                item
                                                            );
                                                        }}
                                                    >
                                                        <option value="zero">
                                                            0 (Delete)
                                                        </option>
                                                        {Array.from(
                                                            Array(100)
                                                        ).map((el, index) => (
                                                            <option
                                                                key={index}
                                                                value={
                                                                    index + 1
                                                                }
                                                            >
                                                                {index + 1}
                                                            </option>
                                                        ))}
                                                    </Input>
                                                    <span className="separator"></span>
                                                    <span
                                                        className="delete-btn"
                                                        onClick={() =>
                                                            dispatch(
                                                                deleteItem(
                                                                    item.id
                                                                )
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="price">
                                                USD{" "}
                                                {Number(item.price).toFixed(2)}
                                            </span>
                                        </div>
                                    ))}
                                    <div className="subtotal py-4 text-end">
                                        Subtotal (<span>{totalQuantity}</span>{" "}
                                        items):{" "}
                                        <span className="subtotal-amount fw-bold color-primary">
                                            EUR {Number(totalAmount).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3" className="order-1 order-lg-2">
                                <div className="to-checkout bg-white p-4 mb-4 mt-0 mb-lg-0 mt-lg-4 mt-lg-0 d-flex flex-column flex-sm-row flex-lg-column align-items-center gap-3 justify-content-between">
                                    <div className="subtotal text-center">
                                        Subtotal (<span>{totalQuantity}</span>{" "}
                                        items):{" "}
                                        <span className="subtotal-amount fw-bold color-primary d-inline-block">
                                            EUR {Number(totalAmount).toFixed(2)}
                                        </span>
                                    </div>
                                    <Link
                                        className="main-btn text-center"
                                        to={"/checkout"}
                                    >
                                        Proceed To Checkout
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    )}
                </Container>
            </section>
        </>
    );
};

export default CartPage;
