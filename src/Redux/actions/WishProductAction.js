import {
    getWishProductService,
    addProductToWishProductService,
    deleteProductInWishProductService,
} from "../../services/WishProductService";

export const WISH_PRODUCT_GET_PRODUCT = "WISH_PRODUCT_GET_PRODUCT";

export function getWishProduct(username) {
    return (dispatch) => {
        getWishProductService(username).then((data) => {
            dispatch({type: WISH_PRODUCT_GET_PRODUCT, data: data});
        });
    };
}

export function addProductToWishProduct(username, idProduct) {
    return (dispatch) => {
        return new Promise(function (resolve, reject) {
            addProductToWishProductService(username, idProduct)
                .then((data) => {
                    getWishProductService(username)
                        .then((data) => {
                            dispatch({type: WISH_PRODUCT_GET_PRODUCT, data: data});
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

export function deleteProductInWishProduct(username, idProduct) {
    return (dispatch) => {
        return new Promise(function (resolve, reject) {
            deleteProductInWishProductService(username, idProduct)
                .then((data) => {
                    getWishProductService(username)
                        .then((data) => {
                            dispatch({type: WISH_PRODUCT_GET_PRODUCT, data: data});
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
