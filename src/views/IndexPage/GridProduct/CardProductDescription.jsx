import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Table,
    Container,
    Row,
    Col
} from "reactstrap";

class CardProductDescription extends React.Component {
    render() {
        return (
            <>
                <Card className="card-profile profile-bg pr_with_description">
                    <CardHeader className="cd"
                        style={{
                            backgroundImage:`url("https://menback.com/wp-content/uploads/2019/08/c%C3%A1c-ki%E1%BB%83u-%C3%A1o-thun-nam-kinh-%C4%91i%E1%BB%83n-ph%E1%BA%A3i-c%C3%B3-trong-t%E1%BB%A7-%C4%91%E1%BB%93-c%E1%BB%A7a-%C4%91%C3%A0n-%C3%B4ng.jpg")`
                        }}
                    >
                    </CardHeader>
                    <CardBody>
                        <CardTitle tag="h3">Áo da Gucci</CardTitle>
                        <h6 className="category text-primary">Data Specialist</h6>
                        <p className="card-description">
                            Scaling DevOps: Strategy &amp; Technical Considerations
                            for Successful Enterprise DevOps
                        </p>
                    </CardBody>
                    <CardFooter>
                        <div className="follow float-left">
                            <Button
                                className="btn-simple"
                                color="primary"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                                size="sm"
                            >
                                <i className="tim-icons icon-cart mr-1"/>
                                Mua ngay
                            </Button>
                        </div>
                        <div className="d-inline float-right">
                            <Button className="btn-round" color="primary" size="sm">
                                <i className="tim-icons icon-heart-2" /> Thêm vào yêu thích
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </>
        );
    }
}

export default CardProductDescription;
