import React from "react";

// reactstrap components
import {
    Card,
    CardBody,
    CardTitle,
} from "reactstrap";

class CategoryBackground extends React.Component {
    
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
        this.setState({["carousel" + carousel + "Index"]: nextIndex});
    };
    previous = (carousel, items) => {
        if (this["carousel" + carousel + "Animating"]) return;
        const nextIndex =
            this.state["carousel" + carousel + "Index"] === 0
                ? items.length - 1
                : this.state["carousel" + carousel + "Index"] - 1;
        this.setState({["carousel" + carousel + "Index"]: nextIndex});
    };
    
    render() {
        return (
            <>
                <Card
                    className="card-blog card-background mgt-0"
                    data-animation={true}
                >
                    <div
                        className="full-background"
                        style={{
                            backgroundImage:
                                "url(" +
                                "https://ohmygiay.vn/wp-content/uploads/2020/07/1594029027_663_Ao-thun-Vans-%E2%80%93-Thiet-ke-voi-form-dang-basic.jpg" +
                                ")"
                        }}
                    />
                    <CardBody>
                        <div className="content-bottom">
                            <h6 className="card-category">Footwear</h6>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                <CardTitle tag="h3">Leather Shoes</CardTitle>
                            </a>
                        </div>
                    </CardBody>
                </Card>
            </>
        );
    }
}

export default CategoryBackground;
