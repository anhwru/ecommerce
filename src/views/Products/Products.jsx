import React from "react";

// reactstrap components
import {
    Badge,
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
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Pagination,
    PaginationItem,
    PaginationLink,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip, Progress
} from "reactstrap";
import StarRatingReadOnly from "../DetailPage/StarRatingReadOnly";

// import Products from "../Products/Products";

class Products extends React.Component {
    state = {
        activeTab: "1"
    };
    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };
    
    render() {
        return (
            <>
                <div id="products">
                    <Card>
                        <div className="card-image h-100 products-img">
                            <img
                                alt="..."
                                className="img rounded"
                                src="https://znews-photo.zadn.vn/w660/Uploaded/lce_cjvcc/2020_03_28/Thumb.jpg"/>
                            <div className="add-to-wish">
                                <Button
                                    className="btn-icon btn-round ml-1"
                                    color="primary"
                                    type="button"
                                    id="tooltip104653228"
                                >
                                    <i className="tim-icons icon-heart-2"/>
                                </Button>
                                <UncontrolledTooltip
                                    delay={0}
                                    placement="left"
                                    target="tooltip104653228"
                                >
                                    Thêm vào yêu thích
                                </UncontrolledTooltip>
                            </div>
                            <Button
                                className="btn-round ml-1 add-cart"
                                color="warning"
                                type="button"
                            >
                                Mua {" "}
                                <i className="tim-icons icon-basket-simple"/>
                            </Button>
                            <Button
                                className="btn-round ml-1 views"
                                color="info"
                                type="button"
                            >
                                Xem {" "}
                                <i className="tim-icons icon-notes"/>
                            </Button>
                            <Button
                                className="btn-icon btn-round ml-1 product-discount"
                                color="danger"
                                type="button"
                            >
                                5%
                            </Button>
                        </div>
                        <CardBody className="text-left product-info">
                            <CardFooter className="mt-0">
                                <div className="stats stats-right products-star_rating">
                                    <StarRatingReadOnly/>
                                    <span className="pr-total_rate">(176)</span>
                                </div>
                                <div className="products-name">
                                    <span className="ml-1 names">CBR 250RR Quick Shifter</span>
                                    <Badge color="primary" className="ml-1">
                                        157.000.000
                                    </Badge>
                                </div>
                            </CardFooter>
                            <div className="progress-container progress-success">
                                <div className="products-progress">
                                    <Progress max="100" value="75"> </Progress>
                                </div>
                            </div>
                        
                        </CardBody>
                    </Card>
                </div>
            </>
        );
    }
}

export default Products;
