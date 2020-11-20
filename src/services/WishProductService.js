import axios from "axios";
import ConstantList from "../config";

export const getWishProductService = (username) => {
  return axios
    .get(`${ConstantList.API_ENDPOINT}/api/wish-product`, {
      username: username,
    })
    .then((res) => {
      return res.data;
    });
};

export const addProductToWishProductService = (username, idProduct) => {
  return axios
    .post(`${ConstantList.API_ENDPOINT}/api/wish-product`, {
      username: username,
      idProduct: idProduct,
    })
    .then((res) => {
      return res;
    });
};

export const deleteProductInWishProductService = (username, idProduct) => {
  return axios
    .delete(`${ConstantList.API_ENDPOINT}/api/wish-product`, {
      username: username,
      idProduct: idProduct,
    })
    .then((res) => {
      return res;
    });
};
