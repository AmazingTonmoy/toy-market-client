import { Button, Card, Form } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import bg from "../../assets/images/glax2.jpg";

const UpdateToys = () => {
  document.title = "ToysRush | Update Toy";
  const update = useLoaderData();
  const navigate = useNavigate();
  const { _id, picture, price, quantity, description } = update;

  const updateAddToy = async (event) => {
    event.preventDefault();
    const form = event.target;
    // const toyName = form.toyName.value;
    const picture = form.pictureUrl.value;
    // const sellerName = form.sellerName.value;
    // const email = form.email.value;
    // const subcategory = form.subcategory.value;
    const price = parseFloat(form.price.value) ;
    // const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updateNewToy = { picture, price, quantity, description };

    console.log(updateNewToy);

    // Send POST request to backend API with toy data
    fetch(`https://toy-universe-server-kappa.vercel.app/toys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateNewToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Done",
            text: "Toy Updated Sucessfull",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/myToys");
        }
      });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <div className="bg-dark h-100 opacity-75 pb-5 pt-5">
        <Card
          onSubmit={updateAddToy}
          className="mx-auto mt-0 mb-0 text-white bg-dark fw-bold"
        >
          <Card.Header className="text-center">Update Toy</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="picture-url">
                <Form.Label>Picture URL:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  type="url"
                  name="pictureUrl"
                  defaultValue={picture}
                  placeholder="Enter picture URL"
                  required
                />
              </Form.Group>

              <Form.Group controlId="price">
                <Form.Label>Price:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  type="number"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter price"
                  required
                />
              </Form.Group>

              <Form.Group controlId="quantity">
                <Form.Label>Available Quantity:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  type="number"
                  name="quantity"
                  defaultValue={quantity}
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
                  defaultValue={description}
                  rows={3}
                  placeholder="Enter description"
                />
              </Form.Group>

              <Button variant="danger" type="submit" className="mt-3">
                Update It
              </Button>
              <Button
                variant="white"
                className="text-dark bg-white fw-bold mt-3 ms-2"
                onClick={handleBack}
              >
                Back
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default UpdateToys;
