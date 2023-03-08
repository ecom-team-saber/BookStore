/** @format */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  fetchProducts,
  addProduct,
  deleteProduct,
  updateInventory,
  fetchSingleProduct,
} from "../store/slices/productsSlice";

import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBFile,
  MDBTableHead,
} from "mdb-react-ui-kit";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [inventory, setInventory] = useState(product.inventory);

  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
  };

  const handleUpdate = () => {
    dispatch(updateInventory({ id: product.id, inventory }));
  };

  const handleInventoryChange = (e) => {
    setInventory(e.target.value);
  };

  return (
    <tr>
      <th scope="row">
        <div className="d-flex align-items-center">
          <img
            src={require(`../assets/${product.productImg}`)}
            fluid
            className="rounded-3"
            style={{ width: "30px" }}
            alt="Book"
          />
          <div className="flex-column ms-4">
            <p class="mb-2" style={{ fontSize: "12px" }}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </p>
            <p className="mb-0" style={{ fontSize: "12px" }}>
              {product.author}
            </p>
          </div>
        </div>
      </th>
      <td className="align-middle">
        <div class="d-flex flex-row align-items-center">
          <MDBInput
            min={0}
            size="sm"
            style={{ width: "50px" }}
            defaultValue={product.inventory}
            onChange={(e) => {
              setInventory(e.target.value);
            }}
          />
          <MDBBtn
            className="px-2 d-flex justify-content-center align-items-center"
            color="link"
            onClick={handleUpdate}
          >
            <p className="m-0">Update product</p>
          </MDBBtn>
          <MDBBtn
            className="px-2 d-flex justify-content-center align-items-center"
            color="link"
            onClick={handleDelete}
          >
            <p className="m-0">Delete product</p>
          </MDBBtn>
        </div>
      </td>
      <td className="align-middle">
        <p className="mb-0" style={{ fontWeight: "500" }}>
          ${product.price}
        </p>
      </td>
    </tr>
  );
};

export default function Admin() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.products);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [inventory, setInventory] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [productImg, setProductImg] = useState("images/memoirs-of-hadrian.jpg");

  useEffect(() => {
    const checkForAdmin = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:1347/api/users/profile",
          { withCredentials: true }
        );
        if (data.name && data.userType === "admin") {
          dispatch(fetchProducts());
        } else {
          navigate("/");
        }
      } catch {
        navigate("/");
      }
    };
    checkForAdmin();
  }, []);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await dispatch(
        addProduct({
          title,
          author,
          price,
          inventory,
          description,
          category,
          productImg,
        })
      );
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };

  if (!allProducts) return null;

  return (
    <div>
      <section className="h-100 h-custom">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBTable responsive>
                <MDBTableHead>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <MDBIcon
                      fas
                      icon="lock-open"
                      style={{ fontSize: "2rem" }}
                    />
                    <h1 className="text-start display-6">Admin</h1>
                  </div>
                  <tr>
                    <th scope="col" className="h5">
                      Products
                    </th>
                    <th scope="col">Inventory</th>
                    <th scope="col">Price</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {allProducts.map((product, idx) => (
                    <Product product={product} key={idx} />
                  ))}
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <form onSubmit={handleSubmit}>
        <MDBContainer className="py-5 h-100">
          <h6 className="text-center display-6">Create product</h6>
          <MDBInput
            wrapperClass="mb-4"
            id="form6Example3"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            id="form6Example4"
            label="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            textarea
            id="form6Example7"
            rows={4}
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            type="tel"
            id="form6Example6"
            label="Inventory"
            value={inventory}
            onChange={(e) => setInventory(e.target.value)}
          />
          <MDBRow className="mb-4">
            <select
              className="form-select"
              aria-label="Default select example"
              multiple
              style={{ width: "100%" }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="1">Fiction</option>
              <option value="2">Nonfiction</option>
              <option value="3">History</option>
              <option value="4">Sci-fi</option>
              <option value="5">Horror</option>
              <option value="6">Manga</option>
              <option value="7">Philosophy</option>
            </select>
          </MDBRow>

          <MDBInput
            wrapperClass="mb-4"
            textarea
            id="form6Example7"
            rows={4}
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <MDBBtn className="mb-4" type="submit" block>
            CREATE
          </MDBBtn>
        </MDBContainer>
      </form>
    </div>
  );
}
