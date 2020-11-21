import {combineReducers} from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import CartReducer from "./CartReducer";
import WishProductReducer from "./WishProductReducer";

const RootReducer = combineReducers({
    login: LoginReducer,
    user: UserReducer,
    cart: CartReducer,
    wishProduct: WishProductReducer,
});

export default RootReducer;
