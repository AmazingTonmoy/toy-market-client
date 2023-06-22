import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import "./AllToys.css";

import bg from "../../assets/images/glax3.jpg";

const AllToys = () => {
  const [searchTerm, setSearchTerm] = useState("");
  document.title = "ToysRush | All Toys";

  const allToys = useLoaderData();
  console.log(allToys);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredToys = allToys.filter((toy) =>
    toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      className="all-toys-container"
    >
      <div className="bg-dark h-100 opacity-75 pb-5 px-2">
        <h1 className="text-white px-4 py-3">All Toys</h1>
        <div className="search-bar px-3 ">
          <input
            className="px-2 py-1 border th fw-bold text-white rounded"
            type="text"
            placeholder="Search by Toy Name "
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th className="th">Seller</th>
              <th className="th">Toy Name</th>
              <th className="th">Sub-category</th>
              <th className="th">Price</th>
              <th className="th">Quantity</th>
              <th className="th">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.map((toy) => (
              <tr key={toy._id}>
                <td className="th">{toy.sellerName || "N/A"}</td>
                <td className="th">{toy.toyName}</td>
                <td className="th">{toy.subcategory}</td>
                <td className="th">${toy.price}</td>
                <td className="th">{toy.quantity}</td>
                <td className="th">
                  <Link to={`/toysDeatils/${toy._id}`}>
                    <button>View Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
