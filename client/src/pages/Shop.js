import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { MDBIcon, MDBCollapse } from "mdb-react-ui-kit";
import { Twirl as Hamburger } from "hamburger-react";
import { fetchProducts } from "../store/slices/productsSlice";
import { addToCart } from "./components/addToCart";
import axios from "axios";

// New comment
export default function Shop() {
  const [page, setPage] = useState("");
  const location = useLocation();
  const [filter, setFilter] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const query = location.search.split("=")[1];
  useEffect(() => {
    let isCategory = false;
    let idx;
    categories.map((category, index) => {
      if (category.toLowerCase() === query) {
        isCategory = true;
        idx = index;
      }
    });
    if (isCategory) {
      dispatch(fetchProducts({ category: query }));
      setPage(categories[idx] + " Books");
    } else if (location.search.split("=")[0] === "?name") {
      dispatch(fetchProducts({ name: query }));
      setPage("Showing results for search: " + query);
    } else if (query === "all") {
      setPage("All Books");
      dispatch(fetchProducts());
    }
  }, [query]);
  const [showNavExternal, setShowNavExternal] = useState(false);
  const categories = [
    "Non-Fiction",
    "Fiction",
    "History",
    "Sci-Fi",
    "Horror",
    "Philosophy",
  ];
  const handleFilter = (e) => {
    if (e.target.checked) {
      setFilter([...filter, e.target.value]);
    } else if (!e.target.checked) {
      setFilter(filter.filter((val) => val !== e.target.value));
    }
  };

  const handleNavigate = (e) => {
    navigate(`/products/${e.target.id}`);
  };

  return (
    <>
      <h1 className="page-header">{page}</h1>
      <div className="filters">
        <div
          style={{
            height: 40,
            display: "flex",
            alignItems: "center",
            fontWeight: 600,
          }}
        >
          <div onClick={() => setShowNavExternal(!showNavExternal)}>
            <Hamburger size={20} label="Show filters" />
          </div>
        </div>

        <MDBCollapse show={showNavExternal}>
          <div className="bg-light shadow-3 p-4">
            {categories.map((e, idx) => {
              const lowercase = e.toLowerCase();
              return (
                <div key={idx} className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={lowercase}
                    onChange={handleFilter}
                  />
                  <label className="form-check-label">{e}</label>
                </div>
              );
            })}
          </div>
        </MDBCollapse>
      </div>
      <section className="products">
        <div id="shop">
          {products.products
            .filter((val) => {
              if (
                filter.length > 0 &&
                filter.includes(val.categories[0].name)
              ) {
                return val;
              } else if (filter.length === 0) {
                return val;
              } else {
                return;
              }
            })
            .map((e) => {
              return (
                <div key={e.id} id="product-card" className="">
                  <div className="product-img">
                    <img src={require(`../assets/${e.productImg}`)} alt=".." />
                    <div className="overlay">
                      <button
                        onClick={() => addToCart(e)}
                        className="quick-cart"
                      >
                        <MDBIcon fas icon="shopping-cart" size="sm" />
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3 id={`${e.id}`} onClick={handleNavigate}>
                      {e.title}
                    </h3>
                    <h4>by: {e.author}</h4>
                    <h4 style={{ marginTop: -6 }}>${e.price}</h4>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}
