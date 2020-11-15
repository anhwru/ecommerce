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

class Suggestion extends React.Component {
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
                        <Container>
                            <Row>
                                <Col md="3">
                                    <Products/>
                                </Col>
                                <Col md="3">
                                    <Products/>
                                </Col>
                                <Col md="3">
                                    <Products/>
                                </Col>
                                <Col md="3">
                                    <Products/>
                                </Col>
                                <Col md="3">
                                    <Products/>
                                </Col>
                                <Col md="3">
                                    <Products/>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </>
        );
    }
}

export default Suggestion;
