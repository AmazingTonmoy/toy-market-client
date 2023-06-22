import { useState } from "react";
import Swal from "sweetalert2";



const GuessTheToy = () => {
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === "Bubble") {
      Swal.fire("Congratulations", "You gave the right answer!", "success");
      document.getElementById("toy-image").src =
        "https://img.creator-prod.zmags.com/assets/images/645e4b846df9f10f76e46542.png";
      // Disable all buttons by setting gameOver state to true
      setGameOver(true);
    } else {
      Swal.fire("Wrong answer", "", "error");
    }
  };
  return (
    <div className="pt-3"
      style={{
        backgroundImage: `url(https://img.creator-prod.zmags.com/assets/images/645e485e6df9f10f76e4635f.png)`,
      }}
    >
      <div className="text-center pt-4">
        <img
          src="https://img.creator-prod.zmags.com/assets/images/63efad356df9f10f76be9346.png?im=Resize,width=1870"
          className="w-50"
          alt=""
        />
      </div>

      <div className="container d-flex justify-content-center pb-5">
        <div
          style={{
            backgroundImage: `url(https://img.creator-prod.zmags.com/assets/images/63efab936df9f10f76be9222.png)`,
            height: "550px",
            width: "800px",
            borderRadius: "10px",
          }}
        >
          <div className="row">
            <div className="col-3 mx-auto col-lg-3">
              <img
                className="w-100 pt-4 image-fluid"
                src="https://img.creator-prod.zmags.com/assets/images/645e432b6df9f10f76e45fe2.png"
                alt=""
                id="toy-image"
              />
            </div>

            <div className="col-12 col-lg-9 p-5">
              <h2 className="pt-5 text-center">
                Can you guess which series this Funko POP! is from?
              </h2>
              <div className="row">
                <div className="col-sm-6 col-lg-12 d-flex justify-content-center align-items-center mb-4">
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => handleAnswer("Transformer")}
                    disabled={gameOver} // Disable the button if game is over
                  >
                    Transformer
                  </button>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => handleAnswer("Superman")}
                    disabled={gameOver} // Disable the button if game is over
                  >
                    Superman
                  </button>
                </div>
                <div className="col-sm-6 col-lg-12 d-flex justify-content-center align-items-center ">
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => handleAnswer("Thor")}
                    disabled={gameOver} // Disable the button if game is over
                  >
                    Thor
                  </button>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => handleAnswer("Bubble")}
                    disabled={gameOver} // Disable the button if game is over
                  >
                    Start Wars
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
   
    
    
  );
};

export default GuessTheToy;
