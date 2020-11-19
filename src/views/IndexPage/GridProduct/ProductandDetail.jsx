import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
} from "reactstrap";

class ProductandDetail extends React.Component {
    render() {
        return (
            <>
                    <Card className="card-blog c1">
                        <div className="card-image">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img style={{objectFit: "none"}}
                                    alt="..."
                                    className="img rounded"
                                    src="https://i.pinimg.com/originals/02/64/a9/0264a96a8ce2c16873a9834ef219305b.jpg"
                                />
                            </a>
                        </div>
                        <CardBody className="text-center">
                            <h6 className="category text-danger">
                                <i className="tim-icons icon-sound-wave mr-1" />
                                Business
                            </h6>
                            <CardTitle tag="h5">
                                Axel Springer Spends $343M To Buy Business Insider
                            </CardTitle>
                            <p className="card-description">
                                German media giant Axel Springer has announced it’s
                                acquiring online business news publication Business
                                Inside...
                            </p>
                            <CardFooter>
                                <Button className="btn-round"
                                    color="primary"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    Xem chi tiết
                                </Button>
                            </CardFooter>
                        </CardBody>
                    </Card>
            </>
        );
    }
}

export default ProductandDetail;
