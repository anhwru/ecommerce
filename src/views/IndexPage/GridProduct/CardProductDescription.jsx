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
                            backgroundImage:`url("https://product.hstatic.net/1000078312/product/biker-jacket-bk01_master.jpg")`
                            
                                
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
                                <i className="tim-icons icon-check-2 mr-1"/>
                                Following
                            </Button>
                        </div>
                        <div className="d-inline float-right">
                            <Button
                                className="btn-icon btn-round"
                                color="dribbble"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                <i className="fab fa-dribbble"/>
                            </Button>
                            <Button
                                className="btn-icon btn-round ml-1"
                                color="linkedin"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                <i className="fab fa-linkedin"/>
                            </Button>
                            <Button
                                className="btn-icon btn-round ml-1"
                                color="behance"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                <i className="fab fa-behance"/>
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </>
        );
    }
}

export default CardProductDescription;
