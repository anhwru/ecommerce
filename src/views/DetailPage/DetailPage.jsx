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
import StarRating from "./StarRating";
import CommentRating from "./CommentRating";
import CustomerComent from "./CustomerComent";
import {Container} from "@material-ui/core";
import Row from "reactstrap/es/Row";
import {Title} from "@material-ui/icons";
import Col from "reactstrap/es/Col";
import RateandComment from "./RateandComment";


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
                    <div className="main" style={{'margin': '100px 0px'}}>
                        <ProductDetail/>
                        <Container>
                            <Row>
                                <Col md={12}>
                                    {/*<h3>Bạn phải mua sản phẩm này mới có thể đánh giá!</h3>*/}
                                    <div className="customer_comment">
                                        <RateandComment/>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <CommentRating/>
                        <SuggestionProduct/>
                    </div>
                    <MyFooter/>
                </div>
            </>
        );
    }
}

export default DetailPage;
