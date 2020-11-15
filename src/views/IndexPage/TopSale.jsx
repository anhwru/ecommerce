import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Label,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";
import Carousel from "./TopSale/Carousel";
import TopProducts from "./TopSale/TopProductsale";


class TopSale extends React.Component {
    state = {};
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
