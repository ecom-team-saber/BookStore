import thing from "../assets/images/a-Dolls-house.jpg";
import { useState } from "react";
import { MDBIcon, MDBCollapse } from "mdb-react-ui-kit";
import { Twirl as Hamburger } from "hamburger-react";

const Filter = () => {
  const [showNavExternal, setShowNavExternal] = useState(false);
  const categories = [
    "Non-Fiction",
    "Fiction",
    "History",
    "Sci-Fi",
    "Horror",
    "Philosophy",
  ];

  return (
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
            return (
              <div key={idx} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label className="form-check-label">{e}</label>
              </div>
            );
          })}
        </div>
      </MDBCollapse>
    </div>
  );
};

export default function Shop() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const page = "All Books";
  return (
    <>
      <h1 className="page-header">{page}</h1>
      <section className="products">
        <Filter />
        <div id="shop">
          {arr.map((e, idx) => {
            return (
              <div key={idx} id="product-card" className="">
                <div className="product-img">
                  <img src={thing} alt=".." />
                  <div className="overlay">
                    <button className="quick-cart">
                      <MDBIcon fas icon="shopping-cart" size="sm" />
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h3>A Dolls House</h3>
                  <h4>by: Henrik Ibsen</h4>
                  <h4 style={{ marginTop: -6 }}>$58.58</h4>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
