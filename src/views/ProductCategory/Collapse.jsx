import React from "react";
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    Collapse,
    Container,
    Row,
    Col,
} from "reactstrap";
import ChooseType from "./ChooseType";
import RangeSlider from "./SliderRange";

// core components

class Collapses extends React.Component {
    state = {
        visible: true,
        modalMini: false,
        modalClassic: false,
        modalNotice: false,
        modalLogin: false,
        openedCollapses: ["collapseOne","collapseTwo"]
    };
    toggleModalClassic = () => {
        this.setState({
            modalClassic: !this.state.modalClassic
        });
    };
    collapsesToggle = collapse => {
        let openedCollapses = this.state.openedCollapses;
        if (openedCollapses.includes(collapse)) {
            this.setState({
                openedCollapses: this.state.openedCollapses.filter(
                    prop => prop !== collapse
                )
            });
        } else {
            this.setState({
                openedCollapses: [...this.state.openedCollapses, collapse]
            });
        }
    };
    render() {
        return (
            <>
                <div className="section section-javascript" id="javascriptComponents">
                    <Container>
                        <Row>
                                <div id="collapse">
                                    <Row>
                                        <Col md="12">
                                                <Card className="card-plains">
                                                    <CardHeader id="headingOne" role="tab">
                                                        <a
                                                            className="d-flex"
                                                            href="#pablo"
                                                            data-toggle="collapse"
                                                            aria-expanded={this.state.openedCollapses.includes(
                                                                "collapseOne"
                                                            )}
                                                            onClick={e => {
                                                                e.preventDefault();
                                                                this.collapsesToggle("collapseOne");
                                                            }}
                                                        >
                                                            Chọn khoảng giá{" "}
                                                            <i className="tim-icons icon-minimal-down ml-auto" />
                                                        </a>
                                                    </CardHeader>
                                                    <Collapse
                                                        role="tabpanel"
                                                        isOpen="true"
                                                    >
                                                        <CardBody>
                                                           <RangeSlider/>
                                                        </CardBody>
                                                    </Collapse>
                                                </Card>
                                                <Card className="card-plains">
                                                    <CardHeader role="tab">
                                                        <a
                                                            className="d-flex"
                                                            href="#pablo"
                                                            data-toggle="collapse"
                                                            onClick={e => {
                                                                e.preventDefault();
                                                                this.collapsesToggle("collapseTwo");
                                                            }}
                                                            aria-expanded={this.state.openedCollapses.includes(
                                                                "collapseTwo"
                                                            )}
                                                        >
                                                           Danh mục lọc{" "}
                                                            <i className="tim-icons icon-minimal-down ml-auto" />
                                                        </a>
                                                    </CardHeader>
                                                    <Collapse
                                                        isOpen={this.state.openedCollapses.includes(
                                                            "collapseTwo"
                                                        )}
                                                    >
                                                        <CardBody>
                                                           <ChooseType/>
                                                        </CardBody>
                                                    </Collapse>
                                                </Card>
                                                <Card className="card-plains">
                                                    <CardHeader role="tab">
                                                        <a
                                                            className="d-flex"
                                                            href="#pablo"
                                                            data-toggle="collapse"
                                                            onClick={e => {
                                                                e.preventDefault();
                                                                this.collapsesToggle("collapseThree");
                                                            }}
                                                            aria-expanded={this.state.openedCollapses.includes(
                                                                "collapseThree"
                                                            )}
                                                        >
                                                           Lọc loại{" "}
                                                            <i className="tim-icons icon-minimal-down ml-auto" />
                                                        </a>
                                                    </CardHeader>
                                                    <Collapse
                                                        role="tabpanel"
                                                        isOpen={this.state.openedCollapses.includes(
                                                            "collapseThree"
                                                        )}
                                                    >
                                                        <CardBody>
                                                           <ChooseType/>
                                                        </CardBody>
                                                    </Collapse>
                                                </Card>
                                        </Col>
                                    </Row>
                                </div>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default Collapses;
