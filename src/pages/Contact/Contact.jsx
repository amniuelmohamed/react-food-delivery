import { Container } from "reactstrap";
import "./Contact.css";
import { SectionHeading } from "../../components";

const Contact = () => {
    return (
        <section className="contact-us">
            <Container>
                <SectionHeading title="Contact Us" centered={true} />
                <form
                    className="d-flex flex-column gap-3 mx-auto"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <h6 className="text-center color-primary">
                        We'll be happy to be in touch with you!
                    </h6>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <input type="text" placeholder="Subject" required />
                    <textarea placeholder="Your Message..." required></textarea>
                    <input
                        type="submit"
                        value="Send"
                        className="main-btn w-100"
                    />
                </form>
            </Container>
        </section>
    );
};

export default Contact;
