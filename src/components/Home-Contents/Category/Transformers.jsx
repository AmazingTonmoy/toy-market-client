import { useEffect, useState } from "react";
import Default from "./Default";

const Transformers = () => {
    const [toys,setToys] = useState([])

    useEffect(() => {
        fetch('https://toy-universe-server-kappa.vercel.app/toys/subs/transformer')
          .then(response => response.json())
          .then(data => setToys(data))
          .catch(error => console.error(error));
          
      },[]);
    return (
        <Default toys={toys}></Default>
    );
};

export default Transformers;