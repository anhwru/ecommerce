import { WISH_PRODUCT_GET_PRODUCT } from "../actions/WishProductAction";

const initialState = {
  listProduct: [
    {
      id: 1,
      name: "CBR 250RR SP 2021",
      image:
        "https://xevathitruong.vn/public_storage/images/2019/04/05/honda-cbr250-2019/honda-cbr250rr-2019-xevathitruong-cover.png",
      price: 10000,
      status: 1,
    },
    {
      id: 2,
      name: "xxxxxxxxxxxxxx",
      image: "https://product.hstatic.net/1000170043/product/120a44140.png",
      price: 20000,
      status: 0,
    },
  ],
  // listProduct: null,
};

const WishProduct = function (state = initialState, action) {
  switch (action.type) {
    case WISH_PRODUCT_GET_PRODUCT: {
      return {
        ...state,
        listProduct: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default WishProduct;
