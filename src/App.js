import React from 'react';
import './App.css';
import SearchTool from './SearchTool';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App" style={{
          backgroundImage: "url(./images/hues-of-red-and-blue.jpg)",
          backgroundPosition: "auto",
          backgroundSize: "fit-content" }}>
      <div className="container">
    
      <SearchTool defaultCity="London"/>
      
      <Footer />
  
      </div>
    </div>
  );
}

export default App;
