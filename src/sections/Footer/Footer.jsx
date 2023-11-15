import "./Footer.css";
import { Col, Container, Row } from "reactstrap";
import Logo from "../../components/Logo/Logo";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="text-center pt-5 pb-4">
            <Container>
                <Row>
                    <Col sm="6" lg="3">
                        <Logo />
                        <p className="color-grey text-center mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Incidunt, repudiandae minus molestiae in odit
                            excepturi!
                        </p>
                    </Col>
                    <Col sm="6" lg="3" className="mt-5 mt-sm-0">
                        <h4 className="mb-4">Delivery Time</h4>
                        <ul>
                            <li>
                                <span className="fw-semibold d-block">
                                    Sunday - Thursday
                                </span>
                                <span className="color-grey">
                                    10:00am - 11:00pm
                                </span>
                            </li>
                            <li className="mt-3">
                                <span className="fw-semibold d-block">
                                    Friday - Saturday
                                </span>
                                <span className="color-grey">Closed</span>
                            </li>
                        </ul>
                    </Col>
                    <Col sm="6" lg="3" className="mt-5 mt-lg-0">
                        <h4 className="mb-4">Contact</h4>
                        <ul>
                            <li>
                                <address className="color-grey">
                                    19 Washington Square N <br />
                                    New York, NY 10011
                                    <br /> USA
                                </address>
                            </li>
                            <li className="mt-3">
                                <span className="fw-semibold">Phone: </span>
                                <span>
                                    <a
                                        href="tel:0494225566"
                                        className="color-primary"
                                    >
                                        0494225566
                                    </a>
                                </span>
                            </li>
                            <li className="mt-2">
                                <span className="fw-semibold">Email: </span>
                                <span>
                                    <a
                                        href="mailto:example@gmail.com"
                                        className="color-primary"
                                    >
                                        example@gmail.com
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </Col>
                    <Col sm="6" lg="3" className="mt-5 mt-lg-0">
                        <h4 className="mb-4">Newsletter</h4>
                        <p className="color-grey mb-2">
                            Subscribe to our newsletter
                        </p>
                        <div className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                            <span>
                                <i className="ri-send-plane-fill"></i>
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row className="copyright mt-4 pt-4 d-flex justify-content-between align-items-center gap-3 gap-md-0">
                    <Col md="6">
                        <div className="social-icons d-flex justify-content-center justify-content-md-start gap-3">
                            <a href="/#">
                                <i className="ri-facebook-fill"></i>
                            </a>
                            <a href="/#">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="/#">
                                <i className="ri-tiktok-fill"></i>
                            </a>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="text-md-end">
                            Made With{" "}
                            <span className="color-primary">
                                <i className="ri-heart-fill"></i>
                            </span>{" "}
                            By Mohamed - &copy; {year}
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
