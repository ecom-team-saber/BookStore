import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
} from "mdb-react-ui-kit";

const user = {
  username: "jawty0",
  password: "3EzCMPJGog",
  name: "Jeanna Awty",
  email: "jawty0@sina.com.cn",
  userType: "member",
};

const userAddress = {
  addressLine1: "35433 Oak Valley Hill",
  city: "Chicago",
  postalCode: "60674",
  country: "United States",
  mobile: "312-169-2841",
  userId: 2,
};

const books = [
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    productImg: "images/things-fall-apart.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 25.23,
    inventory: 18,
  },
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    productImg: "images/things-fall-apart.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 25.23,
    inventory: 18,
  },
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    productImg: "images/things-fall-apart.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 25.23,
    inventory: 18,
  },
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    productImg: "images/things-fall-apart.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 25.23,
    inventory: 18,
  },
];

const books2 = [
  {
    title: "Fairy tales",
    author: "Hans Christian Andersen",
    productImg: "images/fairy-tales.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 29.51,
    inventory: 22,
  },
  {
    title: "Fairy tales",
    author: "Hans Christian Andersen",
    productImg: "images/fairy-tales.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 29.51,
    inventory: 22,
  },
  {
    title: "Fairy tales",
    author: "Hans Christian Andersen",
    productImg: "images/fairy-tales.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 29.51,
    inventory: 22,
  },
  {
    title: "Fairy tales",
    author: "Hans Christian Andersen",
    productImg: "images/fairy-tales.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 29.51,
    inventory: 22,
  },
];

const orders = [books, books2];

export default function ProfilePage() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    //Check token for log in
    if (!loggedIn) {
      navigate("/login");
    }
  }, []);
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
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1"></p>
                <p className="mb-4">{user.name}</p>
                <p className="text-muted mb-4">{userAddress.city}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Edit</MDBBtn>
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
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user.name}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user.email}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userAddress.mobile}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userAddress.addressLine1}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>City</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userAddress.city}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              {orders.map((order) => {
                return (
                  <MDBCol md="6">
                    <MDBCard className="mb-4 mb-md-0">
                      <MDBCardBody>
                        <MDBCardText className="mb-4">
                          Order from 3-2-2023
                        </MDBCardText>
                        {order.map((book) => {
                          return (
                            <>
                              <MDBCardText
                                className="mb-1"
                                style={{ fontSize: ".90rem" }}
                              >
                                {book.title}{" "}
                              </MDBCardText>
                              <MDBCardText
                                className="mb-1 text-muted"
                                style={{ fontSize: ".77rem" }}
                              >
                                by: {book.author}
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
