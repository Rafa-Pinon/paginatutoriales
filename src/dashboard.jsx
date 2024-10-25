import React from 'react';
import myVideo from './assets/videos/videomiobill.mp4';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Dashboard() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };
  return (

    <div className="archivo">
      <div className="botoninicio">
      
      <button onClick={handleGoHome}>
        <ArrowBackIcon /> 
      </button>
     
      </div>
       <div className="titulodash">
      
          <h1>Dashboard</h1>
    </div>
    <div className="video">
    <video width="600" autoPlay controls>
    <source src={myVideo} type="video/mp4" />
        
      </video>
    </div>
      
    </div>
  );
}

export default Dashboard;