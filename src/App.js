import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Interests from "./Components/Interests";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Interests/>
    </div>
  );
}

export default App;
