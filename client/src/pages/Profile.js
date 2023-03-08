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
import axios from "axios";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [edit, setEdit] = useState(false);
   const [count, setCount] = useState(0);
   const [cookies, setCookie] = useCookies(["user"]);

   const user = useSelector((state) => state.user);
   console.log(user);

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
            setCookie("fullName", user.user.name, { path: "/" });
            setCookie("email", user.user.email, { path: "/" });
            setCookie("mobile", user.user.userAddress.mobile, {
              path: "/",
            });
            setCookie("address", user.user.userAddress.addressLine1, {
              path: "/",
            });
            setCookie("city", user.user.userAddress.city, {
              path: "/",
            });
         }
       } catch (err) {
         navigate("/login");
       }
     };
     validate();
   }, []);

   useEffect(() => {
     if (Object.keys(user.user).length === 0 && count > 0) {
       navigate("/login");
     }
     setCount(1);
   }, [user]);

   useEffect(() => {
    if (Object.keys(cookies).length > 4 && !(Object.values(cookies).includes(undefined))) {
      setFullName(cookies.fullName);
      setEmail(cookies.email);
      setMobile(cookies.mobile);
      setAddress(cookies.address);
      setCity(cookies.city);
    } else {
       if (count === 1) {
        setFullName(user.user.name);
        setEmail(user.user.email);
        setMobile(user.user.userAddress.mobile);
        setAddress(user.user.userAddress.addressLine1);
        setCity(user.user.userAddress.city);

        setCookie("fullName", fullName, { path: "/" });
        setCookie("email", email, { path: "/" });
        setCookie("mobile", mobile, {
          path: "/",
        });
        setCookie("address", address, {
          path: "/",
        });
        setCookie("city", city, {
          path: "/",
        });
       }
      }
   }, [cookies]);

  const handleEdit = async (evt) => {
    evt.preventDefault();
    await dispatch(
      editUser([
        { fullName, email },
        { mobile, address, city },
      ])
    );
    setCookie("fullName", fullName, { path: "/profile" });
    setCookie("email", email, { path: "/profile" });
    setCookie("mobile", mobile, {
      path: "/profile",
    });
    setCookie("address", address, {
      path: "/profile",
    });
    setCookie("city", city, {
      path: "/profile",
    });

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
                    src={`https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1.webp`}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p className="text-muted mb-1"></p>
                  <p className="mb-4">{fullName}</p>
                  <p className="text-muted mb-4">
                    {city}
                  </p>
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
                            name="fullName"
                            label={fullName}
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        ) : (
                          <MDBCardText className="text-muted">
                            {cookies.fullName}
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
                            {cookies.email}
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
