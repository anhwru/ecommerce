import React from "react";
import "views/style.scss"
import ColorNavbar from "../../components/Navbars/ColorNavbar";
import MyFooter from "./Footer";
import PreFooter from "./PreFooter";
import Partner from "./Partner";
import {Button, Col, Container, Row} from "reactstrap";
import TopSale from "./TopSale";
import ProductSlider from "./ProductSlider/ProductSlider";
import TopCategory from "./TopCategory/TopCategory";
import GridProduct from "./GridProduct";
import Suggestion from "./Suggestion";
import OneSlideSlick from "./OneSlideSlick";
import AllStep from "./AllStep";

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
                <ColorNavbar/>
                <TopSale/>
                <Col className="ml-auto mr-auto" md="6">
                    <h1 className="title t-center">Nhóm hàng tiêu biểu</h1>
                </Col>
                <TopCategory/>
                <Col className="ml-auto mr-auto" md="6">
                    <h1 className="title t-center">Sản phẩm mua nhiều nhất</h1>
                </Col>
                <GridProduct/>
                <Col className="ml-auto mr-auto" md="6">
                    <h1 className="title t-center">Giảm giá nhiều nhất</h1>
                </Col>
                <ProductSlider/>
                <Col className="ml-auto mr-auto" md="6">
                    <h1 className="title t-center">Sản phẩm mới</h1>
                </Col>
                <OneSlideSlick/>
                <Col className="ml-auto mr-auto" md="6">
                    <h1 className="title t-center">Ngành hàng đề xuất</h1>
                </Col>
                <Suggestion/>
                <Col className="ml-auto mr-auto" md="6">
                    <h1 className="title t-center">Đối tác cung ứng</h1>
                </Col>
                <Partner/>
                <Col className="ml-auto mr-auto" md="6">
                    <h1 className="title t-center">Quy trình bán hàng</h1>
                </Col>
                <AllStep/>
                <MyFooter/>
            </>
        );
    }
}

export default IndexPage;
