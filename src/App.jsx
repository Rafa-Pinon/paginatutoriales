import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import "./dashboard.css";
import "./tiempo.css";
import Home from "./Home";
import Dashboard from "./dashboard";
import Time from "./time";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="titulo">
        <h1>Soporte Whistle App</h1>
      </div>
      <div className="boton">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Time" element={<Time />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
