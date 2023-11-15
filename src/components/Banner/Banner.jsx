import { Container } from "reactstrap";
import "./Banner.css";

const Banner = ({ title }) => {
    return (
        <div className="banner">
            <Container>
                <h2 className="text-white">{title}</h2>
            </Container>
        </div>
    );
};

export default Banner;
