import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Timer } from "@mui/icons-material";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Dashboard");
  };
  const handleClickTime = () => {
    navigate("/Time");
  };

  return (
    <div className="inicio">
      <div className="explico">
        <h1>I explain to you what it is and how it works</h1>
      </div>
      <div className="botoncontainer">
        <div className="boton">
          <button onClick={handleClick}>
            <FontAwesomeIcon icon={faHouse} className="icon" />
            Dashboard
          </button>
        </div>
        <div className="botontiempo">
          <button onClick={handleClickTime}>
            <Timer className="icon" />{" "}
            {/* Usar el componente Timer directamente */}
            Time
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
