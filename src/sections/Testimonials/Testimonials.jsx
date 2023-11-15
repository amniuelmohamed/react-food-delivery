import { Col, Container, Row } from "reactstrap";
import "./Testimonials.css";
import testimonialImg from "../../assets/images/network.png";
import { SectionHeading, TestimonialSlider } from "../../components";

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <Container>
                <Row className="w-100">
                    <Col
                        lg="6"
                        className="d-flex justify-content-center align-items-center mt-5 mt-lg-0"
                    >
                        <div className="text-content text-center text-lg-start w-100">
                            <SectionHeading
                                subtitle="Testimonial"
                                title={[
                                    "What our ",
                                    <span key={1} className="color-primary">
                                        customers
                                    </span>,
                                    " are saying",
                                ]}
                                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!"
                                centered={false}
                            />
                            <TestimonialSlider />
                        </div>
                    </Col>
                    <Col
                        lg="6"
                        className="d-flex align-items-center mt-5 mt-lg-0"
                    >
                        <div className="testimonials-image">
                            <img
                                src={testimonialImg}
                                alt="testimonials"
                                className="w-100"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
