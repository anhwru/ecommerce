/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    UncontrolledCollapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
} from "reactstrap";

class MyNavbar extends React.Component {
    render() {
        return (
            <>
                <div className="section section-navbars">
                    <Container id="menu-dropdown">
                        <Row>
                            <Col md="6">
                                <h4>Menu</h4>
                                <Navbar className="bg-primary" expand="lg">
                                    <Container>
                                        <NavbarBrand
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Icons
                                        </NavbarBrand>
                                        <button
                                            className="navbar-toggler"
                                            id="example-navbar-icons-1"
                                        >
                                            <span className="navbar-toggler-bar bar1"/>
                                            <span className="navbar-toggler-bar bar2"/>
                                            <span className="navbar-toggler-bar bar3"/>
                                        </button>
                                        <UncontrolledCollapse
                                            navbar
                                            toggler="#example-navbar-icons-1"
                                        >
                                            <div className="navbar-collapse-header">
                                                <Row>
                                                    <Col className="collapse-brand" xs="6">
                                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                                            BLK• <span>PRO React</span>
                                                        </a>
                                                    </Col>
                                                    <Col className="collapse-close text-right" xs="6">
                                                        <button
                                                            className="navbar-toggler"
                                                            id="example-navbar-icons-1"
                                                        >
                                                            <i className="tim-icons icon-simple-remove"/>
                                                        </button>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <Nav className="ml-auto" navbar>
                                                <NavItem>
                                                    <NavLink
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        <i
                                                            aria-hidden={true}
                                                            className="tim-icons icon-send"
                                                        />
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        <i
                                                            aria-hidden={true}
                                                            className="tim-icons icon-single-02"
                                                        />
                                                    </NavLink>
                                                </NavItem>
                                                <UncontrolledDropdown nav>
                                                    <DropdownToggle
                                                        caret
                                                        color="default"
                                                        data-toggle="dropdown"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                        id="navbarDropdownMenuLink"
                                                        nav
                                                    >
                                                        <i
                                                            aria-hidden={true}
                                                            className="tim-icons icon-settings-gear-63"
                                                        />
                                                    </DropdownToggle>
                                                    <DropdownMenu right>
                                                        <DropdownItem header>Dropdown header</DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            Action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            Another action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            Something else here
                                                        </DropdownItem>
                                                        <div className="divider"/>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            Separated link
                                                        </DropdownItem>
                                                        <div className="divider"/>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            One more separated link
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </Nav>
                                        </UncontrolledCollapse>
                                    </Container>
                                </Navbar>
                            </Col>
                            <Col md="6">
                                <h4>Menu with Icons</h4>
                                <Navbar className="bg-info" expand="lg">
                                    <Container>
                                        <NavbarBrand
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Icons
                                        </NavbarBrand>
                                        <button
                                            className="navbar-toggler"
                                            id="example-navbar-icons-2"
                                        >
                                            <span className="navbar-toggler-bar bar1"/>
                                            <span className="navbar-toggler-bar bar2"/>
                                            <span className="navbar-toggler-bar bar3"/>
                                        </button>
                                        <UncontrolledCollapse
                                            navbar
                                            toggler="#example-navbar-icons-2"
                                        >
                                            <div className="navbar-collapse-header">
                                                <Row>
                                                    <Col className="collapse-brand" xs="6">
                                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                                            BLK• <span>PRO React</span>
                                                        </a>
                                                    </Col>
                                                    <Col className="collapse-close text-right" xs="6">
                                                        <button
                                                            className="navbar-toggler"
                                                            id="example-navbar-icons-2"
                                                        >
                                                            <i className="tim-icons icon-simple-remove"/>
                                                        </button>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <Nav className="ml-auto" navbar>
                                                <NavItem>
                                                    <NavLink
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        <i
                                                            aria-hidden={true}
                                                            className="tim-icons icon-send"
                                                        />
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        <i
                                                            aria-hidden={true}
                                                            className="tim-icons icon-single-02"
                                                        />
                                                    </NavLink>
                                                </NavItem>
                                                <UncontrolledDropdown nav>
                                                    <DropdownToggle
                                                        caret
                                                        color="default"
                                                        data-toggle="dropdown"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                        id="navbarDropdownMenuLink"
                                                        nav
                                                    >
                                                        <i
                                                            aria-hidden={true}
                                                            className="tim-icons icon-settings-gear-63"
                                                        />
                                                    </DropdownToggle>
                                                    <DropdownMenu right>
                                                        <DropdownItem header>Dropdown header</DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            Action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            Another action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            Something else here
                                                        </DropdownItem>
                                                        <div className="divider"/>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            Separated link
                                                        </DropdownItem>
                                                        <div className="divider"/>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            One more separated link
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </Nav>
                                        </UncontrolledCollapse>
                                    </Container>
                                </Navbar>
                            </Col>
                        </Row>
                        <h3 className="title mb-3">Navigation</h3>
                    </Container>
                    <div id="navbar">
                        <div className="navigation-example">
                            <Navbar className="bg-primary" expand="lg">
                                <Container>
                                    <div className="navbar-translate">
                                        <NavbarBrand
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Primary color
                                        </NavbarBrand>
                                        <button
                                            className="navbar-toggler"
                                            id="example-navbar-primary"
                                        >
                                            <span className="navbar-toggler-bar bar1"/>
                                            <span className="navbar-toggler-bar bar2"/>
                                            <span className="navbar-toggler-bar bar3"/>
                                        </button>
                                    </div>
                                    <UncontrolledCollapse
                                        navbar
                                        toggler="#example-navbar-primary"
                                    >
                                        <div className="navbar-collapse-header">
                                            <Row>
                                                <Col className="collapse-brand" xs="6">
                                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                                        BLK• <span>PRO React</span>
                                                    </a>
                                                </Col>
                                                <Col className="collapse-close text-right" xs="6">
                                                    <button
                                                        className="navbar-toggler"
                                                        id="example-navbar-primary"
                                                    >
                                                        <i className="tim-icons icon-simple-remove"/>
                                                    </button>
                                                </Col>
                                            </Row>
                                        </div>
                                        <Nav className="ml-auto" navbar>
                                            <NavItem className="active">
                                                <NavLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="tim-icons icon-world"/>
                                                    Discover
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="tim-icons icon-single-02"/>
                                                    Profile
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="tim-icons icon-settings-gear-63"/>
                                                    Settings
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </UncontrolledCollapse>
                                </Container>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MyNavbar;
