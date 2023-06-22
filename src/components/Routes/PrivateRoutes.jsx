import { useContext } from "react";
import { AuthContext } from "../../Provider/authProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2";

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return(
            <div className="d-flex justify-content-center d-none">
                <Spinner animation="grow" variant="light">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if(user){
        return children;
    }

    if (!user) {
        Swal.fire({
            title: 'You have to log in first to view details',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }

    return (
        <Navigate to='/login' state={{from: location}} replace />
    );
}

export default PrivateRoutes;
