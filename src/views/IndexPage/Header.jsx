import React from "react";
// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";
import Carousel from "./Carousel";
import TopProduct from "./TopProduct";



class Header extends React.Component {
    state = {};
    render() {
        return (
            <>
                <div className="cd-section container" id="headers">
                    <Container>
                        <Row className="carousel-header">
                           <Col lg={9} className="no-pd">
                               <Carousel/>
                           </Col>
                            <Col lg={3} className="no-pd">
                                <TopProduct/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default Header;
