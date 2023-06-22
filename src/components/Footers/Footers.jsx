import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from ".//../../assets/images/TRU_Logo.png";

const Footers = () => {
  return (
    <footer className="bg-dark text-light  py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>
              <img className="w-50" src={logo} alt="" />
            </h5>
            <p>Play With Our Exclusive Toys.</p>
          </Col>
          <Col md={4}>
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li>
                <FaFacebook />{" "}
                <a
                  className="text-white text-decoration-none"
                  href="https://facebook.com"
                >
                  Facebook
                </a>
              </li>
              <li>
                <FaTwitter />{" "}
                <a
                  className="text-white text-decoration-none"
                  href="https://twitter.com"
                >
                  Twitter
                </a>
              </li>
              <li>
                <FaYoutube />{" "}
                <a
                  className="text-white text-decoration-none"
                  href="https://youtube.com"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <address>
              <strong>ToysRus , Inc.</strong>
              <br />
              1234 Main Street
              <br />
              Califonia, USA 12345
              <br />
              <p title="Phone">Phone : (123) 456-7890</p>
            </address>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={12}>
            <p className="text-center">
              &copy; {new Date().getFullYear()} @tosyrus Inc. All rights reserved
              
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footers;
