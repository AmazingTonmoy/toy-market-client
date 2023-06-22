
import { Link } from "react-router-dom";
import "./AllCategory.css"
const Default = ({toys}) => {
    return (
        <div className="toys-container-cate mt-5">
        {toys.map((toy) => (
          <div key={toy._id} className="card-cate">
            <img src={toy.picture} alt={toy.name} className="card-img-cate" />
            <div className="card-text-cate">
              <h4>{toy.toyName}</h4>
              <p>Price: ${toy.price}</p>
              <p>Rating: {toy.rating}</p>
              <Link to={`/toysDeatils/${toy._id}`}>
                <button className="btn-cate">View Details</button>
                </Link>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Default;