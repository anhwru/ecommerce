import React from "react";
// reactstrap components
import {
    Card,
    Container,
    Row,
    Col
} from "reactstrap";
import Carousel from "./TopSale/Carousel";
import TopProducts from "./TopSale/TopProductsale";


class TopSale extends React.Component {
    
    render() {
        return (
            <>
                <div className="section" id="topsale">
                    <Container>
                        <Row>
                            <Col className="m-auto" md="12">
                                <Card className="card-contact card-raised">
                                    <Row>
                                        <Col md="8">
                                            <Carousel/>
                                        </Col>
                                        <Col md="4">
                                            <TopProducts/>
                                            <TopProducts/>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default TopSale;
