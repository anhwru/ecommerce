import React from "react";
import ColorNavbar from "../../components/Navbars/ColorNavbar";
import MyFooter from "../IndexPage/Footer";
import MyWishList from "./MyWishList";

class WishListPage extends React.Component {
    render() {
        return (
            <>
                <ColorNavbar/>
                <MyWishList/>
                <MyFooter/>
            </>
        );
    }
}

export default WishListPage;
