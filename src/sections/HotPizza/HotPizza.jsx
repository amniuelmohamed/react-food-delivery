import { Col, Container, Row } from "reactstrap";
import "./HotPizza.css";
import { ProductCard, SectionHeading } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFourProductsByCategory } from "../../store/slices/productsSlice";

const HotPizza = () => {
    const pizzaPoducts = useSelector((state) => state.products.others);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFourProductsByCategory("pizza"));
    }, [dispatch]);

    return (
        <section className="hot-pizza-section">
            <Container>
                <SectionHeading title="Hot Pizza" centered={true} />
                <Row>
                    {pizzaPoducts.map((item) => (
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

export default HotPizza;
