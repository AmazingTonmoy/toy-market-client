import { Button } from "react-bootstrap";
import "./MyToys.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyToy = ({ toy, onDelete }) => {
  const {
    _id,
    picture,
    toyName,
    sellerName,
    subcategory,
    price,
    rating,
    quantity,
    description,
  } = toy;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-universe-server-kappa.vercel.app/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              onDelete(_id);
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <tr>
      <td className="th text-white">{toyName}</td>
      <td className="bg-dark">
        <img className="my-toy-img" src={picture} alt={toyName} width="100" />
      </td>
      <td className="th text-white">{sellerName}</td>
      <td className="th text-white">{subcategory}</td>
      <td className="th text-white">${price}</td>
      <td className="th text-white">{rating}</td>
      <td className="th text-white">{quantity}</td>
      <td className="th text-white">{description}</td>
      <td className="th text-white">
        <Button
          onClick={() => handleDelete(_id)}
          className="btn btn-danger mb-2"
          title="delete"
        >
          X
        </Button>
        <Link to={`/updateToys/${_id}`}>
          <Button className="btn btn- text-white">Edit</Button>
        </Link>
      </td>
    </tr>
  );
};

export default MyToy;
