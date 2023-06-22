import banner from "../../assets/images/banner.png";
import bannerlogo from "../../assets/images/BANNER-LOGO.png";
import { Button } from "react-bootstrap";
import "./Home-Contents.css";
import Carousels from "./Carousel/Carousels";
import Gallery from "./Gallery/Gallery";
import Category from "./Category/Category";
import GuessTheToy from "./GuessTheToy/GuessTheToy";
import CheckUs from "./CheckUs/CheckUs";
const Home_Contents = () => {
  document.title = "ToysRus";

  return (
    <div className="container-full mb-3 ">
      <div
        className="banner-container"
        style={{
          height: "550px",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            {/* banner-left */}
            <div className="col-12 col-lg-6 banner-left">
              <img className="w-75 image-fluid p-2" src={bannerlogo} alt="" />
              <h3 className="p-2">
                Last chance to shop Geoffrey’s Picks at great prices!
              </h3>
              <Button className="banner-btn bg-white py-2 px-5 text-dark  border-0">
                {" "}
                Shop The Sell
              </Button>
            </div>

            {/* banner-right */}
            <div className="col-12 col-lg-6 container banner-right">
              <Carousels></Carousels>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="text-center">Our Gallery</h1>
        <Gallery></Gallery>
      </div>

      {/* shop by catagory */}
      <div>
        <h1 className="text-center">Shop By Category</h1>
        <Category></Category>
      </div>

      {/* guess the toy name */}
      <div>
        <h1 className="text-center mt-5">Guess The Toy Name</h1>
        <p className="text-center fw-bold">
          Guess Name And Chance to win price
        </p>
        <GuessTheToy></GuessTheToy>
      </div>

      <div>
        <CheckUs></CheckUs>
      </div>
    </div>
  );
};

export default Home_Contents;
