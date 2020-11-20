import axios from "axios";
import ConstantList from "../config";

export const getCartService = (username) => {
  return axios
    .get(`${ConstantList.API_ENDPOINT}/api/cart`, {
      username: username,
    })
    .then((res) => {
      return res.data;
    });
};

export const addProductToCartService = (username, idProduct) => {
  return axios
    .post(`${ConstantList.API_ENDPOINT}/api/cart`, {
      username: username,
      idProduct: idProduct,
    })
    .then((res) => {
      return res;
    });
};

export const deleteProductInCartService = (username, idProduct) => {
  return axios
    .delete(`${ConstantList.API_ENDPOINT}/api/cart`, {
      username: username,
      idProduct: idProduct,
    })
    .then((res) => {
      return res;
    });
};

export const updateProductInCartService = (username, idProduct, num) => {
  return axios
    .put(`${ConstantList.API_ENDPOINT}/api/cart`, {
      username: username,
      idProduct: idProduct,
      num: num,
    })
    .then((res) => {
      return res;
    });
};
