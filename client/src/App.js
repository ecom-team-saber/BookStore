import "./index.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductView from "./pages/ProductView";

function App() {
  return (

      <div className="App">
        <Navbar />
        <Login />
        <Home />
        <Cart />
      <ProductView />
      </div>
  );
}

export default App;

