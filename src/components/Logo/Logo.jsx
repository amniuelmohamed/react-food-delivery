import { Link } from "react-router-dom";
import "./Logo.css";
import logo from "../../assets/images/res-logo.png";

const Logo = () => {
    return (
        <div className="logo">
            <Link to={"home"}>
                <img src={logo} alt="logo" />
            </Link>
            <h5>Tasty Treat</h5>
        </div>
    );
};

export default Logo;
