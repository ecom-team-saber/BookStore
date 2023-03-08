import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, fetchOrders, editUser } from "../store/slices/userSlice";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [edit, setEdit] = useState(0);

  const user = useSelector((state) => state.user);


  useEffect(() => {
    const validate = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:1347/api/users/profile",
          {
            withCredentials: true,
          }
        );
        if (data.name) {
          dispatch(fetchUser());
          dispatch(fetchOrders());
        }
      } catch (err) {
        navigate("/login");
      }
    };
    validate();
  }, []);


  useEffect(() => {
    if (user.user.userAddress) {
      if (!Object.values(user.user.userAddress).includes('undefined')) {
        setFullName(user.user.name);
        setEmail(user.user.email);
        setMobile(user.user.userAddress.mobile);
        setAddress(user.user.userAddress.addressLine1);
        setCity(user.user.userAddress.city);
      }
    }
  }, [user.user]);

  const handleEdit = async (evt) => {
    evt.preventDefault();
    setEdit(0);
    dispatch(
      editUser([
        { fullName, email },
        { mobile, address, city },
      ])
    );
  };

  if (user.status !== "loading") {
    return (
      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href="/">Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="/user">User</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={`https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1.webp`}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p className="text-muted mb-1"></p>
                  <p className="mb-4">{fullName}</p>
                  <p className="text-muted mb-4">{city}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn
                      onClick={() => (edit ? setEdit(0) : setEdit(1))}
                    >
                      Edit
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="twitter fa-lg"
                        style={{ color: "#55acee" }}
                      />
                      <MDBCardText>@mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="instagram fa-lg"
                        style={{ color: "#ac2bac" }}
                      />
                      <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="facebook fa-lg"
                        style={{ color: "#3b5998" }}
                      />
                      <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <form id="editUser" onSubmit={handleEdit}>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        {edit ? (
                          <MDBInput
                            type="text"
                            name="fullName"
                            label={fullName}
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        ) : (
                          <MDBCardText className="text-muted">
                            {fullName}
                          </MDBCardText>
                        )}
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        {edit ? (
                          <MDBInput
                            type="email"
                            name="email"
                            label={email}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        ) : (
                          <MDBCardText className="text-muted">
                            {email}
                          </MDBCardText>
                        )}
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Mobile</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        {edit ? (
                          <MDBInput
                            type="text"
                            name="mobile"
                            label={mobile}
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                          />
                        ) : (
                          <MDBCardText className="text-muted">
                            {mobile}
                          </MDBCardText>
                        )}
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Address</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        {edit ? (
                          <MDBInput
                            type="text"
                            name="address"
                            label={address}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        ) : (
                          <MDBCardText className="text-muted">
                            {address}
                          </MDBCardText>
                        )}
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>City</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        {edit ? (
                          <MDBInput
                            type="text"
                            name="city"
                            label={city}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        ) : (
                          <MDBCardText className="text-muted">
                            {city}
                          </MDBCardText>
                        )}
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                  {edit ? (
                    <MDBBtn className="mb-0 w-100" type="submit">
                      Submit changes
                    </MDBBtn>
                  ) : (
                    <></>
                  )}
                </form>
              </MDBCard>

              <MDBRow>
                {user.orders.map((order, idx) => {
                  return (
                    <MDBCol md="6" className="mb-4" key={idx}>
                      <MDBCard className="mb-5 mb-md-0">
                        <MDBCardBody>
                          <MDBCardText className="mb-4">
                            Order from {order.createdAt.slice(0, 10)}
                          </MDBCardText>
                          {order.orderItems.map((book, idx) => {
                            return (
                              <div key={idx}>
                                <MDBCardText
                                  className="mb-1"
                                  style={{ fontSize: ".90rem" }}
                                >
                                  {book.Product.title}{" "}
                                </MDBCardText>
                                <MDBCardText
                                  className="mb-1 text-muted"
                                  style={{ fontSize: ".77rem" }}
                                >
                                  by: {book.Product.author}
                                </MDBCardText>
                              </div>
                            );
                          })}
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  );
                })}
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}
