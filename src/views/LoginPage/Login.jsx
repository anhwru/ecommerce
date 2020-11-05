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
    Col
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.jsx";
import DemoFooter from "components/Footers/DemoFooter.jsx";
import Footers from "../IndexSections/Footers";
import MyFooter from "../IndexPage/Footer";

class Login extends React.Component {
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
                <Card className="card-login">
                    <Form action="" className="form" method="">
                        <CardHeader>
                            <CardImg
                                alt="..."
                                src={require("assets/img/square-purple-1.png")}
                            />
                            <CardTitle tag="h4">Login</CardTitle>
                            <button
                                aria-label="Close"
                                className="close"
                                data-dismiss="modal"
                                type="button"
                                onClick={this.toggleModalLogin}
                            >
                                <i className="tim-icons icon-simple-remove"/>
                            </button>
                        </CardHeader>
                        <CardBody>
                            <InputGroup
                                className={classnames("input-lg", {
                                    "input-group-focus": this.state.firstNameFocus
                                })}
                            >
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="tim-icons icon-single-02"/>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Tài Khoản"
                                    type="text"
                                    onFocus={e => this.setState({firstNameFocus: true})}
                                    onBlur={e => this.setState({firstNameFocus: false})}
                                />
                            </InputGroup>
                            <InputGroup
                                className={classnames("input-lg", {
                                    "input-group-focus": this.state.lastNameFocus
                                })}
                            >
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="tim-icons icon-key-25"/>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Mật khẩu"
                                    type="password"
                                    onFocus={e => this.setState({lastNameFocus: true})}
                                    onBlur={e => this.setState({lastNameFocus: false})}
                                />
                            </InputGroup>
                        </CardBody>
                        <CardFooter className="text-center">
                            <Button
                                className="btn-round"
                                color="primary"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                                size="lg"
                            >
                                Đăng nhập
                            </Button>
                        </CardFooter>
                        <div className="pull-left ml-3 mb-3">
                            <h6>
                                <a className="register_login"
                                   onClick={() => {
                                       this.toggleModalRegister()
                                   }}>
                                    Tạo tài khoản mới
                                </a>
                            </h6>
                        </div>
                        <div className="pull-right mr-3 mb-3">
                            <h6>
                                <a
                                    className="link footer-link"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    Hướng dãn
                                </a>
                            </h6>
                        </div>
                    </Form>
                </Card>
            </>
        );
    }
}

export default Login;
