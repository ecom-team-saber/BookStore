/** @format */

import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: "http://localhost:1347",
  withCredentials: true,
});

export const fetchProducts = createAsyncThunk(
  "fetch/products",
  async (category) => {
    try {
      if (!category) {
        const { data } = await instance.get("/api/products");
        return data;
      } else {
        const { data } = await instance.get("/api/products", {
          params: {
            category: category,
          },
        });
        return data;
      }
    } catch (e) {
      console.error(e);
    }
  }
);
export const fetchSingleProduct = createAsyncThunk(
  "fetch/singleProduct",
  async (id) => {
    try {
      const { data } = await instance.get(`/api/products/${id}`);
      return data;
    } catch (e) {
      console.error(e);
    }
  }
);
export const searchProducts = createAsyncThunk(
  "fetch/searchProducts",
  async (name) => {
    try {
      const { data } = await instance.get("/api/products/name", {
        params: {
          name: name,
        },
      });
      return data;
    } catch (e) {
      console.error(e);
    }
  }
);
export const featuredProducts = createAsyncThunk("fetch/featured", async () => {
  try {
    const { data } = await instance.get("/api/products/featured");
    return data;
  } catch (e) {
    console.error(e);
  }
});
export const addProduct = createAsyncThunk(
  "/add/product",
  async ({
    title,
    author,
    price,
    description,
    category,
    inventory,
    productImg,
  }) => {
    try {
      const { data } = await instance.post("/api/products", {
        title,
        author,
        price,
        inventory,
        description,
        category,
        productImg,
      });
      return data;
    } catch (e) {
      console.error(e);
    }
  }
);
export const deleteProduct = createAsyncThunk("delete/product", async (id) => {
  try {
    await instance.delete(`/api/products/${id}`);
    const { data } = await instance.get("/api/products");
    return data;
  } catch (e) {
    console.error(e);
  }
});
export const updateInventory = createAsyncThunk(
  "update/product",
  async ({ id, inventory }) => {
    try {
      const { data } = await instance.put(`/api/products/${id}`, { inventory });
      return data;
    } catch (e) {
      console.error(e);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    status: null,
    products: [],
    singleProduct: {},
    featured: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.status = null;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      });
    builder
      .addCase(fetchSingleProduct.fulfilled, (state, { payload }) => {
        state.singleProduct = payload;
        state.status = null;
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.status = "loading";
      });
    builder
      .addCase(featuredProducts.fulfilled, (state, { payload }) => {
        state.featured = payload;
        state.status = null;
      })
      .addCase(featuredProducts.pending, (state) => {
        state.status = "loading";
      });
    builder
      .addCase(searchProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.status = null;
      })
      .addCase(searchProducts.pending, (state) => {
        state.status = "loading";
      });
    builder
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.products.push(payload);
        state.status = null;
      })
      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
      });
    builder
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.status = null;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading";
      });
    builder
      .addCase(updateInventory.fulfilled, (state, { payload }) => {
        const productIndex = state.products.findIndex(
          (product) => product.id === payload.id
        );
        state.products[productIndex].inventory = payload.inventory;
        state.status = null;
      })
      .addCase(updateInventory.pending, (state) => {
        state.status = "loading";
      });
  },
});

export default productsSlice.reducer;
