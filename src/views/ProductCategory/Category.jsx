import React from "react";

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Pagination,
    PaginationItem,
    PaginationLink,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";
import Products from "../Products/Products";

// import Products from "../Products/Products";

class Category extends React.Component {
    state = {
        activeTab: "1"
    };
    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };
    
    render() {
        return (
            <>
                <div className="cd-section" id="category">
                    <div className="pd-70">
                        <Container >
                            <Nav
                                className="nav-pills-info nav-pills-icons nav-pills-lg"
                                pills
                                role="tablist"
                            >
                                <NavItem className="m-auto">
                                    <NavLink
                                        className={this.state.activeTab === "1" ? "active" : ""}
                                        onClick={() => {
                                            this.toggle("1");
                                        }}
                                    >
                                        CBR 250RR
                                    </NavLink>
                                </NavItem>
                                <NavItem className="m-auto">
                                    <NavLink
                                        className={this.state.activeTab === "2" ? "active" : ""}
                                        onClick={() => {
                                            this.toggle("2");
                                        }}
                                    >
                                        ZX25R
                                    </NavLink>
                                </NavItem>
                                <NavItem className="m-auto">
                                    <NavLink
                                        className={this.state.activeTab === "3" ? "active" : ""}
                                        onClick={() => {
                                            this.toggle("3");
                                        }}
                                    >
                                        Yamaha R3
                                    </NavLink>
                                </NavItem>
                                <NavItem className="m-auto">
                                    <NavLink
                                        className={this.state.activeTab === "4" ? "active" : ""}
                                        onClick={() => {
                                            this.toggle("4");
                                        }}
                                    >
                                        Ninja 400
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mx-auto">
                                    <NavLink
                                        className={this.state.activeTab === "5" ? "active" : ""}
                                        onClick={() => {
                                            this.toggle("5");
                                        }}
                                    >
                                        Tất cả
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent
                                className="tab-space"
                                activeTab={"project" + this.state.activeTab}
                            >
                                <TabPane tabId="project1">
                                    <Row>
                                        <Col md="4">
                                            <Products/>
                                        </Col>
                                        <Col md="4">
                                            <Products/>
                                        </Col>
                                        <Col md="4">
                                            <Products/>
                                        </Col>
                                        <Col md="4">
                                            <Products/>
                                        </Col>
                                        <Col md="4">
                                            <Products/>
                                        </Col>
                                        <Col md="4">
                                            <Products/>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="project2">
                                    <Row>
                                        <Col md={4}>
                                            <Products/>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="project3">
                                    <div className="space-100"/>
                                    <Col className="ml-auto mr-auto text-center mt-4" md="8">
                                        <p className="description mb-5">
                                            Add your information here for Project3.
                                        </p>
                                    </Col>
                                    <div className="space-100"/>
                                </TabPane>
                                <TabPane tabId="project4">
                                    <div className="space-100"/>
                                    <Col className="ml-auto mr-auto text-center mt-4" md="8">
                                        <p className="description mb-5">
                                            Add your information here for Project4.
                                        </p>
                                    </Col>
                                    <div className="space-100"/>
                                </TabPane>
                                <TabPane tabId="project5">
                                    <div className="space-100"/>
                                    <Col className="ml-auto mr-auto text-center mt-4" md="8">
                                        <p className="description mb-5">
                                            Add your information here for Project5.
                                        </p>
                                    </Col>
                                    <div className="space-100"/>
                                </TabPane>
                            </TabContent>
                        </Container>
                    </div>
                </div>
                {" "}
            </>
        );
    }
}

export default Category;
