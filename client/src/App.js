/** @format */

import "./index.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductView from "./pages/ProductView";
import Footer from "./pages/Footer";
import Admin from "./pages/Admin";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Home />
      <Login />
      <Cart />
      <ProductView />
      <Profile />
      <Shop /> */}
      <Admin />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
