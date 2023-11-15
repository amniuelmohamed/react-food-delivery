import { Col, Container, Row } from "reactstrap";
import "./Services.css";

import service01 from "../../assets/images/service-01.png";
import service02 from "../../assets/images/service-02.png";
import service03 from "../../assets/images/service-03.png";
import { SectionHeading } from "../../components";

const services = [
    {
        title: "Quick Delivery",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quaerat!",
        imgUrl: service01,
    },
    {
        title: "Super Dine In",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quaerat!",
        imgUrl: service02,
    },
    {
        title: "Easy Pick Up",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quaerat!",
        imgUrl: service03,
    },
];

const Services = () => {
    return (
        <section className="services-section">
            <Container>
                <SectionHeading
                    subtitle="What we serve"
                    title={[
                        "Just sit back at home",
                        <br key={1} />,
                        "We will ",
                        <span key={2} className="color-primary">
                            take care
                        </span>,
                    ]}
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, omnis numquam aspernatur quis quod eaque?"
                    centered={true}
                />
                <Row>
                    {services.map((item) => (
                        <Col key={item.title} md="4">
                            <div className="service-item text-center p-4">
                                <div className="item-image">
                                    <img src={item.imgUrl} alt="service_item" />
                                </div>
                                <h5 className="my-3 fw-semibold">
                                    {item.title}
                                </h5>
                                <p className="color-grey mb-0">
                                    {item.description}
                                </p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Services;
