import axios from "axios";
import ConstantList from "../config";

export const getFavoriteProductService = (username) => {
  return axios
    .get(`${ConstantList.API_ENDPOINT}/api/favorite_product`, {
      username: username,
    })
    .then((res) => {
      return res.data;
    });
};
