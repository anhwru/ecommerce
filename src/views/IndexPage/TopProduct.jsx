import React from "react";

// reactstrap components
import {Badge, Button, Container, Row, Col} from "reactstrap";

class TopProduct extends React.Component {
    render() {
        return (
            <>
                <div className="section" id="features">
                    <div className="section" >
                        <div className=" info-primary top-product">
                            <div className="icon icon-white">
                                <i className="tim-icons icon-satisfied"/>
                            </div>
                            <h4 className="info-title">Best Quality</h4>
                            <p className="description">
                                Gain access to the demographics, psychographics, and
                                location of unique people.
                            </p>
                        </div>
                        <div className="info-primary top-product">
                            <div className="icon icon-white">
                                <i className="tim-icons icon-user-run"/>
                            </div>
                            <h4 className="info-title">Fast Development</h4>
                            <p className="description">
                                Gain access to the demographics, psychographics, and
                                location of unique people.
                            </p>
                        </div>
                    </div>
                </div>
                {" "}
            </>
        );
    }
}

export default TopProduct;
