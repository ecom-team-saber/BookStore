/** @format */

import React from "react";
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

const FakeProduct = () => {
  return (
    <tr>
      <th scope="row">
        <div className="d-flex align-items-center">
          <img
            src="https://i.imgur.com/2DsA49b.webp"
            fluid
            className="rounded-3"
            style={{ width: "30px" }}
            alt="Book"
          />
          <div className="flex-column ms-4">
            <p class="mb-2" style={{ fontSize: "12px" }}>
              Thinking, Fast and Slow
            </p>
            <p className="mb-0" style={{ fontSize: "12px" }}>
              Daniel Kahneman
            </p>
          </div>
        </div>
      </th>
      <td className="align-middle">
        <div class="d-flex flex-row align-items-center">
          <MDBBtn className="px-2" color="link">
            <MDBIcon fas icon="minus" />
          </MDBBtn>
          <MDBInput
            min={0}
            type="number"
            size="sm"
            style={{ width: "50px" }}
            defaultValue={2}
          />
          <MDBBtn className="px-2" color="link">
            <MDBIcon fas icon="plus" />
          </MDBBtn>
          <MDBBtn
            className="px-2 d-flex justify-content-center align-items-center"
            color="link"
          >
            <p className="m-0">Delete product</p>
          </MDBBtn>
        </div>
      </td>
      <td className="align-middle">
        <p className="mb-0" style={{ fontWeight: "500" }}>
          $9.99
        </p>
      </td>
    </tr>
  );
};

export default function Admin() {
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
                  {[1, 2, 3, 4].map((e) => (
                    <FakeProduct />
                  ))}
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <form>
        <MDBContainer className="py-5 h-100">
          <h6 className="text-center display-6">Create product</h6>

          <MDBInput wrapperClass="mb-4" id="form6Example3" label="Title" />
          <MDBInput wrapperClass="mb-4" id="form6Example4" label="Author" />

          <MDBInput
            wrapperClass="mb-4"
            type="tel"
            id="form6Example6"
            label="Quantity"
          />

          <MDBInput
            wrapperClass="mb-4"
            textarea
            id="form6Example7"
            rows={4}
            label="Price"
          />
          <MDBInput
            wrapperClass="mb-4"
            id="form6Example5"
            label="Description"
          />

          <div>
            <MDBFile label="Upload Cover" id="customFile" />
          </div>

          <MDBBtn className="mb-4" type="submit" block>
            CREATE
          </MDBBtn>
        </MDBContainer>
      </form>
    </div>
  );
}
