import { useState, useEffect } from "react";
import { AuthContext } from "../../Provider/authProvider";
import { useContext } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import MyToy from "./MyToy";
import bg from "../../assets/images/bg-desert.jpg";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [sortedByPrice, setSortedByPrice] = useState(false);
  document.title = "ToysRush | My Toys";
  let { user, loading } = useContext(AuthContext);

  const handleDelete = (id) => {
    const updatedToys = toys.filter((toy) => toy._id !== id);
    setToys(updatedToys);
  };

  useEffect(() => {
    if (user) {
      const url = `https://toy-universe-server-kappa.vercel.app/toys/email/${user.email}`;
      const sortParam = sortedByPrice ? "?sort=asc" : "";
      fetch(url + sortParam)
        .then((response) => response.json())
        .then((data) => setToys(data))
        .catch((error) => console.error(error));
    }
  }, [user, sortedByPrice]);

  const handleSortByPrice = () => {
    console.log("sorting by price");
    setSortedByPrice(!sortedByPrice);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5 pb-2">
        <Spinner animation="border" role="status" variant="warning">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      className="container-full"
    >
      <div className="bg-dark  opacity-75">
        <div className="my-toys-container ">
          <h2>My Toys</h2>
          <Button onClick={handleSortByPrice} variant="primary">
            {sortedByPrice
              ? "Sort by price (low to high)"
              : "Sort by price (high to low)"}
          </Button>
          <Table striped bordered hover responsive className="my-toys-table">
            <thead>
              <tr>
                <th>Toy Name</th>
                <th>Picture</th>
                <th>Seller</th>
                <th>Subcategory</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <MyToy key={toy._id} toy={toy} onDelete={handleDelete}></MyToy>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
