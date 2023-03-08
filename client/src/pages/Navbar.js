import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
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
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
export default function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showBasic, setShowBasic] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const productPages = [
    "All",
    "Fiction",
    "Non-Fiction",
    "History",
    "Sci-Fi",
    "Horror",
    "Manga",
    "Philosophy",
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?name=${search}`);
    setSearch("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
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
              <MDBNavbarLink
                style={{ fontWeight: 500 }}
                active
                aria-current="page"
                href="/"
              >
                HOME
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown
                  style={{
                    margin: 0,
                    backgroundColor: "white",
                    border: "none",
                    boxShadow: "none",
                  }}
                  group
                >
                  <MDBDropdownToggle
                    className="dropdown-nav btn btn-light"
                    size="sm"
                  >
                    Products
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    {productPages.map((e, idx) => {
                      return (
                        <li key={idx}>
                          <Link
                            className="dropdown-item"
                            to={`/products?category=${e.toLowerCase()}`}
                          >
                            {e}
                          </Link>
                        </li>
                      );
                    })}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <form onSubmit={handleSubmit}>
                <input
                  className="mobile-search"
                  type="text"
                  placeholder="search here..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </form>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBContainer>
            <form onSubmit={handleSubmit}>
              <input
                className="search-hover"
                type="text"
                placeholder="search here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </form>
          </MDBContainer>
          <MDBNavbarItem>
            <a href="/cart">
              <MDBIcon
                style={{ marginRight: 15, color: "#3b70ca" }}
                fas
                icon="shopping-cart"
                size="xl"
              />
            </a>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="" role="button">
                <MDBIcon
                  style={{ color: "#3b70ca" }}
                  icon="user-alt"
                  fas
                  size="xl"
                />
              </MDBDropdownToggle>

              <MDBDropdownMenu>
                <MDBDropdownItem>
                  <a className="nav-link" href="/profile">
                    Profile
                  </a>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <a
                    className="nav-link"
                    onClick={() => {
                      document.cookie =
                        "token" +
                        "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
                      removeCookie("fullName");
                      removeCookie("email");
                      removeCookie("mobile");
                      removeCookie("address");
                      removeCookie("city");
                    }}
                    href="/"
                  >
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
