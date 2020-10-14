import React from "react";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Table,
    Container,
    Row,
    Col
} from "reactstrap";

// core components

class Invoice extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.wrapper.scrollTop = 0;
        document.body.classList.add("invoice-page");
    }
    
    componentWillUnmount() {
        document.body.classList.remove("invoice-page");
    }
    
    render() {
        return (
            <>
                <div className="wrapper" ref="wrapper">
                    <div className="section">
                        <Container>
                            <Row>
                                <Col className="ml-auto mr-auto" md="10">
                                    <Card className="card-invoice">
                                        <CardHeader
                                            className="text-center"
                                            data-color-icon="warning"
                                        >
                                            <Row className="justify-content-between">
                                                <Col className="text-left" md="6">
                                                    <img
                                                        alt="..."
                                                        className="mb-2 invoice-logo"
                                                        src={require("assets/img/cbr-logo.png")}
                                                    />
                                                    <h4 className="text-center">
                                                        Lang Thuong, Ha Noi, Viet Nam
                                                    </h4>
                                                    <h5>
                                                        <small className="d-block text-muted text-center">
                                                            Điện thoại: 0325743535
                                                        </small>
                                                    </h5>
                                                </Col>
                                                <Col className="text-left mt-5 invoice-info" lg="5" md="5">
                                                    <h3 className="mb-3 text-center">Hoá đơn mua hàng</h3>
                                                    <span className="d-inline-flex">
                                                    <strong>Tên khách hàng : </strong>
                                                    <p className="d-block">James Thompson</p>
                                                    </span>
                                                    <span className="d-inline-flex">
                                                    <strong>Địa chỉ : </strong>
                                                    <p>
                                                         Phuong Phuc Thang, Vinh Yen , Vinh Phuc <br/>
                                                    </p>
                                                    </span>
                                                    <span className="d-inline-flex">
                                                    <strong>SĐT : </strong><p> 0989001123</p>
                                                    </span>
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row className="justify-content-md-between">
                                                <Col className="mt-5" md="4">
                                                    <h2 className="mt-3 text-left">
                                                        Số hoá đơn : {" "}
                                                        <small className="mr-2">#0453119</small>
                                                    </h2>
                                                </Col>
                                                <Col className="mt-5" lg="4" md="5">
                                                    <Row className="mt-5 date-invoice">
                                                        <Col md="6">Ngày tạo:</Col>
                                                        <Col md="6">06/03/2019</Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md="6">Ngày hết hạn:</Col>
                                                        <Col md="6">11/03/2019</Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col className="mt-5" xs="12">
                                                    <Table className="text-right" responsive>
                                                        <thead className="bg-default">
                                                        <tr>
                                                            <th scope="col">Tên sản phẩm</th>
                                                            <th className="text-right" scope="col">
                                                                Số lượng
                                                            </th>
                                                            <th className="text-right" scope="col">
                                                                Giá bán
                                                            </th>
                                                            <th className="text-right" scope="col">
                                                                Tổng cộng
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>Premium Support</td>
                                                            <td>1</td>
                                                            <td>$ 9.00</td>
                                                            <td>$ 9.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>BLK Design System PRO</td>
                                                            <td>3</td>
                                                            <td>$ 100.00</td>
                                                            <td>$ 300.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Parts for service</td>
                                                            <td>1</td>
                                                            <td>$ 89.00</td>
                                                            <td>$ 89.00</td>
                                                        </tr>
                                                        </tbody>
                                                        <tfoot>
                                                        <tr>
                                                            <th className="h4">Tổng tiền</th>
                                                            <th className="text-right h4" colSpan="3">
                                                                $ 750
                                                            </th>
                                                        </tr>
                                                        </tfoot>
                                                    </Table>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                        <hr className="line-info ml-auto"/>
                                        <CardFooter className="text-right">
                                            <Col md="10">
                                                <h4>Cảm ơn bạn đã tin dùng sản phẩm của chúng tôi !</h4>
                                                <p className="description">
                                                    Nếu có bất kì vấn đề nào liên quan đén hoá đơn hãy liên hệ cho chúng
                                                    tôi qua địa chỉ email :
                                                </p>
                                                <h4>
                                                    <small className="text-muted">
                                                        anhnv2@softdreams.vn
                                                    </small>
                                                </h4>
                                            </Col>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col className="ml-auto" md="3">
                                    <Button
                                        className="btn-print mt-5"
                                        color="info"
                                        onClick={() => {
                                            window.print();
                                            return false;
                                        }}
                                        type="button"
                                    >
                                        <i className="tim-icons icon-laptop"/>
                                        Print
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </>
        );
    }
}

export default Invoice;
