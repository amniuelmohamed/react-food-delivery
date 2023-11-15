import { Col, Container, Row } from "reactstrap";
import "./Categories.css";

import category01 from "../../assets/images/category-01.png";
import category02 from "../../assets/images/category-02.png";
import category03 from "../../assets/images/category-03.png";
import category04 from "../../assets/images/category-04.png";

const categories = [
    {
        display: "Fast Food",
        imgUrl: category01,
    },
    {
        display: "Pizza",
        imgUrl: category02,
    },
    {
        display: "Asian Food",
        imgUrl: category03,
    },
    {
        display: "Row Meat",
        imgUrl: category04,
    },
];

const Categories = () => {
    return (
        <section className="categories-section">
            <Container>
                <Row>
                    {categories.map((category) => (
                        <Col key={category.display} sm="6" lg="3">
                            <div className="category-item d-flex justify-content-center align-items-center gap-3 mt-3">
                                <div className="category-img">
                                    <img
                                        src={category.imgUrl}
                                        alt="category_item"
                                    />
                                </div>
                                <h4 className="fw-bold">{category.display}</h4>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Categories;
