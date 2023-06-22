import { useLoaderData, useNavigate } from "react-router-dom";
import { BsStarFill, BsStar } from "react-icons/bs";
import "./ToysDeatils.css";
import bg from "../../assets/images/toy-info-bg.png";

const ToysDetails = () => {
  const toysInfo = useLoaderData();
  const navigate = useNavigate();
  document.title = "ToysRush | Toy Deatils";

  // Create an array of a fixed length (5) for the stars
  const starsArray = Array.from({ length: 5 });

  const handleBackClick = () => {
    navigate(-1); // go back one page in the browser history
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className=" container-full p-0"
    >
      <div className="bg-dark h-100 opacity-75 p-2">
        <div className="card mx-auto">
          <img
            className="card-img-top  w-100"
            src={toysInfo.picture}
            alt={toysInfo.toyName}
          />
          <div className="card-body bg-dark text-white  text-center">
            <h2 className="card-title">{toysInfo.toyName}</h2>
            <p className="card-text">Seller: {toysInfo.sellerName}</p>
            <p className="card-text">Contact: {toysInfo.email}</p>
            <p className="card-text">Price: ${toysInfo.price}</p>
            <div className="rating">
              Rating:
              {/* Map over the stars array and display the filled or unfilled stars */}
              {starsArray.map((_, index) => (
                <span key={index}>
                  {index < toysInfo.rating ? (
                    <BsStarFill className="text-warning ms-1" />
                  ) : (
                    <BsStar className="text-warning" />
                  )}
                </span>
              ))}
            </div>
            <p className="card-text">
              Available Quantity: {toysInfo.quantity} unit
            </p>
            <p className="card-text">Description: {toysInfo.description}</p>
            <button className="btn btn-primary" onClick={handleBackClick}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;
