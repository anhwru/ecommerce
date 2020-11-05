import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// ReactJS plugin for a nice carousel
import Slick from "react-slick";
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
import PreFooter from "./PreFooter";

// core components
let slickHeader2Settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    className: "customer-logos",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

class Partner extends React.Component {
    state = {};
    render() {
        return (
            <>
                <div className="cd-section" id="headers">
                    <div className="header header-2">
                        <div className="page-header header-filter">
                            <div
                                className="page-header-image"
                                style={{
                                    backgroundImage:
                                        "url(" + require("assets/img/matt-palmer.jpg") + ")"
                                }}
                            />
                            <Container>
                                <Row className="text-left">
                                    <Col md="12" xs="12">
                                        <PreFooter/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Slick {...slickHeader2Settings}>
                                        <div className="slide">
                                            <img
                                                alt="..."
                                                src="https://www.solodev.com/assets/carousel/image1.png"
                                            />
                                        </div>
                                        <div className="slide">
                                            <img
                                                alt="..."
                                                src="https://www.solodev.com/assets/carousel/image2.png"
                                            />
                                        </div>
                                        <div className="slide">
                                            <img
                                                alt="..."
                                                src="https://www.solodev.com/assets/carousel/image3.png"
                                            />
                                        </div>
                                        <div className="slide">
                                            <img
                                                alt="..."
                                                src="https://www.solodev.com/assets/carousel/image4.png"
                                            />
                                        </div>
                                        <div className="slide">
                                            <img
                                                alt="..."
                                                src="https://www.solodev.com/assets/carousel/image5.png"
                                            />
                                        </div>
                                        <div className="slide">
                                            <img
                                                alt="..."
                                                src="https://www.solodev.com/assets/carousel/image6.png"
                                            />
                                        </div>
                                        <div className="slide">
                                            <img
                                                alt="..."
                                                src="https://www.solodev.com/assets/carousel/image7.png"
                                            />
                                        </div>
                                        <div className="slide">
                                            <img
                                                alt="..."
                                                src="https://www.solodev.com/assets/carousel/image8.png"
                                            />
                                        </div>
                                    </Slick>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>{" "}
            </>
        );
    }
}

export default Partner;
