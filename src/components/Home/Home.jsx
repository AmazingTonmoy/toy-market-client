import { Outlet } from "react-router-dom";
import Headers from "../Headers/Headers";
import Footers from "../Footers/Footers";
import { ToastContainer } from "react-toastify";


const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <ToastContainer position="top-center" autoClose={1000} theme="colored"/>
            <Outlet></Outlet>
            <Footers></Footers>
            
        </div>
    );
};

export default Home;