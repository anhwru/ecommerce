import {CART_GET_PRODUCT} from "../actions/CartAction";

const initialState = {
    listProduct: [
        {
            id: 1,
            name: "CBR 250RR SP 2021",
            image:
                "https://xevathitruong.vn/public_storage/images/2019/04/05/honda-cbr250-2019/honda-cbr250rr-2019-xevathitruong-cover.png",
            color: "red",
            size: "M",
            price: 10000,
            num: 2,
        },
        {
            id: 2,
            name: "xxxxxxxxxxxxxx",
            image: "https://product.hstatic.net/1000170043/product/120a44140.png",
            color: "black",
            size: "XL",
            price: 20000,
            num: 2,
        },
        {
            id: 3,
            name: "yyyyyyyyyyyy",
            image:
                "https://i0.wp.com/warungasep.net/wp-content/uploads/2020/07/fitur-zx25r.png",
            color: "green",
            size: "M",
            price: 50000,
            num: 4,
        },
    ],
    // listProduct: null,
};

const CartReducer = function (state = initialState, action) {
    switch (action.type) {
        case CART_GET_PRODUCT: {
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

export default CartReducer;
