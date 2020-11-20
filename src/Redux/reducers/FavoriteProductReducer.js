import {
  FAVORITE_PRODUCT_GET_PRODUCT,
  FAVORITE_PRODUCT_ADD_PRODUCT,
  FAVORITE_PRODUCT_DELETE_PRODUCT,
} from "../actions/FavoriteProductAction";

const initialState = {
  listProduct: [],
};

const FavoriteProduct = function (state = initialState, action) {
  switch (action.type) {
    case FAVORITE_PRODUCT_GET_PRODUCT: {
      return {
        ...state,
        listProduct: action.data,
      };
    }
    case FAVORITE_PRODUCT_ADD_PRODUCT: {
      return {
        ...state,
        success: true,
        loading: false,
      };
    }
    case FAVORITE_PRODUCT_DELETE_PRODUCT: {
      return {
        success: false,
        loading: false,
        error: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default FavoriteProduct;
