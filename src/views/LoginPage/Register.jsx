import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardImg,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col, FormGroup, Label, Modal
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.jsx";
import DemoFooter from "components/Footers/DemoFooter.jsx";
import Footers from "../IndexSections/Footers";
import MyFooter from "../IndexPage/Footer";

class Register extends React.Component {
    state = {};
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        document.body.classList.add("login-page");
    }
    componentWillUnmount() {
        document.body.classList.remove("login-page");
    }
    render() {
        return (
            <>
                <Card className="card-register">
                    <CardHeader>
                        <CardImg
                            alt="..."
                            src={require("assets/img/square1.png")}
                        />
                        <CardTitle tag="h4">Register</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Form className="form">
                            <InputGroup
                                className={classnames({
                                    "input-group-focus": this.state.emailFocus
                                })}
                            >
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="tim-icons icon-email-85"/>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Email"
                                    autoComplete="off"
                                    type="text"
                                    onFocus={e => this.setState({emailFocus: true})}
                                    onBlur={e => this.setState({emailFocus: false})}
                                />
                            </InputGroup>
                            <InputGroup
                                className={classnames({
                                    "input-group-focus": this.state.fullNamefocus
                                })}
                            >
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="tim-icons icon-single-02"/>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Tên đăng nhập"
                                    type="text"
                                    onFocus={e =>
                                        this.setState({fullNamefocus: true})
                                    }
                                    onBlur={e =>
                                        this.setState({fullNamefocus: false})
                                    }
                                />
                            </InputGroup>
                            <InputGroup
                                className={classnames({
                                    "input-group-focus": this.state.passwordFocus
                                })}
                            >
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="tim-icons icon-key-25"/>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Mật khẩu"
                                    type="text"
                                    onFocus={e =>
                                        this.setState({passwordFocus: true})
                                    }
                                    onBlur={e =>
                                        this.setState({passwordFocus: false})
                                    }
                                />
                            </InputGroup>
                            <InputGroup
                                className={classnames({
                                    "input-group-focus": this.state.passwordFocus2
                                })}
                            >
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="tim-icons icon-key-25"/>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Nhập lại mật khẩu"
                                    type="text"
                                    onFocus={e =>
                                        this.setState({passwordFocus2: true})
                                    }
                                    onBlur={e =>
                                        this.setState({passwordFocus2: false})
                                    }
                                />
                            </InputGroup>
                            <FormGroup check className="text-left">
                                <Label>
                                    <Input type="checkbox"/>
                                    <span className="form-check-sign"/>Tôi đồng ý với {" "}
                                    <a href="">
                                        điều khoản và chính sách
                                    </a>
                                    .
                                </Label>
                            </FormGroup>
                        </Form>
                    </CardBody>
                    <CardFooter className="text-center">
                        <Button
                            className="btn-round"
                            color="info"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            size="lg"
                        >
                            Đăng ký
                        </Button>
                    </CardFooter>
                </Card>
            </>
        );
    }
}

export default Register;
