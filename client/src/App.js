import "./index.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductView from "./pages/ProductView";
import Footer from "./pages/Footer";
import Admin from "./pages/Admin";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/product" element={<ProductView />} />
        <Route exact path="/products" element={<Shop />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
