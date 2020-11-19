import React from "react";
import {
    UncontrolledCarousel
} from "reactstrap";

const carouselItems = [
    {
        src: require("assets/img/slider1.png"),
        altText: "Slide 1",
        caption: ""
    },
    {
        src: require("assets/img/slider2.png"),
        altText: "Slide 2",
        caption: ""
    },
    {
        src: require("assets/img/slider3.png"),
        altText: "Slide 3",
        caption: ""
    }
];

class Carousel extends React.Component {
    state = {
        visible: true,
        modalMini: false,
        modalClassic: false,
        modalNotice: false,
        modalLogin: false,
        openedCollapses: ["collapseOne"]
    };
    toggleModalClassic = () => {
        this.setState({
            modalClassic: !this.state.modalClassic
        });
    };
    collapsesToggle = collapse => {
        let openedCollapses = this.state.openedCollapses;
        if (openedCollapses.includes(collapse)) {
            this.setState({
                openedCollapses: this.state.openedCollapses.filter(
                    prop => prop !== collapse
                )
            });
        } else {
            this.setState({
                openedCollapses: [...this.state.openedCollapses, collapse]
            });
        }
    };
    render() {
        return (
            <>
                <UncontrolledCarousel
                    items={carouselItems}
                    indicators={true}
                />
            </>
        );
    }
}

export default Carousel;
