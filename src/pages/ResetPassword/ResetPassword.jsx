import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import { SectionHeading } from "../../components";
import "./ResetPassword.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../store/slices/authSlice";

const ResetPassword = () => {
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(resetPassword(email));
    };

    return (
        <section className="reset-form">
            <Container>
                <SectionHeading title="Reset Password" centered={true} />
                <Form onSubmit={submitHandler}>
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
                    <input
                        type="submit"
                        value="Reset Password"
                        className="main-btn w-100"
                    />
                    <p className="mb-0 mt-3 text-center">
                        I remembered my password!{" "}
                        <Link to={"/login"} className="color-primary">
                            Login
                        </Link>
                    </p>
                </Form>
            </Container>
        </section>
    );
};

export default ResetPassword;
