import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
// reactstrap components
import {
  //   Button,
  UncontrolledCollapse,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  NavLink,
  Card,
  Form,
  CardHeader,
  CardImg,
  CardTitle,
  CardBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  CardFooter,
  Modal,
  FormGroup,
  FormText,
  FormFeedback,
  Label,
} from "reactstrap";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { loginWithUsernameAndPassword } from "../../Redux/actions/LoginActions";
import { getCart } from "../../Redux/actions/CartAction";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

class ColorNavbar extends React.Component {
  state = {
    navbarColor: "navbar-transparent",
    visible: true,
    modalMini: false,
    modalClassic: false,
    modalNotice: false,
    modalLogin: false,
    modalRegister: false,
    openedCollapses: ["collapseOne"],
    username: "",
    password: "",
  };
  toggleModalLogin = () => {
    this.setState({
      modalLogin: !this.state.modalLogin,
    });
  };
  toggleModalRegister = () => {
    this.setState({
      modalRegister: !this.state.modalRegister,
      modalLogin: false,
    });
  };

  handleLogin = () => {
    console.log(this.state);
    this.props.loginWithUsernameAndPassword({ ...this.state }).then((data) => {
      if (this.props.login.success) {
        this.setState({ modalLogin: false });
        this.props.getCart(this.state.username);
      }
    });
    // this.setState({modalLogin : false})
  };

  handleChange = (event) => {
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
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
        navbarColor: "bg-dark",
      });
    } else if (
      document.documentElement.scrollTop < 40 ||
      document.body.scrollTop < 40
    ) {
      this.setState({
        navbarColor: "navbar-transparent",
      });
    }
  };

  render() {
    let { username, password } = this.state;
    // console.log(this.state);
    // console.log(this.props);
    return (
      <>
        <Navbar className={"fixed-top " + this.state.navbarColor} expand="lg">
          <Container>
            <div className="navbar-translate">
              <button className="navbar-toggler" id="navigation">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#navigation">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      CBR
                    </a>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button className="navbar-toggler" id="navigation">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav navbar>
                <NavItem className="nav-items">
                  <Link to="/home">
                    <NavLink>
                      <i className="tim-icons icon-planet" />
                      Trang chủ
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className="nav-items">
                  <Link to="/product-category">
                    <NavLink>
                      <i className="tim-icons icon-book-bookmark" />
                      Sản phẩm
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className="nav-items">
                  <Link to="/contact">
                    <NavLink>
                      <i className="tim-icons icon-send" />
                      Liên hệ
                    </NavLink>
                  </Link>
                </NavItem>
              </Nav>
              {/*<Form inline className="ml-auto">*/}
              {/*    <FormGroup className="no-border">*/}
              {/*        <Input type="text" placeholder="Tìm kiếm"/>*/}
              {/*    </FormGroup>*/}
              {/*    <Button color="primary" className="btn-link btn-icon btn-round">*/}
              {/*        <i className="tim-icons icon-zoom-split"></i>*/}
              {/*    </Button>*/}
              {/*</Form>*/}
              <Nav className="ml-auto btn-icon" navbar>
                <NavItem className="nav-items">
                  <Link to="/my-cart">
                    <NavLink>
                      <i className="tim-icons icon-bag-16" />
                      <span className="badge-icon">16</span>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className="nav-items">
                  <Link to="/wishlist">
                    <NavLink>
                      <FavoriteBorderIcon style={{ fontSize: 26 }} />
                      <span className="badge-icon">5</span>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className="nav-items" onClick={this.toggleModalLogin}>
                  {!this.props.login.success && (
                    <NavLink>
                      <FingerprintIcon
                        style={{ fontSize: 28, cursor: "pointer" }}
                      />
                    </NavLink>
                  )}
                  <Modal
                    isOpen={this.state.modalLogin}
                    toggle={this.toggleModalLogin}
                    onClose={() => this.state.modalLogin(false)}
                    modalClassName="modal-login"
                  >
                    <Card className="card-login">
                      <ValidatorForm ref="form" onSubmit={this.handleLogin}>
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
                              <i className="tim-icons icon-simple-remove" />
                            </button>
                          </CardHeader>
                          <CardBody>
                            <form>
                              {/* <InputGroup
                                className={classnames("input-lg", {
                                  "input-group-focus": this.state
                                    .firstNameFocus,
                                })}
                              >
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="tim-icons icon-single-02" />
                                  </InputGroupText>
                                </InputGroupAddon> */}
                              <TextValidator
                                placeholder="Tài khoản"
                                onChange={this.handleChange}
                                type="text"
                                name="username"
                                value={username}
                                validators={["required"]}
                                errorMessages={[
                                  "Trường này không được để trống",
                                ]}
                              />
                              {/* <Input
                                  placeholder="Tài Khoản"
                                  type="text"
                                  name="username"
                                  autocomplete="off"
                                  onChange={this.handleChange}
                                  onFocus={(e) =>
                                    this.setState({ firstNameFocus: true })
                                  }
                                  onBlur={(e) =>
                                    this.setState({ firstNameFocus: false })
                                  }
                                /> */}
                              {/* </InputGroup> */}
                              {/* <InputGroup
                                className={classnames("input-lg", {
                                  "input-group-focus": this.state.lastNameFocus,
                                })}
                              >
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="tim-icons icon-key-25" />
                                  </InputGroupText>
                                </InputGroupAddon> */}
                              <TextValidator
                                placeholder="Mật khẩu"
                                onChange={this.handleChange}
                                type="password"
                                name="password"
                                value={password}
                                validators={["required"]}
                                errorMessages={[
                                  "Trường này không được để trống",
                                ]}
                              />
                              {/* <Input
                                  placeholder="Mật khẩu"
                                  name="password"
                                  onChange={this.handleChange}
                                  type="password"
                                  autocomplete="off"
                                  onFocus={(e) =>
                                    this.setState({ lastNameFocus: true })
                                  }
                                  onBlur={(e) =>
                                    this.setState({ lastNameFocus: false })
                                  }
                                /> */}
                              {/* </InputGroup> */}
                              <FormGroup check className="text-center">
                                <Label check>
                                  <Input type="checkbox" /> Lưu tài khoản
                                  <span className="form-check-sign"></span>
                                </Label>
                              </FormGroup>
                            </form>
                          </CardBody>
                          <CardFooter className="text-center">
                            <Button
                              className="btn-round"
                              color="primary"
                              type="submit"
                              size="lg"
                            >
                              Đăng nhập
                            </Button>
                            {/* <Button
                              className="btn-round"
                              color="primary"
                              onClick={this.handleLogin}
                              size="lg"
                            >
                              Đăng nhập
                            </Button> */}
                          </CardFooter>
                          <div className="pull-left ml-3 mb-3">
                            <h6>
                              <a
                                className="register_login"
                                onClick={() => {
                                  this.toggleModalRegister();
                                }}
                              >
                                Tạo tài khoản mới
                              </a>
                            </h6>
                          </div>
                          <div className="pull-right mr-3 mb-3">
                            <h6>
                              <a
                                className="link footer-link"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Hướng dãn
                              </a>
                            </h6>
                          </div>
                        </Form>
                      </ValidatorForm>
                    </Card>
                  </Modal>
                </NavItem>
                <NavItem className="nav-items account">
                  {this.props.login.success && (
                    <Link to="/my-account">
                      <NavLink>
                        <i className="tim-icons icon-single-02" />
                      </NavLink>
                    </Link>
                  )}
                </NavItem>
                <Modal
                  isOpen={this.state.modalRegister}
                  toggle={this.toggleModalRegister}
                >
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
                            "input-group-focus": this.state.emailFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            autoComplete="off"
                            type="text"
                            onFocus={(e) => this.setState({ emailFocus: true })}
                            onBlur={(e) => this.setState({ emailFocus: false })}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": this.state.fullNamefocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Tên đăng nhập"
                            type="text"
                            onFocus={(e) =>
                              this.setState({ fullNamefocus: true })
                            }
                            onBlur={(e) =>
                              this.setState({ fullNamefocus: false })
                            }
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": this.state.passwordFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-key-25" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Mật khẩu"
                            type="text"
                            onFocus={(e) =>
                              this.setState({ passwordFocus: true })
                            }
                            onBlur={(e) =>
                              this.setState({ passwordFocus: false })
                            }
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": this.state.passwordFocus2,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-key-25" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Nhập lại mật khẩu"
                            type="text"
                            onFocus={(e) =>
                              this.setState({ passwordFocus2: true })
                            }
                            onBlur={(e) =>
                              this.setState({ passwordFocus2: false })
                            }
                          />
                        </InputGroup>
                        <FormGroup check className="text-left">
                          <Label>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />
                            Tôi đồng ý với{" "}
                            <a href="">điều khoản và chính sách</a>.
                          </Label>
                        </FormGroup>
                      </Form>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        className="btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
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

const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps, {
  loginWithUsernameAndPassword,
  getCart,
})(ColorNavbar);
