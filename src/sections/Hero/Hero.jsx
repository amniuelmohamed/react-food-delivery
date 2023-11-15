import { Col, Container, Row } from "reactstrap";
import "./Hero.css";
import heroImg from "../../assets/images/hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="hero-section">
            <Container>
                <Row>
                    <Col
                        lg="6"
                        className="d-flex justify-content-center align-items-center flex-column pt-5 pt-lg-0"
                    >
                        <div className="hero-content text-center text-lg-start">
                            <h5 className="mb-3">Easy way to make an order</h5>
                            <h1 className="mb-4">
                                <span className="color-primary text-uppercase">
                                    Hungry?
                                </span>{" "}
                                Just wait food at{" "}
                                <span className="color-primary">your door</span>
                            </h1>
                            <p className="color-grey mb-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Laborum beatae, ullam
                                exercitationem ratione ipsam perspiciatis
                                quaerat, reiciendis, obcaecati consequatur
                                adipisci itaque cumque? Laboriosam, officia
                                saepe.
                            </p>
                            <div className="cta-btns d-flex justify-content-center justify-content-lg-start align-items-center gap-4 mb-3">
                                <Link
                                    to={"/foods"}
                                    className="order-btn d-flex align-items-center gap-1 fw-bold"
                                >
                                    Order Now
                                    <i className="ri-arrow-right-s-line fw-bold"></i>
                                </Link>
                                <Link
                                    to={"/foods"}
                                    className="see-all-btn fw-bold"
                                >
                                    See All Foods
                                </Link>
                            </div>
                            <div className="hero-services d-flex justify-content-center justify-content-lg-start align-items-center gap-3 gap-lg-4">
                                <div className="d-flex align-items-center gap-1 gap-lg-2">
                                    <i className="ri-roadster-line"></i>
                                    <span className="fw-semibold">
                                        No shipping charge
                                    </span>
                                </div>
                                <div className="d-flex align-items-center gap-1 gap-lg-2">
                                    <i className="ri-secure-payment-fill"></i>
                                    <span className="fw-semibold">
                                        100% secure checkout
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="hero-image">
                            <img
                                src={heroImg}
                                alt="hero_image"
                                className="w-100"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
