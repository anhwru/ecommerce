import React from "react";
import ColorNavbar from "../../components/Navbars/ColorNavbar";
import MyFooter from "../IndexPage/Footer";
import Pagination from "./Pagination";
import Paginations from "./Pagination";
import SliderRange from "./SliderRange";
import ChooseType from "./ChooseType";
import Container from "reactstrap/es/Container";
import Col from "reactstrap/es/Col";
import Collapses from "./Collapse";

// reactstrap components

// core components

class ProductCategory extends React.Component {
    render() {
        return (
            <>
                <ColorNavbar/>
                <div className="row section wrapper" id="product-category">
                    <Container>
                        <Col md={3}>
                           <Collapses/>
                        </Col>
                        <Col md={9}>
                        
                        </Col>
                        <Paginations/>
                    </Container>
                </div>
                <MyFooter/>
            </>
        );
    }
}

export default ProductCategory;
