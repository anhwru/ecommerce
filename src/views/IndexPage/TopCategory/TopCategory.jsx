import React from "react";

// reactstrap components
import {
    Card,
    CardBody,
    CardTitle,
    Container,
    Row,
    Col,
} from "reactstrap";

class TopCategory extends React.Component {
   
    onExiting = carousel => {
        this["carousel" + carousel + "Animating"] = true;
    };
    
    onExited = carousel => {
        this["carousel" + carousel + "Animating"] = false;
    };
    next = (carousel, items) => {
        if (this["carousel" + carousel + "Animating"]) return;
        const nextIndex =
            this.state["carousel" + carousel + "Index"] === items.length - 1
                ? 0
                : this.state["carousel" + carousel + "Index"] + 1;
        this.setState({ ["carousel" + carousel + "Index"]: nextIndex });
    };
    previous = (carousel, items) => {
        if (this["carousel" + carousel + "Animating"]) return;
        const nextIndex =
            this.state["carousel" + carousel + "Index"] === 0
                ? items.length - 1
                : this.state["carousel" + carousel + "Index"] - 1;
        this.setState({ ["carousel" + carousel + "Index"]: nextIndex });
    };
    render() {
        return (
            <>
                    <div className="my-section">
                        <Container className="text-center">
                            <Row>
                                <Col md="6">
                                    <Card
                                        className="card-blog card-background"
                                        data-animation={true}
                                    >
                                        <div
                                            className="full-background"
                                            style={{
                                                backgroundImage:
                                                    "url(" +
                                                    require("assets/img/leather-shoes.jpeg") +
                                                    ")"
                                            }}
                                        />
                                        <CardBody>
                                            <div className="content-bottom">
                                                <h6 className="card-category">Footwear</h6>
                                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                                    <CardTitle tag="h3">Leather Shoes</CardTitle>
                                                </a>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <Card
                                        className="card-blog card-background"
                                        data-animation={true}
                                    >
                                        <div
                                            className="full-background"
                                            style={{
                                                backgroundImage:
                                                    "url(" + require("assets/img/tshirts.jpeg") + ")"
                                            }}
                                        />
                                        <CardBody>
                                            <div className="content-bottom">
                                                <h6 className="card-category">T-shirts</h6>
                                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                                    <CardTitle tag="h3">100% Silk T-shirts</CardTitle>
                                                </a>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <Card
                                        className="card-blog card-background"
                                        data-animation={true}
                                    >
                                        <div
                                            className="full-background"
                                            style={{
                                                backgroundImage:
                                                    "url(" + require("assets/img/accesories.jpeg") + ")"
                                            }}
                                        />
                                        <CardBody>
                                            <div className="content-bottom">
                                                <h6 className="card-category">Accessories</h6>
                                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                                    <CardTitle tag="h3">Bracelets and Watches</CardTitle>
                                                </a>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="8">
                                    <Card
                                        className="card-blog card-background"
                                        data-animation={true}
                                    >
                                        <div
                                            className="full-background"
                                            style={{
                                                backgroundImage:
                                                    "url(" + require("assets/img/winter.jpeg") + ")"
                                            }}
                                        />
                                        <CardBody>
                                            <div className="content-bottom">
                                                <h6 className="card-category">Winter</h6>
                                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                                    <CardTitle tag="h3">Latest FW Collection</CardTitle>
                                                </a>
                                            </div>
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

export default TopCategory;
