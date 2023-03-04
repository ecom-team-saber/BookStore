import gradient from "../assets/gradient.png";
import fiction from "../assets/fiction.jpeg";
import philosophy from "../assets/philosophy.jpeg";

import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const FakeCard = () => {
  return (
    <MDBCard className="text-black home-card">
      <MDBCardImage
        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
        position="top"
        alt="Apple Computer"
      />
      <MDBCardBody>
        <div className="text-center">
          <MDBCardTitle>Believing is seeing</MDBCardTitle>
          <p className="text-muted mb-4">Apple pro display XDR</p>
        </div>

        <div className="d-flex justify-content-between total font-weight-bold mt-4">
          <span>Total</span>
          <span>$7,197.00</span>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <header
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <div
          onClick={() => {
            navigate("/products");
          }}
          id="intro-example"
          className="p-5 text-center bg-image img-fluid"
          style={{
            backgroundImage: `url(${gradient})`,
          }}
        ></div>
      </header>
      <h1 id="categories-label" className="text-center" style={{ margin: 20 }}>
        Featured Products
      </h1>
      <div className="home-cards">
        {[1, 2, 3, 4].map((e) => (
          <FakeCard />
        ))}
      </div>
      <div>
        <div className="categories-display">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <h1
                  id="categories-label"
                  style={{ margin: 20 }}
                  className="text-center"
                >
                  Browse Our Categories
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-3 text-center mb-4">
                <div className="grid-square">Non-Fiction</div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 text-center mb-4">
                <div
                  style={{
                    backgroundImage: `url(${fiction})`,
                    backgroundSize: "cover",
                  }}
                  className="grid-square"
                >
                  Fiction
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 text-center mb-4">
                <div className="grid-square">History</div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 text-center mb-4">
                <div className="grid-square">Sci-Fi</div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg- text-center mb-4">
                <div className="grid-square">Horror</div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 text-center mb-4">
                <div
                  className="grid-square"
                  style={{
                    backgroundImage: `url(${philosophy})`,
                    backgroundSize: "cover",
                  }}
                >
                  Philosophy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
