/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import {
  fetchCart,
  fetchUser,
  editQuantity,
  checkoutFunction,
} from "../store/slices/userSlice";

const FakeProduct = ({ item, price, setPrice }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);
  const product = item.Product;
  const max = product.inventory;

  useEffect(() => {
    const updateData = { quantity: quantity, id: item.id };
    dispatch(editQuantity(updateData));
  }, [quantity]);
  return (
    <tr>
      <th scope="row">
        <div className="d-flex align-items-center">
          <img
            src={require(`../assets/${product.productImg}`)}
            className="rounded-3"
            style={{ width: "120px" }}
            alt="Book"
          />
          <div className="flex-column ms-4">
            <p className="mb-2">{product.title}</p>
            <p className="mb-0">{product.author}</p>
          </div>
        </div>
      </th>
      <td className="align-middle">
        <p className="mb-0" style={{ fontWeight: "500" }}>
          Digital
        </p>
      </td>
      <td className="align-middle">
        <div className="d-flex flex-row align-items-center">
          <MDBBtn
            onClick={() => {
              if (quantity - 1 > 0) {
                setPrice(price - parseFloat(product.price));
                setQuantity(quantity - 1);
              }
            }}
            className="px-2"
            color="link"
          >
            <MDBIcon fas icon="minus" />
          </MDBBtn>

          <div className="text-center" style={{ width: 20 }}>
            {quantity}
          </div>

          <MDBBtn
            onClick={() => {
              if (quantity + 1 <= max) {
                setPrice(price + parseFloat(product.price));
                setQuantity(quantity + 1);
              }
            }}
            className="px-2"
            color="link"
          >
            <MDBIcon fas icon="plus" />
          </MDBBtn>

          <MDBBtn className="px-2" color="link">
            <MDBIcon fas icon="trash" />
          </MDBBtn>
        </div>
      </td>
      <td className="align-middle">
        <p className="mb-0" style={{ fontWeight: "500" }}>
          ${product.price} ea.
        </p>
      </td>
    </tr>
  );
};

export default function Cart() {
  const [statusMessage, setStatusMessage] = useState();
  const [cart, setCart] = useState();
  const [price, setPrice] = useState(0);
  const [checkUser, setCheckUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (checkUser && Object.keys(user.user).length > 0) {
      if (user.user.orders[0].orderItems.length === 0) {
        setStatusMessage("Your cart is empty...");
      } else {
        setCart(user.user.orders[0].orderItems);
        let val = 0;
        user.user.orders[0].orderItems.map((e) => {
          val += parseFloat(e.Product.price) * e.quantity;
          return;
        });
        setPrice(val);
        if (user.user.userAddress) {
          setAddress(user.user.userAddress.addressLine1);
          setPostalCode(user.user.userAddress.postalCode);
          setCountry(user.user.userAddress.country);
          setCity(user.user.userAddress.city);
          setMobile(user.user.userAddress.mobile);
        }
      }
    } else if (checkUser && Object.keys(user.user).length === 0) {
      const cookies = document.cookie.split(";");
      let cookieObj = [];
      cookies.forEach((e) => {
        const [name, val] = e.trim().split("=");
        cookieObj.push(name);
      });
      if (!cookieObj.includes("guest-cart")) {
        setStatusMessage("Your Cart is empty...");
      }
    }
    setCheckUser(1);
  }, [user.user]);

  const handleCheckout = (e) => {
    e.preventDefault();
    const id = cart[0].orderId;
    dispatch(
      checkoutFunction([
        {
          userId: user.user.id,
          addressLine1: address,
          city: city,
          country: country,
          mobile: mobile,
          postalCode: postalCode,
        },
        id,
      ])
    );
    setAddress("");
    setCity("");
    setCountry("");
    setPostalCode("");
  };

  if (statusMessage) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
          paddingTop: "30vh",
          alignItems: "center",
        }}
      >
        <h1 className="display-4 text-center">{statusMessage}</h1>
        <button
          className="btn btn-dark"
          onClick={() => {
            navigate("/products");
          }}
        >
          View Products
        </button>
      </div>
    );
  } else if (cart) {
    return (
      <section className="h-100 h-custom">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBTable responsive>
                <MDBTableHead>
                  <tr>
                    <th scope="col" className="h5">
                      Shopping Bag
                    </th>
                    <th scope="col">Format</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {cart.map((e) => {
                    return (
                      <FakeProduct
                        price={price}
                        setPrice={setPrice}
                        key={e.id}
                        item={e}
                      />
                    );
                  })}
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
            <MDBCard
              className="shadow-2-strong mb-5 mb-lg-0"
              style={{ borderRadius: "16px" }}
            >
              <form onSubmit={handleCheckout}>
                <MDBCardBody className="p-4">
                  <MDBRow>
                    <MDBCol md="6" xl="3" lg="4">
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Address Line 1"
                        size="md"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        size="md"
                      />
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        size="md"
                      />
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Postal Code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        size="md"
                      />
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Phone Number"
                        size="md"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol md="6" lg="4" xl="6">
                      <MDBRow>
                        <MDBCol size="12" xl="6">
                          <MDBInput
                            className="mb-4 mb-xl-5"
                            label="Name on card"
                            placeholder="John Smiths"
                            size="lg"
                          />
                          <MDBInput
                            className="mb-4 mb-xl-5"
                            label="Expiration"
                            placeholder="MM/YY"
                            size="lg"
                            maxLength={7}
                            minLength={7}
                          />
                        </MDBCol>

                        <MDBCol size="12" xl="6">
                          <MDBInput
                            className="mb-4 mb-xl-5"
                            label="Card Number"
                            placeholder="1111 2222 3333 4444"
                            size="lg"
                            minLength={19}
                            maxLength={19}
                          />
                          <MDBInput
                            className="mb-4 mb-xl-5"
                            label="Cvv"
                            placeholder="&#9679;&#9679;&#9679;"
                            size="lg"
                            minLength={3}
                            maxLength={3}
                            type="password"
                          />
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol lg="4" xl="3">
                      <div
                        className="d-flex justify-content-between"
                        style={{ fontWeight: "500" }}
                      >
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2">${price.toFixed(2)}</p>
                      </div>

                      <div
                        className="d-flex justify-content-between"
                        style={{ fontWeight: "500" }}
                      >
                        <p className="mb-0">Shipping</p>
                        <p className="mb-0">$0.00</p>
                      </div>

                      <hr className="my-4" />

                      <div
                        className="d-flex justify-content-between mb-4"
                        style={{ fontWeight: "500" }}
                      >
                        <p className="mb-2">Total (tax included)</p>
                        <p className="mb-2">${price.toFixed(2)}</p>
                      </div>

                      <MDBBtn type="submit" block size="lg">
                        <div className="d-flex justify-content-between">
                          <span>Checkout</span>
                          <span>${price.toFixed(2)}</span>
                        </div>
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </form>
            </MDBCard>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}
