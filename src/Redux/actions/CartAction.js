import {
    getCartService,
    addProductToCartService,
    deleteProductInCartService,
    updateProductInCartService,
} from "../../services/CartService";

export const CART_GET_PRODUCT = "CART_GET_PRODUCT";

export function getCart(username) {
    return (dispatch) => {
        getCartService(username).then((data) => {
            dispatch({type: CART_GET_PRODUCT, data: data});
        });
    };
}

export function addProductToCart(username, idProduct) {
    return (dispatch) => {
        return new Promise(function (resolve, reject) {
            addProductToCartService(username, idProduct)
                .then((data) => {
                    getCartService(username)
                        .then((data) => {
                            dispatch({type: CART_GET_PRODUCT, data: data});
                            resolve(1);
                        })
                        .catch(() => {
                            reject(1);
                        });
                })
                .catch(() => {
                    reject(1);
                });
        });
    };
}

export function deleteProductInCart(username, idProduct) {
    return (dispatch) => {
        return new Promise(function (resolve, reject) {
            deleteProductInCartService(username, idProduct)
                .then((data) => {
                    getCartService(username)
                        .then((data) => {
                            dispatch({type: CART_GET_PRODUCT, data: data});
                            resolve(1);
                        })
                        .catch(() => {
                            reject(1);
                        });
                })
                .catch(() => {
                    reject(1);
                });
        });
    };
}

export function updateProductInCart(username, idProduct, num) {
    return (dispatch) => {
        return new Promise(function (resolve, reject) {
            updateProductInCartService(username, idProduct, num)
                .then((data) => {
                    getCartService(username)
                        .then((data) => {
                            dispatch({type: CART_GET_PRODUCT, data: data});
                            resolve(1);
                        })
                        .catch(() => {
                            reject(1);
                        });
                })
                .catch(() => {
                    reject(1);
                });
        });
    };
}
