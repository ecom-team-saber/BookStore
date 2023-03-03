import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Twirl as Hamburger } from "hamburger-react";
export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <MDBIcon icon="book-open" fas />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <Hamburger size={20} />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="home">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="products">Products</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <input
                className="mobile-search"
                type="text"
                placeholder="search here..."
              />
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBContainer>
            <input
              type="text"
              className="search-hover"
              placeholder="search here..."
            />
          </MDBContainer>
          <MDBNavbarItem>
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="" role="button">
                <MDBIcon icon="user-alt" fas size="xl" />
              </MDBDropdownToggle>

              <MDBDropdownMenu>
                <MDBDropdownItem>
                  <a className="nav-link" href="/profile">
                    Profile
                  </a>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <a className="nav-link" href="/logout">
                    Log out
                  </a>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
