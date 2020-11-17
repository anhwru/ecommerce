import React from "react";
import ColorNavbar from "../../components/Navbars/ColorNavbar";
import EmptyWishList from "./EmptyWishList";
import Footers from "../IndexSections/Footers";
import MyFooter from "../IndexPage/Footer";
import MyWishList from "./MyWishList";

class EmptyWishListPage extends React.Component {
    componentDidMount() {
        document.body.classList.add("presentation-page");
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.wrapper.scrollTop = 0;
    }
    
    componentWillUnmount() {
        document.body.classList.remove("presentation-page");
    }
    
    render() {
        return (
            <>
                <ColorNavbar/>
                <div className="wrapper" ref="wrapper">
                    <EmptyWishList/>
                </div>
                <MyFooter/>
            </>
        );
    }
}

export default EmptyWishListPage;
