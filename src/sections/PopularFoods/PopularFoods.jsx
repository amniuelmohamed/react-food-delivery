import { Col, Container, Row } from "reactstrap";
import "./PopularFoods.css";
import { ProductCard, SectionHeading } from "../../components";

import popular01 from "../../assets/images/hamburger.png";
import popular02 from "../../assets/images/pizza.png";
import popular03 from "../../assets/images/bread.png";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllProducts,
    getProductsByCategory,
} from "../../store/slices/productsSlice";

const PopularFoods = () => {
    const [category, setCategory] = useState("All");

    const displayedProducts = useSelector((state) => state.products.popular);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <section className="popular-foods-section">
            <Container>
                <SectionHeading title="Popular Foods" centered={true} />
                <div className="popular-foods-bar d-flex justify-content-center align-items-center gap-4 gap-md-5 p-4">
                    <button
                        className={`text-white ${
                            category === "All" ? "active" : ""
                        }`}
                        onClick={() => {
                            dispatch(getAllProducts());
                            setCategory("All");
                        }}
                    >
                        All
                    </button>
                    <button
                        className={`d-flex align-items-center gap-2 text-white ${
                            category === "Burger" ? "active" : ""
                        }`}
                        onClick={() => {
                            dispatch(getProductsByCategory("burger"));
                            setCategory("Burger");
                        }}
                    >
                        <img src={popular01} alt="burger" />
                        <span>Burger</span>
                    </button>
                    <button
                        className={`d-flex align-items-center gap-2 text-white ${
                            category === "Pizza" ? "active" : ""
                        }`}
                        onClick={() => {
                            dispatch(getProductsByCategory("pizza"));
                            setCategory("Pizza");
                        }}
                    >
                        <img src={popular02} alt="pizza" />
                        <span>Pizza</span>
                    </button>
                    <button
                        className={`d-flex align-items-center gap-2 text-white ${
                            category === "Bread" ? "active" : ""
                        }`}
                        onClick={() => {
                            dispatch(getProductsByCategory("bread"));
                            setCategory("Bread");
                        }}
                    >
                        <img src={popular03} alt="bread" />
                        <span>Bread</span>
                    </button>
                </div>
                <Row>
                    {displayedProducts.map((item) => (
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
    );
};

export default PopularFoods;
