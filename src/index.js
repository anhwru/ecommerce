/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

// styles
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.0.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// presentation pages
import Index from "views/Index.jsx";
import Presentation from "views/Presentation.jsx";
import Sections from "views/Sections.jsx";
import "views/style.scss"
// example pages
import AboutUs from "views/examples/AboutUs.jsx";
import BlogPost from "views/examples/BlogPost.jsx";
import BlogPosts from "views/examples/BlogPosts.jsx";
import ContactUs from "views/examples/ContactUs.jsx";
import LandingPage from "views/examples/LandingPage.jsx";
import Pricing from "views/examples/Pricing.jsx";
import Ecommerce from "views/examples/Ecommerce.jsx";
import ProductPage from "views/examples/ProductPage.jsx";
import ProfilePage from "views/examples/ProfilePage.jsx";
import Error404 from "views/examples/Error404.jsx";
import Error500 from "views/examples/Error500.jsx";
import AccountSettings from "views/examples/AccountSettings.jsx";
import LoginPage from "views/examples/LoginPage.jsx";
import RegisterPage from "views/examples/RegisterPage.jsx";
import ResetPage from "views/examples/ResetPage.jsx";
import InvoicePage from "views/examples/InvoicePage.jsx";
import CheckoutPage from "views/examples/CheckoutPage.jsx";
import ChatPage from "views/examples/ChatPage.jsx";
import CartPage from "./views/CartPage/CartPage";
import Checkout from "./views/CheckoutPage/Checkout";
import Invoice from "./views/InvoicePage/Invoice";
import DetailPage from "./views/DetailPage/DetailPage";
import Login from "./views/LoginPage/Login";
import InvoicePages from "./views/InvoicePage/InvoicePage";
import AccountPage from "./views/Account/AccountPage";
import IndexPage from "./views/IndexPage/IndexPage";
import ProductCategory from "./views/ProductCategory/ProductCategory";
import {Provider} from "react-redux";
import {Store} from "./Redux/stores";
import history from "./history.js";
import EmptyCart from "./views/CartPage/EmptyCart";
import EmptyWishList from "./views/WishList/EmptyWishList";
import EmptyWishListPage from "./views/WishList/EmptyWishListPage";
import WishListPage from "./views/WishList/WishListPage";

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter history={history}>
            <Switch>
                <Route path="/index" render={props => <Index {...props} />}/>
                <Route
                    path="/presentation"
                    render={props => <Presentation {...props} />}
                />
                <Route path="/sections" render={props => <Sections {...props} />}/>
                <Route path="/about-us" render={props => <AboutUs {...props} />}/>
                <Route path="/blog-post" render={props => <BlogPost {...props} />}/>
                <Route path="/blog-posts" render={props => <BlogPosts {...props} />}/>
                <Route path="/contact-us" render={props => <ContactUs {...props} />}/>
                <Route
                    path="/landing-page"
                    render={props => <LandingPage {...props} />}
                />
                <Route path="/pricing" render={props => <Pricing {...props} />}/>
                <Route path="/ecommerce" render={props => <Ecommerce {...props} />}/>
                <Route
                    path="/product-page"
                    render={props => <ProductPage {...props} />}
                />
                <Route
                    path="/profile-page"
                    render={props => <ProfilePage {...props} />}
                />
                
                <Route
                    path="/account-settings"
                    render={props => <AccountSettings {...props} />}
                />
                <Route path="/login-page" render={props => <LoginPage {...props} />}/>
                <Route
                    path="/register-page"
                    render={props => <RegisterPage {...props} />}
                />
                <Route path="/reset-page" render={props => <ResetPage {...props} />}/>
                <Route
                    path="/invoice-page"
                    render={props => <InvoicePage {...props} />}
                />
                <Route
                    path="/checkout-page"
                    render={props => <CheckoutPage {...props} />}
                />
                <Route path="/chat-page" render={props => <ChatPage {...props} />}/>
                
                
                <Route path="/home" render={props => <IndexPage {...props} />}/>
                <Route path="/my-cart" render={props => <CartPage {...props} />}/>
                <Route path="/checkout" render={props => <Checkout {...props} />}/>
                <Route path="/invoice/:id" render={props => <InvoicePages {...props} />}/>
                {/*<Route path="/login" render={props => <Login {...props} />} />*/}
                <Route path="/product-detail/:id" render={props => <DetailPage {...props} />}/>
                <Route path="/404" render={props => <Error404 {...props} />}/>
                <Route path="/500" render={props => <Error500 {...props} />}/>
                <Route path="/my-account" render={props => <AccountPage {...props} />}/>
                <Route path="/product-category" render={props => <ProductCategory {...props} />}/>
                <Route path="/empty-cart" render={props => <EmptyCart {...props} />}/>
                <Route path="/empty-wishlist" render={props => <EmptyWishListPage {...props} />}/>
                <Route path="/wishlist" render={props => <WishListPage {...props} />}/>
                <Redirect from="/" to="/home"/>
                
                <Redirect from='/*' to='/404'/>
            
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
