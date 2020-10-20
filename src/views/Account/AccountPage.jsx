import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// react plugin that creates an input with badges
import TagsInput from "react-tagsinput";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

// reactstrap components
import {
    Alert,
    Button,
    Label,
    FormGroup,
    Form,
    Input,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    TabContent,
    TabPane,
    Container,
    Row,
    Col, Card, CardHeader, CardImg, CardTitle, CardBody, InputGroup, InputGroupAddon, InputGroupText, CardFooter
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.jsx";
import DemoFooter from "components/Footers/DemoFooter.jsx";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";
import MyFooter from "../IndexPage/Footer";
import ResetPassWord from "./ResetPassWord";
import InvoicePages from "../InvoicePage/InvoicePage";
import Invoice from "../InvoicePage/Invoice";
import Chat from "./Chat";
import General from "./General";

class AccountPage extends React.Component {
    state = {
        profileTabs: 1,
        tags: ["HTML5", "CSS3", "JavaScript", "React"]
    };
    
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.wrapper.scrollTop = 0;
        document.body.classList.add("account-settings");
    }
    
    componentWillUnmount() {
        document.body.classList.remove("account-settings");
    }
    
    toggleTabs = (e, stateName, index) => {
        e.preventDefault();
        this.setState({
            [stateName]: index
        });
    };
    handleTags = regularTags => {
        this.setState({tags: regularTags});
    };
    
    render() {
        return (
            <>
                <ColorNavbar/>
                <div className="wrapper" ref="wrapper">
                    <div className="section">
                        <Container>
                            <Row>
                                <Col md="3">
                                    <div className="section">
                                        {/* User Information */}
                                        <section className="text-center">
                                            <ImageUpload avatar addBtnColor="default"/>
                                            <h3 className="title">Nguyễn Anh</h3>
                                        </section>
                                        {/* User Information */}
                                        {/* Profile Sidebar */}
                                        <section>
                                            <br/>
                                            <Nav className="flex-column nav-tabs-info" role="tablist">
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({
                                                            active: this.state.profileTabs === 1
                                                        })}
                                                        onClick={e => this.toggleTabs(e, "profileTabs", 1)}
                                                        href="#pablo"
                                                    >
                                                        <i className="tim-icons icon-single-02"/> Thông tin
                                                    </NavLink>
                                                </NavItem>
                                                <hr className="line-info"/>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({
                                                            active: this.state.profileTabs === 2
                                                        })}
                                                        onClick={e => this.toggleTabs(e, "profileTabs", 2)}
                                                        href="#pablo"
                                                    >
                                                        <i className="tim-icons icon-credit-card"/> Hoá đơn
                                                    </NavLink>
                                                </NavItem>
                                                <hr className="line-info"/>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({
                                                            active: this.state.profileTabs === 3
                                                        })}
                                                        onClick={e => this.toggleTabs(e, "profileTabs", 3)}
                                                        href="#pablo"
                                                    >
                                                        <i className="tim-icons icon-lock-circle"/>{" "}
                                                        Đổi mật khẩu
                                                    </NavLink>
                                                </NavItem>
                                                <hr className="line-info"/>
                                            </Nav>
                                        </section>
                                        {/* End Profile Sidebar */}
                                        {/* Profile Completion */}
                                        <br/>
                                        <br/>
                                        <br/>
                                        {/* End Profile Completion */}
                                    </div>
                                </Col>
                                <Col className="ml-auto" md="8">
                                    <div className="section">
                                        <TabContent activeTab={"profile" + this.state.profileTabs}>
                                            <TabPane tabId="profile1">
                                                <General/>
                                            </TabPane>
                                            <TabPane tabId="profile2">
                                                <div id="tab_invoice">
                                                    <Invoice/>
                                                </div>
                                            </TabPane>
                                            <TabPane tabId="profile3">
                                                <div id="tab-change_pass">
                                                    <ResetPassWord/>
                                                </div>
                                            </TabPane>
                                            <TabPane tabId="profile4">
                                                {/*<Chat/>*/}
                                            </TabPane>
                                        </TabContent>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <MyFooter/>
            </>
        );
    }
}

export default AccountPage;
