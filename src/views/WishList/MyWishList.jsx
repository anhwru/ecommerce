import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Table,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    UncontrolledAlert,
} from "reactstrap";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {deleteProductInWishProduct} from "../../Redux/actions/WishProductAction";

class MyWishList extends React.Component {
    state = {
        alert: null,
    };
    
    handleDeleteProduct = (username, idProduct) => {
        this.props
            .deleteProductInWishProduct(username, idProduct)
            .then(() => {
                this.setState({
                    alert: (
                        <UncontrolledAlert
                            className="alert-with-icon my-alert"
                            color="success"
                        >
                            <span data-notify="icon" className="tim-icons icon-check-2"/>
                            <span>
                                <b>Thành công</b>
                                Sản phẩm đã được loại khỏi danh sách yêu thích
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
                                <b>Thất bại ! </b>
                                Loại bỏ sản phẩm khỏi yêu thích chưa thể thực hiện bây giờ
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
        let {
            wishProduct: {listProduct},
            user,
        } = this.props;
        let {alert} = this.state;
        return (
            <>
                {alert}
                {!listProduct && <Redirect to="/empty-wishlist"/>}
                <div className="section" id="my-cart">
                    <Container>
                        <div className="space-70"/>
                        <div id="tables">
                            <Row>
                                <Col md="12">
                                    <Card className="card-plain">
                                        <CardHeader>
                                            <h3 tag="h3">Sản phẩm yêu thích</h3>
                                        </CardHeader>
                                        <CardBody>
                                            <Table className="tablesorter table-shopping" responsive>
                                                <thead>
                                                <tr>
                                                    <th className="text-left">Ảnh mô tả</th>
                                                    <th>Sản phẩm</th>
                                                    <th className="text-right">Giá</th>
                                                    <th className="text-center">Trạng thái</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {listProduct.map((product, index) => {
                                                    return (
                                                        <tr>
                                                            <td>
                                                                <div className="img-container">
                                                                    <img alt="..." src={product.image}/>
                                                                </div>
                                                            </td>
                                                            <td className="td-name">
                                                                <Link to="product-detail/:id">
                                                                    {product.name}
                                                                </Link>
                                                                {/* <br />
                                  <small>by Saint Laurent</small> */}
                                                            </td>
                                                            <td className="td-number">
                                                                {product.price}
                                                                <small> ₫</small>
                                                            </td>
                                                            <td className="text-center">
                                                                {product.status === 1 ? (
                                                                    <Button color="success">Còn hàng</Button>
                                                                ) : (
                                                                    <Button color="danger">Hét hàng</Button>
                                                                )}
                                                            </td>
                                                            <td className="td-actions">
                                                                <Button
                                                                    className="btn-link"
                                                                    color="danger"
                                                                    id="tooltip653500052"
                                                                    type="button"
                                                                    onClick={() => {
                                                                        this.handleDeleteProduct(
                                                                            user.username,
                                                                            product.id
                                                                        );
                                                                    }}
                                                                >
                                                                    <i className="tim-icons icon-simple-remove"/>
                                                                </Button>
                                                                <UncontrolledTooltip
                                                                    delay={0}
                                                                    placement="left"
                                                                    target="tooltip653500052"
                                                                >
                                                                    Xoá khỏi yêu thích
                                                                </UncontrolledTooltip>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                                </tbody>
                                            </Table>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    wishProduct: state.wishProduct,
});

export default connect(mapStateToProps, {deleteProductInWishProduct})(
    MyWishList
);
