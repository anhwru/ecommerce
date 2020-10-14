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
                                                <i className="tim-icons icon-heart-2" />
                                            </Button>
                                            <UncontrolledTooltip
                                                delay={0}
                                                placement="left"
                                                target="tooltip320714545"
                                            >
                                                Add to wishlist
                                            </UncontrolledTooltip>
                                        </CardFooter>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="3" md="6">
                                <Card className="card-product">
                                    <div className="card-image">
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                className="img rounded"
                                                src={require("assets/img/tshirt.png")}
                                            />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <h6 className="category text-warning">Popular</h6>
                                        <CardTitle tag="h4">
                                            <CardLink
                                                className="text-white"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Balmain
                                            </CardLink>
                                        </CardTitle>
                                        <div className="card-description">
                                            Balmain's mid-rise skinny jeans are cut with stretch to
                                            ensure they retain their second-skin fit but move
                                            comfortably.
                                        </div>
                                        <CardFooter>
                                            <div className="price-container">
                                                <span className="price">€459</span>
                                            </div>
                                            <Button
                                                className="btn-simple btn-icon btn-round pull-right"
                                                color="warning"
                                                id="tooltip449471879"
                                            >
                                                <i className="tim-icons icon-heart-2" />
                                            </Button>
                                            <UncontrolledTooltip
                                                delay={0}
                                                placement="left"
                                                target="tooltip449471879"
                                            >
                                                Add to wishlist
                                            </UncontrolledTooltip>
                                        </CardFooter>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="3" md="6">
                                <Card className="card-product">
                                    <div className="card-image">
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                className="img rounded"
                                                src={require("assets/img/shirt.png")}
                                            />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <h6 className="category text-warning">Popular</h6>
                                        <CardTitle tag="h4">
                                            <CardLink
                                                className="text-white"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Balenciaga
                                            </CardLink>
                                        </CardTitle>
                                        <div className="card-description">
                                            Balenciaga's black textured-leather wallet is finished
                                            with the label's iconic 'Giant' studs. This is where you
                                            can...
                                        </div>
                                        <CardFooter>
                                            <div className="price-container">
                                                <span className="price">€559</span>
                                            </div>
                                            <Button
                                                className="btn-simple btn-icon btn-round pull-right"
                                                color="warning"
                                                id="tooltip300524105"
                                            >
                                                <i className="tim-icons icon-heart-2" />
                                            </Button>
                                            <UncontrolledTooltip
                                                delay={0}
                                                placement="left"
                                                target="tooltip300524105"
                                            >
                                                Add to wishlist
                                            </UncontrolledTooltip>
                                        </CardFooter>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="3" md="6">
                                <Card className="card-product">
                                    <div className="card-image">
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                className="img rounded"
                                                src={require("assets/img/jeans.png")}
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
                                                <span className="price">€ 1,359</span>
                                            </div>
                                            <Button
                                                className="btn-simple btn-icon btn-round pull-right"
                                                color="warning"
                                                id="tooltip755498009"
                                            >
                                                <i className="tim-icons icon-heart-2" />
                                            </Button>
                                            <UncontrolledTooltip
                                                delay={0}
                                                placement="left"
                                                target="tooltip755498009"
                                            >
                                                Add to wishlist
                                            </UncontrolledTooltip>
                                        </CardFooter>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default SuggestionProduct;
