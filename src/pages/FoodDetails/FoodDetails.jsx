/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import "./FoodDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    getFourProductsByCategory,
    getProductById,
} from "../../store/slices/productsSlice";
import { addItem } from "../../store/slices/cartSlice";
import { Col, Container, Input, Row } from "reactstrap";
import { ProductCard, Banner } from "../../components";

const FoodDetails = () => {
    // Get the Product Id Passed in The URL
    const { id } = useParams();

    // Get The Matched Product From Redux Store
    const { title, price, image01, image02, image03, category, desc } =
        useSelector((state) => state.products.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductById(id));
        window.scrollTo(0, 0);
    }, [id]);

    // State for the selected img
    const [selectedImage, setSelectedImage] = useState();

    useEffect(() => {
        setSelectedImage(image01);
    }, [image01]);

    // Add Quantity
    const [addQuantity, setAddQuantity] = useState(1);

    // Tabs
    const [tab, setTab] = useState("desc");

    // Related Product
    const relatedProducts = useSelector((state) => state.products.others);

    useEffect(() => {
        if (category) {
            dispatch(getFourProductsByCategory(category));
        }
    }, [category]);

    return (
        <>
            <Banner title={title} />
            <section className="product-details">
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="product-images d-flex flex-column flex-lg-row gap-4">
                                <div className="all-images d-flex flex-lg-column order-2 order-lg-1 justify-content-between justify-content-lg-start gap-lg-3">
                                    <img
                                        src={image01}
                                        alt="images-1"
                                        onClick={() => {
                                            setSelectedImage(image01);
                                        }}
                                    />
                                    <img
                                        src={image02}
                                        alt="images-2"
                                        onClick={() => {
                                            setSelectedImage(image02);
                                        }}
                                    />
                                    <img
                                        src={image03}
                                        alt="images-3"
                                        onClick={() => {
                                            setSelectedImage(image03);
                                        }}
                                    />
                                </div>
                                <div className="main-image order-1 order-lg-2">
                                    <img
                                        src={selectedImage || image01}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="product-infos mt-5 mt-md-0">
                                <h2 className="mb-1">{title}</h2>
                                <div className="price color-primary fw-bold">
                                    $ {Number(price).toFixed(2)}
                                </div>
                                <div className="rating">
                                    <i className="ri-thumb-up-fill"></i>&nbsp;
                                    <span>92</span>% (<span>247</span>)
                                </div>
                                <div className="category d-flex align-items-center gap-3 fw-bold mt-3">
                                    Category: <span>{category}</span>
                                </div>
                                <Input
                                    bsSize="sm"
                                    className="mt-4"
                                    type="select"
                                    value={addQuantity}
                                    onChange={(e) => {
                                        setAddQuantity(e.target.value);
                                    }}
                                >
                                    {Array.from(Array(100)).map((el, index) => (
                                        <option key={index}>{index + 1}</option>
                                    ))}
                                </Input>
                                <button
                                    className="d-flex align-items-center justify-content-center gap-1"
                                    onClick={() => {
                                        dispatch(
                                            addItem({
                                                id,
                                                title,
                                                price,
                                                image01,
                                                addQuantity,
                                            })
                                        );
                                        setAddQuantity(1);
                                    }}
                                >
                                    Add
                                    <span className="fw-bold">
                                        {addQuantity}
                                    </span>
                                    to Cart
                                    <i className="bullet ri-circle-fill"></i>
                                    <span className="fw-bold">
                                        ${price * addQuantity}
                                    </span>
                                </button>
                            </div>
                        </Col>
                        <Col sm="12">
                            <div className="tabs mt-5">
                                <div className="tabs-header d-flex gap-4 pb-2 mb-4">
                                    <h6
                                        className={`${
                                            tab === "desc" ? "active" : ""
                                        }`}
                                        onClick={() => setTab("desc")}
                                    >
                                        Description
                                    </h6>
                                    <h6
                                        className={`${
                                            tab === "rev" ? "active" : ""
                                        }`}
                                        onClick={() => setTab("rev")}
                                    >
                                        Reviews
                                    </h6>
                                </div>
                                <div className="tabs-content">
                                    {tab === "desc" ? (
                                        <p className="color-grey">{desc}</p>
                                    ) : (
                                        <>
                                            <div className="customers-reviews">
                                                <div className="review">
                                                    <div className="name">
                                                        John Doe
                                                    </div>
                                                    <div className="stars">
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                    </div>
                                                    <div className="text">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisicing elit.
                                                        Officiis, sed?
                                                    </div>
                                                </div>
                                                <div className="review">
                                                    <div className="name">
                                                        John Doe
                                                    </div>
                                                    <div className="stars">
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                    </div>
                                                    <div className="text">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisicing elit.
                                                        Officiis, sed?
                                                    </div>
                                                </div>
                                                <div className="review">
                                                    <div className="name">
                                                        John Doe
                                                    </div>
                                                    <div className="stars">
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                    </div>
                                                    <div className="text">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisicing elit.
                                                        Officiis, sed?
                                                    </div>
                                                </div>
                                            </div>

                                            <form
                                                className="d-flex flex-column gap-3 mt-5 mx-auto"
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                <h6>
                                                    We'll be happy to see you
                                                    review !
                                                </h6>
                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Your Email"
                                                />
                                                <textarea placeholder="Your Review..."></textarea>
                                                <input
                                                    type="submit"
                                                    value="Submit"
                                                />
                                            </form>
                                        </>
                                    )}
                                </div>
                            </div>
                        </Col>
                        <Col sm="12">
                            <h4 className="mt-5">
                                You Might{" "}
                                <span className="fw-bold color-primary">
                                    Also Like
                                </span>
                            </h4>
                        </Col>
                        {relatedProducts.map((item) => (
                            <Col
                                key={item.id}
                                sm="6"
                                lg="4"
                                xl="3"
                                className="mt-4"
                            >
                                <ProductCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default FoodDetails;
