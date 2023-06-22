import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { updateProfile } from "firebase/auth";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provider/authProvider";
import bg from "../../assets/images/logo-bg.jpg";

const SignUp = () => {
  document.title = "ToysRush | Sign Up";

  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    setError("");

    if (password !== confirm) {
      setError("Password didn't match");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 Character long");
      return;
    }

    createUser(name, email, password, photoURL)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, { displayName: name, photoURL: photoURL });
      })
      .then((result) => {
        console.log("User profile updated successfully");
        toast.info("Registration completed");
        toast.success("Login Success");

        form.reset();

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          setError("The email address is already in use by another account.");
        } else {
          setError(error.message);
        }
      });
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      className="container-full "
    >
      <div className="bg-dark h-100 opacity-75 p-0">
        <Container className="p-4">
          <Row className="justify-content-lg-center">
            <Col
              md={6}
              className="border border-3 border-warring rounded py-2  text-white"
            >
              <h2 className="text-center mb-2 mt-2">Sign Up</h2>
              <Form onSubmit={handleSignUp}>
                <Form.Group controlId="name">
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <Form.Control
                    className="fw-bold"
                    type="text"
                    name="text"
                    placeholder="Enter Name"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label className="mt-2 fw-bold">Email</Form.Label>
                  <Form.Control
                    className="fw-bold"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label className="mt-2 fw-bold">Password</Form.Label>
                  <Form.Control
                    className="fw-bold"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="confirm">
                  <Form.Label className="mt-2 fw-bold">
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    className="fw-bold"
                    type="password"
                    name="confirm"
                    placeholder="Confirm Password"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="photoURL">
                  <Form.Label className="mt-2 fw-bold">Photo URL</Form.Label>
                  <Form.Control
                    className="fw-bold"
                    type="text"
                    name="photoURL"
                    placeholder="Enter Photo URL"
                  />
                </Form.Group>

                <Button variant="danger" type="submit" className="mt-3">
                  Sign Up
                </Button>
              </Form>
              <p className="text-danger">{error}</p>
              <p className="mt-4 text-center  ">
                Already have an account?{" "}
                <Link className="text-danger fw-bold" to="/login">
                  Login
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SignUp;
