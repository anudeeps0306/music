import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from "./components/Body";
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar'
import './App.css';



function App() {
  return (
    <div className="d-flex">
      <div className="p-5 text-light d-none d-md-block" style={{ height: "100vh", width: "15%",backgroundColor:"darkblue" }}>
        <Leftbar/>
      </div>
      <div className="d-flex flex-column" style={{ width: "85%" }}>
        <div className="p-5 bg-danger text-light" style={{ height: "30%" }}>
          <Navbar/>
        </div>
        <div className="p-5 bg-warning text-light" style={{ height: "70%" }}>
          <Body/>
        </div>
      </div>
    </div>
  );
}

export default App;
