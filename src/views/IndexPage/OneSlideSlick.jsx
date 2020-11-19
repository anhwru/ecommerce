import React from "react";
// ReactJS plugin for a nice carousel
import Slick from "react-slick";
// reactstrap components
import {
    Button,
    Container,
    Row,
    Col,
} from "reactstrap";
import Products from "../Products/Products";

// core components

// custom previous button for the slick component
const PrevButton = props => {
    return (
        <Button
            className="btn-round btn-icon btn-simple slick-prev slick-arrow"
            color="primary"
            aria-label="Previous"
            type="button"
            onClick={props.onClick}
        >
            <i className="tim-icons icon-minimal-left" />
        </Button>
    );
};
// custom next button for the slick component
const NextButton = props => {
    return (
        <Button
            className="btn-round btn-icon btn-simple slick-next slick-arrow"
            color="primary"
            aria-label="Next"
            type="button"
        >
            <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
        </Button>
    );
};

let slickSettings = {
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    className: "center slider",
    slide: "section",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
};

class OneSlideSlick extends React.Component {
    state = {
        carousel1Index: 0,
        carousel2Index: 0
    };
    onExiting = carousel => {
        this["carousel" + carousel + "Animating"] = true;
    };
    
    onExited = carousel => {
        this["carousel" + carousel + "Animating"] = false;
    };
    next = (carousel, items) => {
        if (this["carousel" + carousel + "Animating"]) return;
        const nextIndex =
            this.state["carousel" + carousel + "Index"] === items.length - 1
                ? 0
                : this.state["carousel" + carousel + "Index"] + 1;
        this.setState({ ["carousel" + carousel + "Index"]: nextIndex });
    };
    previous = (carousel, items) => {
        if (this["carousel" + carousel + "Animating"]) return;
        const nextIndex =
            this.state["carousel" + carousel + "Index"] === 0
                ? items.length - 1
                : this.state["carousel" + carousel + "Index"] - 1;
        this.setState({ ["carousel" + carousel + "Index"]: nextIndex });
    };
    goToIndex = (newIndex, carousel) => {
        if (this["carousel" + carousel + "Animating"]) return;
        this.setState({ ["carousel" + carousel + "Index"]: newIndex });
    };
    render() {
        return (
            <>
                <div id="testimonials" className="my-section">
                    <div className="testimonials-4">
                        <Container fluid>
                            <Row>
                                <Col className="positioned" lg="4" md="8" xs="10">
                                    <h1 className="title">See our customers opinion</h1>
                                    <p className="description text-white">
                                        Meet Wingman, a robust suite of styled pages and components,
                                        powered by Bootstrap 4. The ideal starting point for product
                                        landing pages, stylish web-apps and complete company
                                        websites.
                                    </p>
                                    <Button
                                        color="info"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                        size="lg"
                                    >
                                        Xem ngay
                                    </Button>
                                </Col>
                                <Col md="12">
                                    <Slick {...slickSettings}>
                                        <div>
                                            <div className="info text-left">
                                                <Products/>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="info text-left">
                                                <Products/>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="info text-left">
                                                <Products/>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="info text-left">
                                                <Products/>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="info text-left">
                                                <Products/>
                                            </div>
                                        </div>
                                    </Slick>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </>
        );
    }
}

export default OneSlideSlick;
