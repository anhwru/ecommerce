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

class General extends React.Component {
    state = {
        profileTabs: 1,
        tags: ["Pô SC", "Phuộc USD", "Decal"]
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
                <div className="wrapper" ref="wrapper">
                    <div>
                        <header>
                            <h2 className="text-uppercase">
                                Thông tin tài khoản
                            </h2>
                        </header>
                        <hr className="line-info"/>
                        <br/>
                        <Row>
                            <Col className="align-self-center" md="3">
                                <label className="labels" htmlFor="#firstName">
                                   Họ
                                </label>
                            </Col>
                            <Col className="align-self-center" md="9">
                                <FormGroup>
                                    <Input
                                        defaultValue="Nguyễn"
                                        id="firstName"
                                        name="firstName"
                                        required="required"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="align-self-center" md="3">
                                <label className="labels" htmlFor="#lastName">
                                   Tên
                                </label>
                            </Col>
                            <Col className="align-self-center" md="9">
                                <FormGroup>
                                    <Input
                                        defaultValue="Anh"
                                        id="lastName"
                                        name="lastName"
                                        required="required"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="align-self-center" md="3">
                                <label className="labels">Giới tính</label>
                            </Col>
                            <Col className="align-self-center" md="4">
                                <FormGroup>
                                    <Select
                                        className="react-select react-select-info"
                                        classNamePrefix="react-select"
                                        placeholder="Giới tính"
                                        value={this.state.gender}
                                        onChange={value =>
                                            this.setState({gender: value})
                                        }
                                        options={[
                                            {
                                                value: "",
                                                label: "Gender",
                                                isDisabled: true
                                            },
                                            {value: "2", label: "Nam"},
                                            {value: "3", label: "Nữ"}
                                        ]}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="align-self-center" md="3">
                                <label className="labels">Ngày sinh</label>
                            </Col>
                            <Col className="align-self-center" md="9">
                                <Row>
                                    <Col md="4">
                                        <FormGroup>
                                            <Select
                                                className="react-select react-select-info"
                                                classNamePrefix="react-select"
                                                placeholder="Ngày"
                                                value={this.state.day}
                                                onChange={value =>
                                                    this.setState({day: value})
                                                }
                                                options={[
                                                    {value: "", label: "1"},
                                                    {value: "", label: "2"},
                                                    {value: "", label: "3"},
                                                    {value: "", label: "4"},
                                                    {value: "", label: "5"},
                                                    {value: "", label: "6"},
                                                    {value: "", label: "7"},
                                                    {value: "", label: "8"},
                                                    {value: "", label: "9"},
                                                    {value: "", label: "10"},
                                                    {value: "", label: "11"},
                                                    {value: "", label: "12"},
                                                    {value: "", label: "13"},
                                                    {value: "", label: "14"},
                                                    {value: "", label: "15"},
                                                    {value: "", label: "16"},
                                                    {value: "", label: "17"},
                                                    {value: "", label: "18"},
                                                    {value: "", label: "19"},
                                                    {value: "", label: "20"},
                                                    {value: "", label: "21"},
                                                    {value: "", label: "22"},
                                                    {value: "", label: "23"},
                                                    {value: "", label: "24"},
                                                    {value: "", label: "25"},
                                                    {value: "", label: "26"},
                                                    {value: "", label: "27"},
                                                    {value: "", label: "28"},
                                                    {value: "", label: "29"},
                                                    {value: "", label: "30"},
                                                    {value: "", label: "31"}
                                                ]}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="align-self-center" md="4">
                                        <FormGroup>
                                            <Select
                                                className="react-select react-select-info"
                                                classNamePrefix="react-select"
                                                placeholder="Tháng"
                                                value={this.state.month}
                                                onChange={value =>
                                                    this.setState({month: value})
                                                }
                                                options={[
                                                    {value: "", label: "January"},
                                                    {value: "", label: "February"},
                                                    {value: "", label: "March"},
                                                    {value: "", label: "April"},
                                                    {value: "", label: "May"},
                                                    {value: "", label: "June"},
                                                    {value: "", label: "July"},
                                                    {value: "", label: "August"},
                                                    {value: "", label: "September"},
                                                    {value: "", label: "October"},
                                                    {value: "", label: "November"},
                                                    {value: "", label: "December"}
                                                ]}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Select
                                                className="react-select react-select-info"
                                                classNamePrefix="react-select"
                                                placeholder="Năm"
                                                value={this.state.year}
                                                onChange={value =>
                                                    this.setState({year: value})
                                                }
                                                options={[
                                                    {value: "", label: "1986"},
                                                    {value: "", label: "1987"},
                                                    {value: "", label: "1988"},
                                                    {value: "", label: "1989"},
                                                    {value: "", label: "1990"},
                                                    {value: "", label: "1991"},
                                                    {value: "", label: "1992"},
                                                    {value: "", label: "1993"},
                                                    {value: "", label: "1994"},
                                                    {value: "", label: "1995"},
                                                    {value: "", label: "1996"},
                                                    {value: "", label: "1997"},
                                                    {value: "", label: "1998"},
                                                    {value: "", label: "1999"},
                                                    {value: "", label: "2000"},
                                                    {value: "", label: "2001"},
                                                    {value: "", label: "2002"},
                                                    {value: "", label: "2003"},
                                                    {value: "", label: "2004"},
                                                    {value: "", label: "2005"},
                                                    {value: "", label: "2006"},
                                                    {value: "", label: "2007"},
                                                    {value: "", label: "2008"},
                                                    {value: "", label: "2009"},
                                                    {value: "", label: "2010"},
                                                    {value: "", label: "2011"},
                                                    {value: "", label: "2012"},
                                                    {value: "", label: "2013"},
                                                    {value: "", label: "2014"},
                                                    {value: "", label: "2015"},
                                                    {value: "", label: "2016"},
                                                    {value: "", label: "2017"},
                                                    {value: "", label: "2018"},
                                                    {value: "", label: "2019"}
                                                ]}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="align-self-center" md="3">
                                <label className="labels" htmlFor="#email">
                                    Email
                                </label>
                            </Col>
                            <Col className="align-self-center" md="9">
                                <FormGroup>
                                    <Input
                                        defaultValue="email@gmail.com"
                                        id="email"
                                        name="email"
                                        required="required"
                                        type="email"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="align-self-center" md="3">
                                <label className="labels" htmlFor="#location">
                                    Địa chỉ nhận hàng
                                </label>
                            </Col>
                            <Col className="align-self-center" md="9">
                                <FormGroup>
                                    <Input
                                        defaultValue="Ngõ 185 Chùa Láng - Đống Đa - Hà Nội"
                                        id="location"
                                        name="location"
                                        required="required"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="align-self-center" md="3">
                                <label className="labels" htmlFor="#phone">
                                   Số điện thoại
                                </label>
                            </Col>
                            <Col className="align-self-center" md="4">
                                <FormGroup>
                                    <Input
                                        defaultValue="0989888999"
                                        id="phone"
                                        name="phone"
                                        required="required"
                                        type="tel"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="align-self-center" md="3">
                                <label className="labels">Ngôn ngữ</label>
                            </Col>
                            <Col className="align-self-center" md="4">
                                <FormGroup>
                                    <Select
                                        className="react-select react-select-info"
                                        classNamePrefix="react-select"
                                        placeholder="Language"
                                        value={this.state.language}
                                        onChange={value =>
                                            this.setState({language: value})
                                        }
                                        options={[
                                            {value: "", label: "English"},
                                            {value: "2", label: "French"},
                                            {value: "3", label: "Spanish"},
                                            {value: "4", label: "Deutsche"},
                                            {value: "4", label: "Russian"}
                                        ]}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="align-self-center" md="3">
                                <label className="labels">Sản phẩm yêu thích</label>
                            </Col>
                            <Col className="align-self-center" md="9">
                                <TagsInput
                                    tagProps={{
                                        className: "react-tagsinput-tag bg-danger"
                                    }}
                                    value={this.state.tags}
                                    onChange={this.handleTags}
                                    onlyUnique
                                />
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col md="6">
                                <Button color="info" type="button">
                                    Lưu thay đổi
                                </Button>
                                <Button
                                    className="btn-simple ml-1"
                                    color="info"
                                    type="button"
                                >
                                    Trở lại
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}

export default General;
