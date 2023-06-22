import { useEffect } from "react";
import gallery1 from "../../../assets/images/gallery/gallerry1.png";
import gallery2 from "../../../assets/images/gallery/gallery2.png";
import gallery3 from "../../../assets/images/gallery/gallery3.png";
import gallery4 from "../../../assets/images/gallery/gallery4.png";
import gallery5 from "../../../assets/images/gallery/gallery5.png";
import gallery6 from "../../../assets/images/gallery/gallery6.png";
import gallery7 from "../../../assets/images/gallery/gallery7.png";
import gallery8 from "../../../assets/images/gallery/gallery8.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);
  return (
    <div className="row mt-5 mb-5">
      <div
        data-aos="fade-left"
        data-aos-once="false"
        className="col-6 col-lg-3"
      >
        <img className="h-50 w-100" src={gallery1} alt="" />
        <img className="h-50 w-100 mt-2" src={gallery5} alt="" />
      </div>
      <div data-aos="zoom-in" data-aos-once="false" className="col-6 col-lg-3">
        <img className="h-50 w-100" src={gallery2} alt="" />
        <img className="h-50 w-100 mt-2" src={gallery6} alt="" />
      </div>
      <div data-aos="zoom-out" data-aos-once="false" className="col-6 col-lg-3">
        <img className="h-50 w-100" src={gallery3} alt="" />
        <img className="h-50 w-100 mt-2" src={gallery7} alt="" />
      </div>
      <div
        data-aos="fade-right"
        data-aos-once="false"
        className="col-6 col-lg-3"
      >
        <img className="h-50 w-100" src={gallery4} alt="" />
        <img className="h-50 w-100 mt-2" src={gallery8} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
