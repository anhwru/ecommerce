import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import CartReducer from "./CartReducer";
import FavoriteProductReducer from "./FavoriteProductReducer";

const RootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  cart: CartReducer,
  favoriteProduct: FavoriteProductReducer,
});

export default RootReducer;
