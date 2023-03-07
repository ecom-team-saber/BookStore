import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

import { fetchSingleProduct } from "../store/slices/productsSlice";

function ProductView() {
  const [img, setImg] = useState(null);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  const singleProduct = product.singleProduct;
  const { productId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch, productId]);
  useEffect(() => {
    if (product.singleProduct) {
      setImg(singleProduct.productImg);
    }
  }, [singleProduct]);
  console.log(img);

  const addToCart = (e) => {
    axios.post("http://localhost:1347/api/cart", {
      productId: e.id,
      quantity: 1,
    });
  };
  if (img) {
    return (
      <MDBContainer fluid className="my-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="8" lg="6" xl="4">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-overlay"
              >
                <MDBCardImage
                  src={require(`../assets/${img}`)}
                  fluid
                  className="w-100"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                />
                <a href="#!">
                  <div className="mask"></div>
                </a>
              </MDBRipple>
              <MDBCardBody className="pb-0">
                <div className="d-flex justify-content-between">
                  <div>
                    <p>
                      <a href="#!" className="text-dark">
                        {singleProduct.title}
                      </a>
                    </p>
                    <p className="small text-muted">{singleProduct.author}</p>
                  </div>
                  <div>
                    <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                    <p className="small text-muted">Rated 4.0/5</p>
                  </div>
                </div>
              </MDBCardBody>
              <hr className="my-0" />
              <MDBCardBody className="pb-0">
                <div className="d-flex justify-content-between">
                  <p>
                    <a href="#!" className="text-dark">
                      ${singleProduct.price}
                    </a>
                  </p>
                  <p className="text-dark">#### 8787</p>
                </div>
                <p className="small text-muted">VISA Platinum</p>
              </MDBCardBody>
              <hr className="my-0" />
              <MDBCardBody className="pb-0">
                <div className="d-flex justify-content-between">
                  <p>
                    <a href="#!" className="text-dark">
                      Description
                    </a>
                  </p>
                </div>
                <p className="small text-muted">{singleProduct.description}</p>
              </MDBCardBody>
              <hr className="my-0" />
              <MDBCardBody className="pb-0">
                <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                  <a href="#!" className="text-dark fw-bold">
                    Cancel
                  </a>
                  <MDBBtn
                    color="primary"
                    onClick={() => addToCart(singleProduct)}
                  >
                    Buy now
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ProductView;
