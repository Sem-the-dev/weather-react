import React from 'react';
import './App.css';
import SearchTool from './SearchTool';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from "react-loader-spinner";


function App() {
  return (
    <div className="App">
      <div className="container">
     <div style={{
          backgroundImage: "url(./images/hues-of-red-and-blue.jpg)",
          backgroundPosition: "auto",
          backgroundSize: "fit-content" }} >
      <SearchTool />
      
      <Loader type="BallTriangle" color="gray" height={150} width={150} />
      
      <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
