import React from "react";
// reactstrap components
import {
    Card,
    CardBody,
    CardTitle,
    Container,
    Row,
    Col
} from "reactstrap";
import {Title} from "@material-ui/icons";

class ListlineProduct extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row className="row-grid justify-content-between">
                        <Col lg="12" sm="12">
                            <Card className="card-stats">
                                <CardBody>
                                    <Row>
                                        <Col md="4" xs="5">
                                           <img src="https://siquanaogiare.com/wp-content/uploads/2018/06/ao-thun-nam-co-co-red-house-2.jpg"/>
                                        </Col>
                                        <Col md="8" xs="7">
                                            <div>
                                                <p className="list_line">Áo phông nam Apollo</p>
                                                <span className="d-inline-flex list-line_price"><strike class="list_old-price">{" "}425.000 vnd </strike><p className="list-new_price">269.000 vnd</p></span>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default ListlineProduct;
