import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardLink,
    CardTitle,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";

// core components

class Product extends React.Component {
    render() {
        return (
            <>
                <div className="section related-products">
                    <Container>
                        <Row>
                            <Card className="card-product">
                                <div className="card-image">
                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="img rounded"
                                            src={require("assets/img/bag.png")}
                                        />
                                    </a>
                                </div>
                                <CardBody>
                                    <h6 className="category text-warning">Trending</h6>
                                    <CardTitle tag="h4">
                                        <CardLink
                                            className="text-white"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Dolce &amp; Gabbana
                                        </CardLink>
                                    </CardTitle>
                                    <div className="card-description">
                                        Dolce &amp; Gabbana's 'Greta' tote has been crafted in
                                        Italy from hard-wearing red textured-leather.
                                    </div>
                                    <CardFooter>
                                        <div className="price-container">
                                            <span className="price">€1,459</span>
                                        </div>
                                        <Button
                                            className="btn-simple btn-icon btn-round pull-right"
                                            color="warning"
                                            id="tooltip320714545"
                                        >
                                            <i className="tim-icons icon-heart-2"/>
                                        </Button>
                                        <UncontrolledTooltip
                                            delay={0}
                                            placement="left"
                                            target="tooltip320714545"
                                        >
                                            Thêm vào giỏ hàng
                                        </UncontrolledTooltip>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default Product;
