import React from "react";

// reactstrap components
import {
    Badge,
    Container,
    Row,
    Col,
} from "reactstrap";

class AllStep extends React.Component {
    
    render() {
        return (
            <>
                <div className="wrapper" ref="wrapper">
                    <div className="features-1">
                        <Container>
                            <Row>
                                <Col className="ml-auto mr-auto" md="8">
                                    <h1 className="title">Full-Funnel Social Analytics</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <div className="info info-hover">
                                        <div className="icon icon-primary">
                                            <img
                                                alt="..."
                                                className="bg-blob"
                                                src={require("assets/img/feature-blob/primary.png")}
                                            />
                                            <i className="tim-icons icon-user-run"/>
                                        </div>
                                        <h4 className="info-title">Social Conversations</h4>
                                        <p className="description">
                                            Gain access to the demographics, psychographics, and
                                            location of unique people.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="info info-hover">
                                        <div className="icon icon-success">
                                            <img
                                                alt="..."
                                                className="bg-blob"
                                                src={require("assets/img/feature-blob/success.png")}
                                            />
                                            <i className="tim-icons icon-atom"/>
                                        </div>
                                        <h4 className="info-title">Analyze Performance</h4>
                                        <p className="description">
                                            Unify data from Facebook, Instagram, Twitter, LinkedIn,
                                            and Youtube to gain rich insights.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="info info-hover">
                                        <div className="icon icon-warning">
                                            <img
                                                alt="..."
                                                className="bg-blob"
                                                src={require("assets/img/feature-blob/warning.png")}
                                            />
                                            <i className="tim-icons icon-gift-2"/>
                                        </div>
                                        <h4 className="info-title">Measure Conversions</h4>
                                        <p className="description">
                                            Track actions taken on your website, understand the impact
                                            on your bottom line.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </>
        );
    }
}

export default AllStep;
