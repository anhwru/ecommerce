import React from "react";
import "views/style.scss";
import ColorNavbar from "../../components/Navbars/ColorNavbar";
import MyFooter from "./Footer";
import PreFooter from "./PreFooter";
import Partner from "./Partner";
import { Button, Container } from "reactstrap";
import TopSale from "./TopSale";
import ProductSlider from "./ProductSlider/ProductSlider";
import TopCategory from "./TopCategory/TopCategory";
import GridProduct from "./GridProduct";
import Suggestion from "./Suggestion";

class IndexPage extends React.Component {
  componentDidMount() {
    document.body.classList.add("index-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }

  componentWillUnmount() {
    document.body.classList.remove("index-page");
  }

  render() {
    return (
      <>
        <ColorNavbar />
        <TopSale />
        <GridProduct />
        <ProductSlider />
        <TopCategory />
        <Suggestion />
        <Partner />
        <MyFooter />
      </>
    );
  }
}

export default IndexPage;
