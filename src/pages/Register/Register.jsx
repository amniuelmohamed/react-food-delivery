import "./Register.css";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { SectionHeading } from "../../components";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/slices/authSlice";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        if (password !== cPassword) {
            toast.error("Passwords don't match!", {
                position: "bottom-right",
                autoClose: 3000,
            });
        } else {
            dispatch(signUp({ name, email, password }))
                .then(() => navigate("/login"))
                .catch((err) => err);
        }
    };
    return (
        <section className="signup-form">
            <Container>
                <SectionHeading title="Signup" centered={true} />
                <Form onSubmit={submitHandler}>
                    <FormGroup>
                        <Label for="name" className="color-primary fw-bold">
                            Name
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email" className="color-primary fw-bold">
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
                        <Label for="password" className="color-primary fw-bold">
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
                    <FormGroup>
                        <Input
                            name="cPassword"
                            placeholder="Confirm Your Password"
                            type="password"
                            onChange={(e) => setCPassword(e.target.value)}
                            required
                        />
                    </FormGroup>
                    <input
                        type="submit"
                        value="Signup"
                        className="main-btn w-100"
                    />
                    <p className="mb-0 mt-3 text-center">
                        Already have an account?{" "}
                        <Link to={"/login"} className="color-primary">
                            Login
                        </Link>
                    </p>
                </Form>
            </Container>
        </section>
    );
};

export default Register;
