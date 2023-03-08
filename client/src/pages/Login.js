import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { logIn, signUp } from "../store/slices/userSlice";
import { checkForCookie } from "./components/addToCart";

export default function Login() {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleLogin = async (evt) => {
    evt.preventDefault();
    if (checkForCookie()) {
      const vals = checkForCookie();
      dispatch(logIn({ vals: vals, info: { username, password } }));
    } else {
      const vals = [];
      dispatch(logIn({ vals: vals, info: { username, password } }));
    }
    setUsername("");
    setPassword("");
    navigate("/profile");
  };

  const handleSignUp = async (evt) => {
    evt.preventDefault();

    if (checkForCookie()) {
      const vals = checkForCookie();
      dispatch(
        signUp({ vals: vals, info: { username, password, name, email } })
      );
    } else {
      const vals = [];
      dispatch(
        signUp({ vals: vals, info: { username, password, name, email } })
      );
    }
    setUsername("");
    setPassword("");
    setName("");
    setEmail("");
    navigate("/profile");
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <form id="login" onSubmit={handleLogin}>
            <MDBInput
              wrapperClass="mb-4"
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <MDBBtn className="mb-4 w-100" type="submit">
              Sign in
            </MDBBtn>
          </form>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          <form id="signup" onSubmit={handleSignUp}>
            <MDBInput
              wrapperClass="mb-4"
              label="Name"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Username"
              value={username}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <MDBBtn className="mb-4 w-100" type="submit">
              Sign up
            </MDBBtn>
          </form>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}
