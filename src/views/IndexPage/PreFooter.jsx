import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
    Button,
    Card,
    CardBody,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

class PreFooter extends React.Component {
    state = {};
    
    render() {
        return (
            <>
                <div className="subscribe-line">
                    <Col className="ml-auto mr-auto" lg="6" sm="10">
                        <div className="text-center">
                            <h4 className="title">Subscribe to our Newsletter</h4>
                            <p className="description">
                                Join our newsletter and get news in your inbox every
                                week! We hate spam too, so no worries about this.
                            </p>
                        </div>
                        <Card className="card-raised card-form-horizontal op-06">
                            <CardBody>
                                <Form action="" method="">
                                    <Row>
                                        <Col sm="8">
                                            <InputGroup
                                                className={classnames({
                                                    "input-group-focus": this.state.emailFocus2
                                                })}
                                            >
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="tim-icons icon-email-85"/>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="Your Email..."
                                                    type="email"
                                                    onFocus={e =>
                                                        this.setState({emailFocus2: true})
                                                    }
                                                    onBlur={e =>
                                                        this.setState({emailFocus2: false})
                                                    }
                                                />
                                            </InputGroup>
                                        </Col>
                                        <Col sm="4">
                                            <Button
                                                block
                                                className="btn-round"
                                                color="primary"
                                                type="button"
                                            >
                                                Subscribe
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </div>
            </>
        );
    }
}

export default PreFooter;
