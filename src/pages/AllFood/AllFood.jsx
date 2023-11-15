import { Col, Container, Row } from "reactstrap";
import "./AllFood.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/slices/productsSlice";
import { useEffect, useState } from "react";
import { Banner, Pagination, ProductCard } from "../../components";

const AllFood = () => {
    const allProducts = useSelector((state) => state.products.popular);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    // Filter products based on search term
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = allProducts.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination
    const [productsPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    const lastIndex = productsPerPage * currentPage;
    const firstIndex = lastIndex - productsPerPage;

    const currentProducts = filteredProducts.slice(firstIndex, lastIndex);
    return (
        <>
            <Banner title="All Foods" />
            <section className="all-foods">
                <Container>
                    <Row className="d-flex align-items-center mb-4">
                        <Col md="6">
                            <div className="search-widget d-flex mb-3 mb-md-0">
                                <input
                                    className="flex-grow-1 search-input"
                                    type="text"
                                    placeholder="I'm looking for..."
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                                <span className="search-icon">
                                    <i className="ri-search-line"></i>
                                </span>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="sort-widget ms-auto">
                                <select className="w-100">
                                    <option>Default</option>
                                    <option value="ascending">
                                        Alphabetically, A-Z
                                    </option>
                                    <option value="descending">
                                        Alphabetically, Z-A
                                    </option>
                                    <option value="high-price">
                                        High Price
                                    </option>
                                    <option value="low-price">Low Price</option>
                                </select>
                                <i className="ri-arrow-down-s-fill select-icon"></i>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {currentProducts.map((item) => (
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
                    <Row className="mt-5">
                        <Pagination
                            itemsCount={filteredProducts.length}
                            itemsPerPage={productsPerPage}
                            paginate={setCurrentPage}
                            currentPage={currentPage}
                        />
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default AllFood;
