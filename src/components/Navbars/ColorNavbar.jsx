import React from "react";
import {Link} from "react-router-dom";
import classnames from "classnames";
// reactstrap components
import {
    Button,
    UncontrolledCollapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    NavLink,
    Card,
    Form,
    CardHeader,
    CardImg,
    CardTitle,
    CardBody,
    InputGroup,
    InputGroupAddon,
    InputGroupText, Input, CardFooter, Modal, FormGroup, Label
} from "reactstrap";

class ColorNavbar extends React.Component {
    state = {
        navbarColor: "navbar-transparent",
        visible: true,
        modalMini: false,
        modalClassic: false,
        modalNotice: false,
        modalLogin: false,
        modalRegister: false,
        openedCollapses: ["collapseOne"]
    };
    toggleModalLogin = () => {
        this.setState({
            modalLogin: !this.state.modalLogin
        });
    };
    toggleModalRegister = () => {
        this.setState({
            modalRegister: !this.state.modalRegister,
            modalLogin: false
        });
    };
    
    
    componentDidMount() {
        window.addEventListener("scroll", this.changeNavbarColor);
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.changeNavbarColor);
    }
    
    changeNavbarColor = () => {
        if (
            document.documentElement.scrollTop > 40 ||
            document.body.scrollTop > 40
        ) {
            this.setState({
                navbarColor: "bg-info"
            });
        } else if (
            document.documentElement.scrollTop < 40 ||
            document.body.scrollTop < 40
        ) {
            this.setState({
                navbarColor: "navbar-transparent"
            });
        }
    };
    
    render() {
        return (
            <>
                <Navbar className={"fixed-top " + this.state.navbarColor} expand="lg">
                    <Container>
                        <div className="navbar-translate">
                            <NavbarBrand to="/index" tag={Link} id="tooltip6619950104">
                                <img
                                    src={require("assets/img/cbr-logo.png")}
                                    style={{'width': '65%', 'object-fit': 'cover', 'height': '30px'}}/>
                            </NavbarBrand>
                            <UncontrolledTooltip delay={0} target="tooltip6619950104">
                                Shop Dunk
                            </UncontrolledTooltip>
                            <button className="navbar-toggler" id="navigation">
                                <span className="navbar-toggler-bar bar1"/>
                                <span className="navbar-toggler-bar bar2"/>
                                <span className="navbar-toggler-bar bar3"/>
                            </button>
                        </div>
                        <UncontrolledCollapse navbar toggler="#navigation">
                            <div className="navbar-collapse-header">
                                <Row>
                                    <Col className="collapse-brand" xs="6">
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            CBR
                                        </a>
                                    </Col>
                                    <Col className="collapse-close text-right" xs="6">
                                        <button className="navbar-toggler" id="navigation">
                                            <i className="tim-icons icon-simple-remove"/>
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                            <Nav className="ml-auto" navbar>
                                <Form inline className="ml-auto">
                                    <FormGroup className="no-border">
                                        <Input type="text" placeholder="Search"/>
                                        <Button color="primary" className="btn-link btn-icon btn-round">
                                            <i className="tim-icons icon-zoom-split"></i>
                                        </Button>
                                    </FormGroup>
                                </Form>
                                <NavItem className="nav-items">
                                    <Link to='/home'>
                                        <NavLink>
                                            <i className="tim-icons icon-planet"/>
                                            Trang chủ
                                        </NavLink>
                                    </Link>
                                </NavItem>
                                {/*<NavItem className="nav-items">*/}
                                {/*    <Link to="/invoice/:id">*/}
                                {/*        <NavLink>*/}
                                {/*            <i className="tim-icons icon-single-02"/>*/}
                                {/*            Hoá đơn*/}
                                {/*        </NavLink>*/}
                                {/*    </Link>*/}
                                {/*</NavItem>*/}
                                <NavItem className="nav-items">
                                    <Link to="/my-cart">
                                        <NavLink>
                                            <i className="tim-icons icon-bag-16"/>
                                            Giỏ hàng
                                        </NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem className="nav-items" onClick={this.toggleModalLogin}>
                                    <NavLink>
                                        <i className="tim-icons icon-single-02"/>
                                        Đăng nhập
                                    </NavLink>
                                    <Modal
                                        isOpen={this.state.modalLogin}
                                        toggle={this.toggleModalLogin}
                                        onClose={() => this.state.modalLogin(false)}
                                        modalClassName="modal-login"
                                    >
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
                                    </Modal>
                                </NavItem>
                                {/*<NavItem className="nav-items">*/}
                                {/*    <Link to="/my-account">*/}
                                {/*        <NavLink>*/}
                                {/*            <i className="tim-icons icon-badge"/>*/}
                                {/*            Tài Khoản*/}
                                {/*        </NavLink>*/}
                                {/*    </Link>*/}
                                {/*</NavItem>*/}
                                <Modal isOpen={this.state.modalRegister}
                                       toggle={this.toggleModalRegister}>
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
                                </Modal>
                            </Nav>
                        </UncontrolledCollapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default ColorNavbar;
