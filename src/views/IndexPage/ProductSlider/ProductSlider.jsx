import React from "react";
// ReactJS plugin for a nice carousel
import Slick from "react-slick";

// reactstrap components
import {
    Button,
} from "reactstrap";

// core components
import Products from "../../Products/Products";

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
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    className: "slider col-md-8 ml-auto mr-auto",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 786,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
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

class ProductSlider extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.wrapper.scrollTop = 0;
        document.body.classList.add("blog-post");
    }
    componentWillUnmount() {
        document.body.classList.remove("blog-post");
    }
    render() {
        return (
            <>
                <div className="my-section" ref="wrapper" id='slick_product'>
                    <Slick {...slickSettings}>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                    </Slick>
                </div>
            </>
        );
    }
}

export default ProductSlider;
