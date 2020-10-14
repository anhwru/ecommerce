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

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.jsx";
import DemoFooter from "components/Footers/DemoFooter.jsx";
import ProductDetail from "./ProductDetail";
import MyFooter from "../IndexPage/Footer";
import SuggestionProduct from "./SuggestionProduct";


class DetailPage extends React.Component {
    componentDidMount() {
        document.body.classList.add("index-page");
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.wrapper.scrollTop = 0;
    }
    
    componentWillUnmount() {
        document.body.classList.remove("index-page");
    }
    
    render() {
        return (
            <>
                <ColorNavbar/>
                <div className="wrapper" ref="wrapper">
                    <div className="main">
                        <ProductDetail/>
                        <SuggestionProduct/>
                    </div>
                    <MyFooter/>
                </div>
            </>
        );
    }
}

export default DetailPage;
