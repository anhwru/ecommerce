import React from "react";

// reactstrap components
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    Table,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";
import {Link} from "react-router-dom";

class MyCart extends React.Component {
    render() {
        return (
            <>
                <div className="section" id="my-cart">
                    <Container>
                        <div className="space-70"/>
                        <div id="tables">
                            <Row>
                                <Col md="12">
                                    <Card className="card-plain">
                                        {/*<CardHeader>*/}
                                        {/*    <CardTitle tag="h3">Giỏ hàng</CardTitle>*/}
                                        {/*</CardHeader>*/}
                                        <CardBody>
                                            <Table
                                                className="tablesorter table-shopping"
                                                responsive
                                            >
                                                <thead>
                                                <tr>
                                                    <th className="text-center"/>
                                                    <th>Sản phẩm</th>
                                                    <th>Màu</th>
                                                    <th>Loại/Size</th>
                                                    <th className="text-right">Giá</th>
                                                    <th className="text-right">Số lượng</th>
                                                    <th className="text-center">Thành tiền</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="img-container">
                                                            <img
                                                                alt="..."
                                                                src="https://xevathitruong.vn/public_storage/images/2019/04/05/honda-cbr250-2019/honda-cbr250rr-2019-xevathitruong-cover.png"
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className="td-name">
                                                        <Link to="product-detail/:id">
                                                            CBR 250RR SP 2021
                                                        </Link>
                                                        <br/>
                                                        <small>by Saint Laurent</small>
                                                    </td>
                                                    <td>Black</td>
                                                    <td>M</td>
                                                    <td className="td-number">
                                                        <small>€</small>
                                                        3,390
                                                    </td>
                                                    <td className="td-number">
                                                        1{" "}
                                                        <ButtonGroup>
                                                            <Button color="info" size="sm">
                                                                <i className="tim-icons icon-simple-delete"/>
                                                            </Button>
                                                            <Button color="info" size="sm">
                                                                <i className="tim-icons icon-simple-add"/>
                                                            </Button>
                                                        </ButtonGroup>
                                                    </td>
                                                    <td className="td-number text-center">
                                                        <small>€</small>
                                                        549
                                                    </td>
                                                    <td className="td-actions">
                                                        <Button
                                                            className="btn-link"
                                                            color="danger"
                                                            id="tooltip653500052"
                                                            type="button"
                                                        >
                                                            <i className="tim-icons icon-simple-remove"/>
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
                                                <tr>
                                                    <td>
                                                        <div className="img-container">
                                                            <img
                                                                alt="..."
                                                                src="https://product.hstatic.net/1000170043/product/120a44140.png"
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className="td-name">
                                                        <a
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            Heo dầu Brembo chính hãng
                                                        </a>
                                                        <br/>
                                                        <small>by Balmain</small>
                                                    </td>
                                                    <td>Black</td>
                                                    <td>M</td>
                                                    <td className="td-number">
                                                        <small>€</small>
                                                        499
                                                    </td>
                                                    <td className="td-number">
                                                        2{" "}
                                                        <ButtonGroup>
                                                            <Button color="info" size="sm">
                                                                <i className="tim-icons icon-simple-delete"/>
                                                            </Button>
                                                            <Button color="info" size="sm">
                                                                <i className="tim-icons icon-simple-add"/>
                                                            </Button>
                                                        </ButtonGroup>
                                                    </td>
                                                    <td className="td-number text-center">
                                                        <small>€</small>
                                                        998
                                                    </td>
                                                    <td className="td-actions">
                                                        <Button
                                                            className="btn-link"
                                                            color="danger"
                                                            id="tooltip445034797"
                                                            type="button"
                                                        >
                                                            <i className="tim-icons icon-simple-remove"/>
                                                        </Button>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            placement="left"
                                                            target="tooltip445034797"
                                                        >
                                                            Remove item
                                                        </UncontrolledTooltip>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="img-container">
                                                            <img
                                                                alt="..."
                                                                src="https://i0.wp.com/warungasep.net/wp-content/uploads/2020/07/fitur-zx25r.png"
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className="td-name">
                                                        <a
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            ZX25R
                                                        </a>
                                                        <br/>
                                                        <small>by Prada</small>
                                                    </td>
                                                    <td>Red</td>
                                                    <td>M</td>
                                                    <td className="td-number">
                                                        <small>€</small>
                                                        200
                                                    </td>
                                                    <td className="td-number">
                                                        1{" "}
                                                        <ButtonGroup>
                                                            <Button color="info" size="sm">
                                                                <i className="tim-icons icon-simple-delete"/>
                                                            </Button>
                                                            <Button color="info" size="sm">
                                                                <i className="tim-icons icon-simple-add"/>
                                                            </Button>
                                                        </ButtonGroup>
                                                    </td>
                                                    <td className="td-number text-center">
                                                        <small>€</small>
                                                        799
                                                    </td>
                                                    <td className="td-actions">
                                                        <Button
                                                            className="btn-link"
                                                            color="danger"
                                                            id="tooltip456987852"
                                                            type="button"
                                                        >
                                                            <i className="tim-icons icon-simple-remove"/>
                                                        </Button>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            placement="left"
                                                            target="tooltip456987852"
                                                        >
                                                            Remove item
                                                        </UncontrolledTooltip>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="3"/>
                                                    <td className="td-total">Tổng tiền</td>
                                                    <td className="td-price">
                                                        2,346 <small>đ</small>
                                                    </td>
                                                    <td className="text-right" colSpan="3">
                                                        <Link to="/checkout">
                                                            <Button className="btn-round" color="info">
                                                               Hoàn tất mua hàng{" "}
                                                                <i className="tim-icons icon-minimal-right"/>
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

export default MyCart;
