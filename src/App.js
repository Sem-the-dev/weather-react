import logo from './logo.svg';
import './App.css';
import SearchTool from './SearchTool';

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
         <SearchTool />
         <img src={logo} className="App-logo" alt="logo" />
      </header>
      
    </div>
  );
}

export default App;
