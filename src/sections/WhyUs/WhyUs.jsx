import { Col, Container, Row } from "reactstrap";
import "./WhyUs.css";

import whyImg from "../../assets/images/location.png";
import { SectionHeading } from "../../components";

const WhyUs = () => {
    return (
        <section className="why-us-section">
            <Container>
                <Row>
                    <Col lg="6" className="d-flex align-items-center">
                        <div className="why-image">
                            <img
                                src={whyImg}
                                alt="why-tasty-treat"
                                className="w-100"
                            />
                        </div>
                    </Col>
                    <Col
                        lg="6"
                        className="d-flex justify-content-center align-items-center mt-5 mt-lg-0"
                    >
                        <div className="text-content text-center text-lg-start">
                            <SectionHeading
                                title={[
                                    "Why ",
                                    <span key={1} className="color-primary">
                                        Tasty Treat?
                                    </span>,
                                ]}
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, omnis numquam aspernatur quis quod eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                centered={false}
                            />
                            <ul className="why-us-content bg-white px-5 py-4">
                                <li className="mb-2">
                                    <div className="title d-flex justify-content-center justify-content-md-start align-items-center gap-2 mb-1">
                                        <i className="ri-checkbox-circle-line color-primary fw-bold"></i>
                                        <h6 className="mb-0">
                                            Fresh and tasty foods
                                        </h6>
                                    </div>
                                    <p className="description color-grey">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Quia, voluptatibus.
                                    </p>
                                </li>
                                <li className="mb-2">
                                    <div className="title d-flex justify-content-center justify-content-md-start align-items-center gap-2 mb-1">
                                        <i className="ri-checkbox-circle-line color-primary fw-bold"></i>
                                        <h6 className="mb-0">
                                            Quality support
                                        </h6>
                                    </div>
                                    <p className="description color-grey">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Quia, voluptatibus.
                                    </p>
                                </li>
                                <li>
                                    <div className="title d-flex justify-content-center justify-content-md-start align-items-center gap-2 mb-1">
                                        <i className="ri-checkbox-circle-line color-primary fw-bold"></i>
                                        <h6 className="mb-0">
                                            Order from any location
                                        </h6>
                                    </div>
                                    <p className="description color-grey mb-0">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Quia, voluptatibus.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhyUs;
