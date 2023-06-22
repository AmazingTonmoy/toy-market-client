import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ChekUs.css";

const CheckUs = () => {
  return (
    <div className="mt-5">
      <div className="container text-center">
        <img
          className="w-50"
          src="https://img.creator-prod.zmags.com/assets/images/63c190f62a22912ce2ab7f74.png"
          alt=""
        />
        <h4 className="pt-2">
          Were you a Toys"R"Us Kid? Share your memories with us on Instagram
          with #ToysRUsKid
        </h4>
      </div>

      {/* pic */}

      <div className="container-full px-5 text-center mt-4">
        <div className="row">
          <div className="col-6 col-lg-2 mt-5" id="memory1">
            <img
              className="w-100"
              src="https://img.creator-prod.zmags.com/assets/images/63c19265f6b59320adf42808.png"
              alt=""
            />
          </div>
          <div className="col-6 col-lg-2 mt-5" id="memory2">
            <img
              className="w-100"
              src="https://img.creator-prod.zmags.com/assets/images/63c1be83f6b59320adf45307.png"
              alt=""
            />
          </div>
          {/* big image */}
          <div className="col-12 col-lg-4">
            <img
              className="w-75"
              src="https://img.creator-prod.zmags.com/assets/images/645d4279b6fc7c5ba74facf7.png"
              alt=""
            />
          </div>
          <div className="col-6 col-lg-2 mt-5" id="memory3">
            <img
              className="w-100"
              src="https://img.creator-prod.zmags.com/assets/images/63c192182a22912ce2ab8174.png"
              alt=""
            />
          </div>
          <div className="col-6 col-lg-2 mt-5" id="memory4">
            <img
              className="w-100"
              src="https://img.creator-prod.zmags.com/assets/images/63c191baf6b59320adf4273c.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* button */}

      <div className="text-center mb-3 p-2">
        <Link to="https:www.instagram.com">
          <Button>
            <h4>Explore Tru Instagram</h4>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CheckUs;
