import Slider from "react-slick";
import "./TestimonialSlider.css";

import avatar01 from "../../assets/images/ava-1.jpg";
import avatar02 from "../../assets/images/ava-2.jpg";
import avatar03 from "../../assets/images/ava-3.jpg";

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start gap-3 px-4">
                <div className="testimonial-avatar">
                    <img src={avatar01} alt="avatar" />
                </div>
                <div className="testimonial-content">
                    <blockquote className="color-grey">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat ipsum nisi temporibus nostrum ullam repellat a
                        cumque tenetur possimus mollitia.
                    </blockquote>
                    <div className="author-info">
                        <span className="d-block fw-bold">Kamal</span>
                        <span className="title">Customer</span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start gap-3 px-4">
                <div className="testimonial-avatar">
                    <img src={avatar02} alt="avatar" />
                </div>
                <div className="testimonial-content">
                    <blockquote className="color-grey">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat ipsum nisi temporibus nostrum ullam repellat a
                        cumque tenetur possimus mollitia.
                    </blockquote>
                    <div className="author-info">
                        <span className="d-block fw-bold">Laura</span>
                        <span className="title">Customer</span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start gap-3 px-4">
                <div className="testimonial-avatar">
                    <img src={avatar03} alt="avatar" />
                </div>
                <div className="testimonial-content">
                    <blockquote className="color-grey">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat ipsum nisi temporibus nostrum ullam repellat a
                        cumque tenetur possimus mollitia.
                    </blockquote>
                    <div className="author-info">
                        <span className="d-block fw-bold">Harry</span>
                        <span className="title">Customer</span>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default TestimonialSlider;
