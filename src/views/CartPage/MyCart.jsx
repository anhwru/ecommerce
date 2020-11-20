import React from "react";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledAlert,
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  deleteProductInCart,
  updateProductInCart,
} from "../../Redux/actions/CartAction";

class MyCart extends React.Component {
  state = {
    alert: null,
  };

  sumTotal = (listProduct) => {
    let sum = 0;
    listProduct.forEach((product) => {
      sum += product.price * product.num;
    });
    return sum;
  };

  handleDeleteProduct = (username, idProduct) => {
    this.props
      .deleteProductInCart(username, idProduct)
      .then(() => {
        this.setState({
          alert: (
            <UncontrolledAlert
              className="alert-with-icon my-alert"
              color="success"
            >
              <span data-notify="icon" className="tim-icons icon-bell-55" />
              <span>
                <b>Well done! - </b>
                Sản phẩm đã được xóa khỏi giỏ hàng
              </span>
            </UncontrolledAlert>
          ),
        });
        setTimeout(() => {
          this.setState({ alert: null });
        }, 3000);
      })
      .catch(() => {
        this.setState({
          alert: (
            <UncontrolledAlert
              className="alert-with-icon my-alert"
              color="danger"
            >
              <span data-notify="icon" className="tim-icons icon-support-17" />
              <span>
                <b>Error! - </b>
                Đã xảy ra lỗi
              </span>
            </UncontrolledAlert>
          ),
        });
        setTimeout(() => {
          this.setState({ alert: null });
        }, 3000);
      });
  };

  handleChangeNumProduct = (type, idProduct, num) => {
    if (type === "+") {
      ++num;
      this.props
        .updateProductInCart(this.props.user.username, idProduct, num)
        .then()
        .catch(() => {
          this.setState({
            alert: (
              <UncontrolledAlert
                className="alert-with-icon my-alert"
                color="danger"
              >
                <span
                  data-notify="icon"
                  className="tim-icons icon-support-17"
                />
                <span>
                  <b>Error! - </b>
                  Đã xảy ra lỗi
                </span>
              </UncontrolledAlert>
            ),
          });
          setTimeout(() => {
            this.setState({ alert: null });
          }, 3000);
        });
    }
    if (type === "-" && num > 1) {
      --num;
      this.props
        .updateProductInCart(this.props.user.username, idProduct, num)
        .catch(() => {
          this.setState({
            alert: (
              <UncontrolledAlert
                className="alert-with-icon my-alert"
                color="danger"
              >
                <span
                  data-notify="icon"
                  className="tim-icons icon-support-17"
                />
                <span>
                  <b>Error! - </b>
                  Đã xảy ra lỗi
                </span>
              </UncontrolledAlert>
            ),
          });
          setTimeout(() => {
            this.setState({ alert: null });
          }, 3000);
        });
    }
  };

  render() {
    let {
      cart: { listProduct },
      user,
    } = this.props;
    let { alert } = this.state;
    return (
      <>
        {alert}
        {!listProduct && <Redirect to="/empty-cart" />}
        <div className="section" id="my-cart">
          <Container>
            <div className="space-70" />
            <div id="tables">
              <Row>
                <Col md="12">
                  <Card className="card-plain">
                    <CardHeader>
                      <h3 tag="h3">Giỏ hàng</h3>
                    </CardHeader>
                    <CardBody>
                      <Table className="tablesorter table-shopping" responsive>
                        <thead>
                          <tr>
                            <th className="text-center" />
                            <th>Sản phẩm</th>
                            <th>Màu</th>
                            <th>Loại/Size</th>
                            <th className="text-right">Giá</th>
                            <th className="text-right">Số lượng</th>
                            <th className="text-center">Thành tiền</th>
                          </tr>
                        </thead>
                        <tbody>
                          {listProduct.map((product, index) => {
                            return (
                              <tr>
                                <td>
                                  <div className="img-container">
                                    <img alt="..." src={product.image} />
                                  </div>
                                </td>
                                <td className="td-name">
                                  <Link to="product-detail/:id">
                                    {product.name}
                                  </Link>
                                  <br />
                                  {/* <small>by Saint Laurent</small> */}
                                </td>
                                <td>{product.color}</td>
                                <td>{product.size}</td>
                                <td className="td-number">
                                  {product.price}
                                  <small> ₫</small>
                                </td>
                                <td className="td-number">
                                  {product.num}{" "}
                                  <ButtonGroup>
                                    <Button
                                      color="info"
                                      size="sm"
                                      onClick={() =>
                                        this.handleChangeNumProduct(
                                          "-",
                                          product.id,
                                          product.num
                                        )
                                      }
                                    >
                                      <i className="tim-icons icon-simple-delete" />
                                    </Button>
                                    <Button
                                      color="info"
                                      size="sm"
                                      onClick={() =>
                                        this.handleChangeNumProduct(
                                          "+",
                                          product.id,
                                          product.num
                                        )
                                      }
                                    >
                                      <i className="tim-icons icon-simple-add" />
                                    </Button>
                                  </ButtonGroup>
                                </td>
                                <td className="td-number text-center">
                                  {product.price * product.num}
                                  <small> ₫</small>
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
                                    <i className="tim-icons icon-simple-remove" />
                                  </Button>
                                  <UncontrolledTooltip
                                    delay={0}
                                    placement="left"
                                    target="tooltip653500052"
                                  >
                                    Remove item
                                  </UncontrolledTooltip>
                                </td>
                              </tr>
                            );
                          })}

                          <tr>
                            <td colSpan="3" />
                            <td className="td-total">Tổng tiền</td>
                            <td className="td-price">
                              {this.sumTotal(listProduct)} <small>đ</small>
                            </td>
                            <td className="text-right" colSpan="3">
                              <Link to="/checkout">
                                <Button className="btn-round" color="info">
                                  Hoàn tất mua hàng{" "}
                                  <i className="tim-icons icon-minimal-right" />
                                </Button>
                              </Link>
                            </td>
                          </tr>
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
  cart: state.cart,
});

export default connect(mapStateToProps, {
  deleteProductInCart,
  updateProductInCart,
})(MyCart);
