import React from "react";

// reactstrap components
import {
    Card,
    Container,
    Row,
    Col
} from "reactstrap";
import ListlineProduct from "./GridProduct/ListlineProduct";
import GridProductCard from "./GridProduct/GridProductCard";
import ProductandDetail from "./GridProduct/ProductandDetail";
import CardProductDescription from "./GridProduct/CardProductDescription";
import ProductTopSales from "./TopCategory/ProductTopSales";
import CardBody from "reactstrap/lib/CardBody";
import Products from "../Products/Products";

class GridProduct extends React.Component {
    render() {
        return (
            <>
                <div id="cards">
                    <Container>
                        <Row>
                            <Col lg="4" md="6">
                                <ProductandDetail/>
                                <CardProductDescription/>
                            </Col>
                            <Col lg="4" md="6">
                                <Card className="card-blog cd-line">
                                    <ListlineProduct/>
                                    <ListlineProduct/>
                                    <ListlineProduct/>
                                    <ListlineProduct/>
                                    <ListlineProduct/>
                                    <ListlineProduct/>
                                </Card>
                                <Card>
                                    <CardBody>
                                        <Container>
                                            <Row>
                                                <Products/>
                                            </Row>
                                        </Container>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4" md="8">
                                <Card className="card-blog">
                                    <Container>
                                        <Row>
                                            <Col>
                                                <ProductTopSales/>
                                                <ProductTopSales/>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card>
                                <GridProductCard/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default GridProduct;
