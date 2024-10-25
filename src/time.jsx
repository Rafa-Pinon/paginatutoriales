import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import myVideo from "./assets/videos/videomiobill.mp4";
function Time() {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };
  return (
    <div className="archivotime">
      <div className="botoniniciotime">
        <button onClick={home}>
          <ArrowBackIcon />
        </button>
      </div>
      <div className="titulotime">
        <h1>Time</h1>
      </div>
      <div className="video">
        <video width="600" autoPlay controls>
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Time;
