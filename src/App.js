import "./App.css";
import "./Search.css";
import Search from "./Search.js";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      {" "}
      <Search cityDefault="Kyiv" />
      <Footer />
    </div>
  );
}

export default App;
