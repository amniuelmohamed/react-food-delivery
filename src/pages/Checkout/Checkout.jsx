import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Banner } from "../../components";
import "./Checkout.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    const shippingCost = 20;

    return (
        <>
            <Banner title="Checkout" />
            <section className="checkout-page py-5">
                <Container>
                    {cartItems.length === 0 ? (
                        <div className="text-center py-4">
                            <h3 className="mb-5">
                                There is no item in your cart!
                            </h3>
                            <Link to={"/foods"} className="main-btn">
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <Row>
                            <Col lg="9">
                                <div className="payment-info bg-white px-4">
                                    <div className="title py-4">
                                        <h3 className="m-0 fw-normal">
                                            Shipping Adress
                                        </h3>
                                    </div>
                                    <Form className="mt-4">
                                        <Row>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="email">
                                                        Email
                                                    </Label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        placeholder="Your Email"
                                                        type="email"
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="name">
                                                        Name
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        placeholder="Your Name"
                                                        type="text"
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <FormGroup>
                                            <Label for="address">Address</Label>
                                            <Input
                                                id="address"
                                                name="address"
                                                placeholder="1234 Main St"
                                                required
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="address2">
                                                Address 2
                                            </Label>
                                            <Input
                                                id="address2"
                                                name="address2"
                                                placeholder="Apartment, studio, or floor"
                                            />
                                        </FormGroup>
                                        <Row>
                                            <Col md={4}>
                                                <FormGroup>
                                                    <Label for="country">
                                                        Country
                                                    </Label>
                                                    <Input
                                                        id="country"
                                                        name="country"
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="city">
                                                        City
                                                    </Label>
                                                    <Input
                                                        id="city"
                                                        name="city"
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={2}>
                                                <FormGroup>
                                                    <Label for="zip">Zip</Label>
                                                    <Input
                                                        id="zip"
                                                        name="zip"
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="bg-white p-4 mt-4 mt-lg-0 d-flex flex-column gap-3 justify-content-between">
                                    <div className="order-summary">
                                        <h5 className="mb-3">Order Summary</h5>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span>
                                                Items ({totalQuantity}):
                                            </span>
                                            <span>
                                                EUR{" "}
                                                {Number(totalAmount).toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between pb-3">
                                            <span>Shipping:</span>
                                            <span>
                                                EUR{" "}
                                                {Number(shippingCost).toFixed(
                                                    2
                                                )}
                                            </span>
                                        </div>
                                        <div className="payment-total d-flex align-items-center justify-content-between pt-3">
                                            <h5 className="color-primary">
                                                Payment Total:
                                            </h5>
                                            <span className="fw-bold">
                                                EUR{" "}
                                                {Number(
                                                    shippingCost + totalAmount
                                                ).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                    <Link
                                        className="main-btn text-center w-100"
                                        to={"/"}
                                    >
                                        Payment
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

export default Checkout;
