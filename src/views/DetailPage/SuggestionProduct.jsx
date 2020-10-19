import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

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
import Product from "./Product";

// core components

const items = [
    {
        content: (
            <img
                alt="..."
                className="d-block"
                src={require("assets/img/shirt.png")}
            />
        ),
        altText: "",
        caption: "",
        src: "0"
    },
    {
        content: (
            <img
                alt="..."
                className="d-block"
                src={require("assets/img/shorts.png")}
            />
        ),
        altText: "",
        caption: "",
        src: "1"
    },
    {
        content: (
            <img
                alt="..."
                className="d-block"
                src={require("assets/img/tshirt.png")}
            />
        ),
        altText: "",
        caption: "",
        src: "2"
    }
];

class SuggestionProduct extends React.Component {
    render() {
        return (
            <>
                <div className="section related-products">
                    <Container>
                        <Col md="8">
                            <h2 className="title">Có thể bạn sẽ cần</h2>
                        </Col>
                        <Row>
                            <Col lg="3" md="6">
                               <Product/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default SuggestionProduct;
