import React from "react";
// reactstrap components
import {
    Button,
    UncontrolledCollapse,
    Label,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
} from "reactstrap";



class Header extends React.Component {
    state = {};
    render() {
        return (
            <>
                <div className="cd-section" id="headers">
                    <div className="header header-1">
                        <div className="page-header header-filter">
                            <div
                                className="page-header-image"
                                style={{
                                    backgroundImage:`url('https://i.pinimg.com/564x/41/70/5d/41705d2de051a5d097b3e330b79892f5.jpg')`,
                                     filter: 'blur(8px)'
                                }}
                            />
                            <Container>
                                <Row>
                                    <Col className="mr-auto text-left mt-5" lg="5" md="7">
                                        <h6 className="category">BLK Design System</h6>
                                        <h1 className="title">
                                            You can build awesome project with this Design System!
                                        </h1>
                                        <br />
                                        <div className="buttons">
                                            <Button
                                                className="btn-round mr-3 pulse"
                                                color="primary"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                                size="lg"
                                            >
                                                <i className="tim-icons icon-delivery-fast" />
                                            </Button>
                                            <p>Watch now!</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;
