import React from "react";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.jsx";
import DemoFooter from "components/Footers/DemoFooter.jsx";

import MyCart from "./MyCart";
import MyFooter from "../IndexPage/Footer";

class CartPage extends React.Component {
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
        <ColorNavbar />
        <div className="wrapper" ref="wrapper">
          <div className="main">
            <MyCart />
          </div>
        </div>
      </>
    );
  }
}

export default CartPage;
