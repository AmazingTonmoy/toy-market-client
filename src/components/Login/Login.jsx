import { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../Provider/authProvider";
import loginBg from "../../assets/images/marvelBg.jpg";

const Login = () => {
  document.title = "ToysRush | Login";
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { signIn, googleLogIn, auth, googleProvider } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //   email and pass login
  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    // handle login logic here
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        form.reset();
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      //   /............../
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setError(`Email Address Not Found`);
        } else {
          setError("Wrong password.Try again");
        }
      });

    //   ............
  };

  //   google log in

  const handleGoogleSignIn = () => {
    googleLogIn(auth, googleProvider)
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
        toast.success("Login Successfull");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div
      style={{ backgroundImage: `url(${loginBg})`, backgroundSize: "cover" }}
      className="container-full  "
    >
      <div className="bg-dark h-100 opacity-75 p-0">
        <Container className="p-4 ">
          <Row className="justify-content-lg-center ">
            <Col
              md={6}
              className="border border-3 border-warring rounded py-4  text-white "
            >
              <h2 className="text-center mb-3 ">Login</h2>
              <p className="text-danger fw-bold text-center mt-2">{error}</p>
              <p className="text-success text-center mt-2">{success}</p>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="fw-bold">Email address</Form.Label>
                  <Form.Control
                    className="fw-bold"
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-4">
                  <Form.Label className="fw-bold">Password</Form.Label>
                  <Form.Control
                    className="fw-bold"
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="current-password"
                    required
                  />
                </Form.Group>

                <Button
                  style={{ backgroundColor: "red", border: "none" }}
                  type="submit"
                  className="mt-2"
                >
                  Login
                </Button>
                <p className="mt-4 text-center">
                  Don't have an account yet?
                  <Link className="text-white  px-1" to="/register">
                    Sign Up
                  </Link>
                </p>
                <p className="text-center">or</p>
              </Form>

              <Button
                onClick={handleGoogleSignIn}
                variant="danger"
                size="lg"
                className="d-block mb-2 mt-4 w-50 mx-auto"
              >
                <BsGoogle /> Continue With Google
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
