import gradient from "../assets/gradient.png";

import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
} from "mdb-react-ui-kit";

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
  return (
    <>
      <header
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <div
          id="intro-example"
          className="p-5 text-center bg-image"
          style={{
            backgroundImage: `url(${gradient})`,
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="display-3">Welcome Page</h1>
                <MDBBtn
                  className="m-2"
                  tag="a"
                  outline
                  size="lg"
                  rel="nofollow"
                  target="_blank"
                  href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                >
                  Go Here
                </MDBBtn>
                <MDBBtn
                  className="m-2"
                  tag="a"
                  outline
                  size="lg"
                  target="_blank"
                  href="https://mdbootstrap.com/docs/standard/"
                >
                  Go there
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </header>
      <h6
        style={{
          fontSize: 24,
          margin: 10,
          marginBottom: -10,
          textDecoration: "underline",
        }}
      >
        Featured Products:
      </h6>
      <div className="home-cards">
        {[1, 2, 3, 4].map((e) => (
          <FakeCard />
        ))}
      </div>
      <div>
        <h1 style={{ margin: 20 }} className="text-center">
          Browse Our Categories
        </h1>
        <div className="categories-display">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-3 text-center mb-4">
                <div className="grid-square">Non-Fiction</div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 text-center mb-4">
                <div className="grid-square">Fiction</div>
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
                <div className="grid-square">Philosophy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
