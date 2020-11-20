import { getFavoriteProductService } from "../../services/FavoriteProductService";

export const FAVORITE_PRODUCT_GET_PRODUCT = "FAVORITE_PRODUCT_GET_PRODUCT";
export const FAVORITE_PRODUCT_ADD_PRODUCT = "FAVORITE_PRODUCT_ADD_PRODUCT";
export const FAVORITE_PRODUCT_DELETE_PRODUCT =
  "FAVORITE_PRODUCT_DELETE_PRODUCT";

export function getFavoriteProduct(username) {
  return (dispatch) => {
    getFavoriteProductService(username).then((data) => {
      dispatch({ type: FAVORITE_PRODUCT_GET_PRODUCT, data: data });
    });
  };
}
