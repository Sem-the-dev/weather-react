import React from 'react';
import './App.css';
import SearchTool from './SearchTool';
import Footer from './Footer';
import Forecast from './Forecast';


function App() {
  return (
    <div className="App">
     <div
        style={{
          backgroundImage: "url(./images/hues-of-red-and-blue.jpg)",
          backgroundPosition: "auto",
          backgroundSize: "3000px"
        }}
      >
      
      <SearchTool />
      <Forecast />
    
      <Footer />
      </div>
    </div>
  );
}

export default App;
