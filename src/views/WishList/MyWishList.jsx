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
    UncontrolledTooltip
} from "reactstrap";
import {Link} from "react-router-dom";

class MyWishList extends React.Component {
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
                                        <CardHeader>
                                            <h3 tag="h3">Sản phẩm yêu thích</h3>
                                        </CardHeader>
                                        <CardBody>
                                            <Table
                                                className="tablesorter table-shopping"
                                                responsive
                                            >
                                                <thead>
                                                <tr>
                                                    <th className="text-left">Ảnh mô tả </th>
                                                    <th>Sản phẩm</th>
                                                    <th className="text-right">Giá</th>
                                                    <th className="text-center">Trạng thái</th>
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
                                                    <td className="td-number">
                                                        <small>€</small>
                                                        3,390
                                                    </td>
                                                    <td className="text-center">
                                                        <Button color="success">Còn hàng</Button>
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
                                                            Xoá khỏi yêu thích
                                                        </UncontrolledTooltip>
                                                    </td>
                                                </tr>
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
                                                           ZX25R
                                                        </Link>
                                                        <br/>
                                                        <small>by anhnv</small>
                                                    </td>
                                                    <td className="td-number">
                                                        <small>€</small>
                                                        10.000$
                                                    </td>
                                                    <td className="text-center">
                                                        <Button color="danger">Hết hàng</Button>
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
                                                            Xoá khỏi yêu thích
                                                        </UncontrolledTooltip>
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

export default MyWishList;
