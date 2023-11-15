import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { SectionHeading } from "../../components";
import { useState } from "react";
import { signIn, signInGoogle } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(signIn({ email, password }))
            .then(() => navigate("/"))
            .catch((err) => err);
    };

    const signInWithGoogle = () => {
        dispatch(signInGoogle())
            .then(() => navigate("/"))
            .catch((err) => err);
    };

    return (
        <section className="login-form">
            <Container>
                <SectionHeading title="Login" centered={true} />
                <div className="form-wrapper">
                    <Form onSubmit={submitHandler}>
                        <FormGroup>
                            <Label
                                for="email"
                                className="color-primary fw-bold"
                            >
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label
                                for="password"
                                className="color-primary fw-bold"
                            >
                                Password
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                placeholder="Your Password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <Link to={"/reset"} className="forgot-password">
                            Forgot Password?
                        </Link>
                        <input
                            type="submit"
                            value="Login"
                            className="main-btn w-100"
                        />
                    </Form>
                    <span className="separator color-grey d-block text-center my-3">
                        or
                    </span>
                    <button
                        className="main-btn with-google w-100"
                        onClick={signInWithGoogle}
                    >
                        <i className="ri-google-fill"></i> Login with Google
                    </button>
                    <p className="text-center mb-0 mt-3">
                        Not registred yet?{" "}
                        <Link to={"/register"} className="color-primary">
                            Create an account
                        </Link>
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default Login;
