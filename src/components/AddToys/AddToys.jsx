import { useContext } from "react";
import { AuthContext } from "../../Provider/authProvider";
import { Card, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg from "../../assets/images/glax2.jpg";

const AddToys = () => {
  document.title = " ToysRush | Add Toys";
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleAddToy = async (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const picture = form.pictureUrl.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const subcategory = form.subcategory.value;
    const price = parseFloat(form.price.value);
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const addNewToy = {
      toyName,
      picture,
      sellerName,
      email,
      price,
      subcategory,
      rating,
      quantity,
      description,
    };

    console.log(addNewToy);

    // Send POST request to backend API with toy data
    fetch("https://toy-universe-server-kappa.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addNewToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("toy added Successful");
        form.reset();
      });
  };

  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <div className="bg-dark h-100 opacity-75 pb-5 pt-5">
        <Card
          onSubmit={handleAddToy}
          className="mx-auto mt-0 mb-0 text-white bg-dark fw-bold"
        >
          <Card.Header className="text-center ">
            <h3>Add Toy</h3>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="toy-name">
                <Form.Label>Toy Name:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  type="text"
                  name="toyName"
                  placeholder="Enter toy name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="picture-url">
                <Form.Label>Picture URL:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  type="url"
                  name="pictureUrl"
                  placeholder="Enter picture URL"
                  required
                />
              </Form.Group>

              <Form.Group controlId="seller-name">
                <Form.Label>Seller Name:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  type="text"
                  name="sellerName"
                  defaultValue={user ? user.displayName : ""}
                  placeholder="Enter seller name"
                />
              </Form.Group>

              <Form.Group controlId="seller-email">
                <Form.Label>Seller Email:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  type="email"
                  name="email"
                  defaultValue={user ? user.email : ""}
                  placeholder="Enter seller email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="subcategory">
                <Form.Label>Sub-category:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  as="select"
                  name="subcategory"
                  required
                >
                  <option value="Avenger">Avenger</option>
                  <option value="Justice-League">Justice League</option>
                  <option value="transformer">Transformers</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="price">
                <Form.Label>Price:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  required
                />
              </Form.Group>

              <Form.Group controlId="rating">
                <Form.Label>Rating:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  type="number"
                  name="rating"
                  min="0"
                  max="5"
                  step="0.1"
                  placeholder="Enter rating"
                  required
                />
              </Form.Group>

              <Form.Group controlId="quantity">
                <Form.Label>Available Quantity:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  type="number"
                  name="quantity"
                  placeholder="Enter available quantity"
                  required
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  as="textarea"
                  name="description"
                  rows={3}
                  placeholder="Enter description"
                />
              </Form.Group>

              <Button variant="danger" type="submit" className="mt-2">
                Add Toy
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AddToys;
