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
    UncontrolledAlert,
    UncontrolledTooltip,
    Progress,
} from "reactstrap";
import StarRatingReadOnly from "../DetailPage/StarRatingReadOnly";
import {connect} from "react-redux";
import {addProductToCart} from "../../Redux/actions/CartAction";
import {addProductToWishProduct} from "../../Redux/actions/WishProductAction";

// import Products from "../Products/Products";

class Products extends React.Component {
    state = {
        activeTab: "1",
        idProduct: 1,
        alert: null,
    };
    
    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    };
    
    handleAddProductToCart = (username, idProduct) => {
        this.props
            .addProductToCart(username, idProduct)
            .then(() => {
                this.setState({
                    alert: (
                        <UncontrolledAlert
                            className="alert-with-icon my-alert"
                            color="success"
                        >
                            <span data-notify="icon" className="tim-icons icon-check-2"/>
                            <span>
                <b>Well done! - </b>
                Thêm vào giỏ hàng thành công
              </span>
                        </UncontrolledAlert>
                    ),
                });
                setTimeout(() => {
                    this.setState({alert: null});
                }, 3000);
            })
            .catch(() => {
                this.setState({
                    alert: (
                        <UncontrolledAlert
                            className="alert-with-icon my-alert"
                            color="danger">
                            <span data-notify="icon" className="tim-icons icon-alert-circle-exc"/>
                            <span>
                                <b>Lỗi ! </b>
                                Sản phẩm chưa được thêm vào giỏ hàng
                            </span>
                        </UncontrolledAlert>
                    ),
                });
                setTimeout(() => {
                    this.setState({alert: null});
                }, 3000);
            });
    };
    
    handleAddProductToWishProduct = (username, idProduct) => {
        this.props
            .addProductToWishProduct(username, idProduct)
            .then(() => {
                this.setState({
                    alert: (
                        <UncontrolledAlert
                            className="alert-with-icon my-alert"
                            color="success">
                            <span data-notify="icon" className="tim-icons icon-check-2"/>
                            <span>
                                <b>Thành công ! </b>
                                Sản phẩm đã được thêm vào danh sách yêu thích
                            </span>
                        </UncontrolledAlert>
                    ),
                });
                setTimeout(() => {
                    this.setState({alert: null});
                }, 3000);
            })
            .catch(() => {
                this.setState({
                    alert: (
                        <UncontrolledAlert
                            className="alert-with-icon my-alert"
                            color="danger"
                        >
                            <span data-notify="icon" className="tim-icons icon-alert-circle-exc"/>
                            <span>
                                <b>Lỗi ! </b>
                                Sản phẩm chưa được thêm vào danh sách yêu thích
                            </span>
                        </UncontrolledAlert>
                    ),
                });
                setTimeout(() => {
                    this.setState({alert: null});
                }, 3000);
            });
    };
    
    render() {
        let {user} = this.props;
        let {idProduct, alert} = this.state;
        return (
            <>
                <div id="products">
                    <Card>
                        <div className="card-image h-100 products-img">
                            <img
                                alt="..."
                                className="img rounded"
                                src="https://znews-photo.zadn.vn/w660/Uploaded/lce_cjvcc/2020_03_28/Thumb.jpg"
                            />
                            <div className="add-to-wish">
                                <Button
                                    className="btn-icon btn-round ml-1"
                                    color="primary"
                                    type="button"
                                    id="tooltip104653228"
                                    onClick={() =>
                                        this.handleAddProductToWishProduct(user.username, idProduct)
                                    }
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
                                onClick={() =>
                                    this.handleAddProductToCart(user.username, idProduct)
                                }
                            >
                                Mua <i className="tim-icons icon-basket-simple"/>
                            </Button>
                            <Button
                                className="btn-round ml-1 views"
                                color="info"
                                type="button"
                            >
                                Xem <i className="tim-icons icon-notes"/>
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
                                    <p style={{display: "flex"}}>
                                        <span className="afterDiscount">157.000.000</span>
                                        <strike className="beforeDiscount"> 168.000.000 </strike>
                                    </p>
                                </div>
                            </CardFooter>
                            <div className="progress-container progress-success">
                                <div className="products-progress">
                                    <Progress max="100" value="75">
                                        {" "}
                                    </Progress>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                {alert}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
});

export default connect(mapStateToProps, {
    addProductToCart,
    addProductToWishProduct,
})(Products);
