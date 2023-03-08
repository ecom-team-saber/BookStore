import axios from "axios";

export const addToCart = async (e) => {
  try {
    await axios.post(
      "http://localhost:1347/api/cart",
      { productId: e.id, quantity: 1 },
      {
        withCredentials: true,
      }
    );
  } catch (err) {
    const inventory = e.inventory;
    const cookieArr = document.cookie.split(";");
    const cookies = document.cookie
      .split(";")
      .map((e) => e.trim().split("=")[0]);
    if (cookies.includes("guest-cart")) {
      let cartCookie = "";
      cookieArr.map((e) => {
        if (e.startsWith("guest-cart=")) cartCookie = e;
      });
      cartCookie = JSON.parse(cartCookie.split("=")[1]);
      let check = false;
      cartCookie.map((val) => {
        if (val.productId === e.id) {
          if (val.quantity < inventory) {
            val.quantity = val.quantity + 1;
          }
          check = true;
          return check;
        }
      });
      if (!check) {
        cartCookie.push({ productId: e.id, quantity: 1 });
      }
      const expires = new Date();
      expires.setMonth(expires.getMonth() + 1);
      const json = JSON.stringify(cartCookie);
      document.cookie = `guest-cart=${json};expires=${expires.toUTCString()};path=/`;
    } else {
      const data = [{ productId: e.id, quantity: 1 }];
      const expires = new Date();
      expires.setMonth(expires.getMonth() + 1);
      const json = JSON.stringify(data);
      document.cookie = `guest-cart=${json};expires=${expires.toUTCString()};path=/`;
    }
  }
};

export const checkForCookie = () => {
  const cookieArr = document.cookie.split(";");
  const cookies = document.cookie.split(";").map((e) => e.trim().split("=")[0]);
  if (cookies.includes("guest-cart")) {
    let cartCookie = "";
    cookieArr.map((e) => {
      if (e.startsWith("guest-cart=")) cartCookie = e;
    });
    cartCookie = JSON.parse(cartCookie.split("=")[1]);
    return cartCookie;
  }
};
