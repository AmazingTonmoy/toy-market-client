import Carousel from "react-bootstrap/Carousel";
import carouselImg1 from "../../../assets/images/carousel1.jpeg";
import carouselImg2 from "../../../assets/images/carousel2.jpeg";
import carouselImg3 from "../../../assets/images/carousel3.jpeg";
import "./Carousels.css";

const Carousels = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block image-fluid w-100 h-100 caro-img"
            src={carouselImg1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block image-fluid w-100 h-100 caro-img "
            src={carouselImg2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block image-fluid w-100 h-100 caro-img"
            src={carouselImg3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
