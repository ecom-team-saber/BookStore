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
import { useCookies } from "react-cookie";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [edit, setEdit] = useState(false);
  const [count, setCount] = useState(0);
  const [cookies, setCookie] = useCookies(["user"]);

  const user = useSelector((state) => state.user);


  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchOrders());
  }, []);

  useEffect(() => {
    if (Object.keys(user.user).length === 0 && count > 0) {
      navigate("/login");
    }
    setCount(1);
  }, [user]);

  useEffect(() => {
    if (Object.keys(cookies).length > 4) {
      setName(cookies.Name);
      setEmail(cookies.email);
      setMobile(cookies.mobile);
      setAddress(cookies.address);
      setCity(cookies.city);
    } else {
      setCookie("Name", user.user.name, { path: "/profile" });
      setCookie("email", user.user.email, { path: "/profile" });
      setCookie("mobile", user.user.userAddress.mobile, { path: "/profile" });
      setCookie("address", user.user.userAddress.addressLine1, { path: "/profile" });
      setCookie("city", user.user.userAddress.city, { path: "/profile" });

      setName(cookies.Name);
      setEmail(cookies.email);
      setMobile(cookies.mobile);
      setAddress(cookies.address);
      setCity(cookies.city);
    }
  }, [cookies]);

  const handleEdit = async (evt) => {
    evt.preventDefault();
    await dispatch(
      editUser([
        { name, email },
        { mobile, address, city },
      ])
    );

    setCookie("Name", name, { path: "/profile" });
    setCookie("email", email, { path: "/profile" });
    setCookie("mobile", mobile, { path: "/profile" });
    setCookie("address", address, { path: "/profile" });
    setCookie("city", city, { path: "/profile" });
    setEdit(false);
  };

  if (Object.keys(user.user).length > 0) {
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
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p className="text-muted mb-1"></p>
                  <p className="mb-4">{cookies.Name}</p>
                  <p className="text-muted mb-4">{cookies.city}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn
                      onClick={() => (edit ? setEdit(false) : setEdit(true))}
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
                            name="name"
                            label={cookies.Name}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        ) : (
                          <MDBCardText className="text-muted">
                            {name}
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
                            label={cookies.email}
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
                            label={cookies.mobile}
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
                            label={cookies.address}
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
                            label={cookies.city}
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
                      Sumbit changes
                    </MDBBtn>
                  ) : (
                    <></>
                  )}
                </form>
              </MDBCard>

              <MDBRow>
                {user.orders.map((order) => {
                  return (
                    <MDBCol md="6" className="mb-4">
                      <MDBCard className="mb-5 mb-md-0">
                        <MDBCardBody>
                          <MDBCardText className="mb-4">
                            Order from {order.createdAt.slice(0, 10)}
                          </MDBCardText>
                          {order.orderItems.map((book) => {
                            return (
                              <>
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
                              </>
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
