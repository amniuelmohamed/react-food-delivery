import { Container } from "reactstrap";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import Logo from "../../components/Logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/slices/cartVisibilitySlice";
import { LogOut } from "../../store/slices/authSlice";

const navLinks = [
    {
        display: "Home",
        path: "home",
    },
    {
        display: "Foods",
        path: "foods",
    },
    {
        display: "Cart",
        path: "cart",
    },
    {
        display: "Contact",
        path: "contact",
    },
];

const Header = () => {
    const menuRef = useRef(null);
    const toggleMenu = () => menuRef.current.classList.toggle("show-menu");

    const headerRef = useRef();

    const dispatch = useDispatch();

    const cartQuantity = useSelector((state) => state.cart.totalQuantity);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100
                ? headerRef.current.classList.add("sticky-header")
                : headerRef.current.classList.remove("sticky-header");
        });

        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    // Auth
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const userName = useSelector((state) => state.auth.userName);

    return (
        <header ref={headerRef}>
            <Container>
                <div className="nav-wrapper d-flex justify-content-between align-items-center">
                    <Logo />
                    <nav ref={menuRef}>
                        <ul className="d-flex align-items-center gap-5">
                            {navLinks.map((item) => (
                                <li key={item.display}>
                                    <NavLink
                                        to={item.path}
                                        activeclassname="active"
                                        // className={(navItem) =>
                                        //     navItem.isActive ? "active" : ""
                                        // }
                                        onClick={toggleMenu}
                                    >
                                        {item.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="right-icons d-flex align-items-center gap-3">
                        {isLoggedIn && (
                            <span className="fw-bold fst-italic">
                                Hey, {userName}
                            </span>
                        )}
                        <span
                            className="cart-icon"
                            onClick={() => {
                                dispatch(toggle());
                            }}
                        >
                            <i className="ri-shopping-bag-line"></i>
                            <span className="cart-badge">{cartQuantity}</span>
                        </span>
                        {isLoggedIn ? (
                            <span
                                className="logout-btn"
                                onClick={() => dispatch(LogOut())}
                            >
                                Logout
                            </span>
                        ) : (
                            <span className="user-icon">
                                <Link to={"login"}>
                                    <i className="ri-user-line"></i>
                                </Link>
                            </span>
                        )}

                        <span className="mobile-menu" onClick={toggleMenu}>
                            <i className="ri-menu-3-fill"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
