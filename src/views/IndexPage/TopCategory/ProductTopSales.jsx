import React from "react";

// reactstrap components
import {
    Card,
    CardBody,
    CardFooter, Col,
} from "reactstrap";

class ProductTopSales extends React.Component {
    
    render() {
        return (
            <>
                <Card className="card-3">
                    <div className="card-image h-100">
                        <img
                            alt="..."
                            className="img rounded"
                            src="https://s3.amazonaws.com/creativetim_bucket/products/83/thumb/opt_mk_react_thumbnail.jpg?1525851474"
                        />
                    </div>
                    <CardBody className="text-left">
                        <CardFooter className="mt-0">
                            <div className="author text-center title-pr">
                                <span className="ml-1">
                                Black Dashboard React
                              </span>
                            </div>
                            <div className="stats stats-right">
                                <div className="stars text-warning">
                                    <i className="tim-icons icon-shape-star"/>
                                    <i className="tim-icons icon-shape-star ml-1"/>
                                    <i className="tim-icons icon-shape-star ml-1"/>
                                    <i className="tim-icons icon-shape-star ml-1"/>
                                    <i className="tim-icons icon-shape-star ml-1"/>
                                </div>
                            </div>
                            {/*<div className="stats stats-right">*/}
                            {/*    <i className="tim-icons icon-heart-2 text-danger"/>{" "}*/}
                            {/*    342 ·{" "}*/}
                            {/*    <i className="tim-icons icon-single-copy-04 text-info"/>{" "}*/}
                            {/*    43*/}
                            {/*</div>*/}
                        </CardFooter>
                    </CardBody>
                </Card>
            </>
        );
    }
}

export default ProductTopSales;
