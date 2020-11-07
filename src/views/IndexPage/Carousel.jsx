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
    Container,
    Row,
    Col,
    UncontrolledCarousel
} from "reactstrap";

// core components

const carouselItems = [
    {
        src: 'https://i.pinimg.com/originals/4d/89/d1/4d89d151ed0d759f0ffaa479d5f2046e.jpg',
        altText: "Slide 1",
        caption: ""
    },
    {
        src: 'http://kitestudio.co/pinkmart-demo25/wp-content/uploads/sites/37/2020/06/sofa-slider.jpg',
        altText: "Slide 2",
        caption: ""
    },
    {
        src: 'http://kitestudio.co/pinkmart-demo25/wp-content/uploads/sites/37/2020/06/jacket-slider2.jpg',
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
    toggleModalLogin = () => {
        this.setState({
            modalLogin: !this.state.modalLogin
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
                <div className="section section-javascript" id="javascriptComponents">
                    <div className="section">
                        <UncontrolledCarousel
                            items={carouselItems}
                            indicators={true}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default Carousel;
