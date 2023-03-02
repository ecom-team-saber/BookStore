import "./index.css";
import { MDBIcon } from "mdb-react-ui-kit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductView from "./pages/ProductView";
import SignUp from "./pages/components/SignUp";

function App() {
  return (

      <div className="App">
        {/* <Navbar /> */}
        {/* <Home /> */}
        {/* <SignUp /> */}
        {/* <Cart />
      <ProductView /> */}
      </div>
  );
}

export default App;

    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/signUp" element={<SignUp />} />
    //   </Routes>
    // </Router>