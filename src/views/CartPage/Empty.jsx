import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

class Empty extends React.Component {
    render() {
        return (
            <>
                <div className="page-header">
                    <img
                        alt="..."
                        className="path"
                        src={require("assets/img/blob.png")}
                    />
                    <img
                        alt="..."
                        className="path2"
                        src={require("assets/img/path2.png")}
                    />
                    <img
                        alt="..."
                        className="shapes triangle"
                        src={require("assets/img/triunghiuri.png")}
                    />
                    <img
                        alt="..."
                        className="shapes wave"
                        src={require("assets/img/waves.png")}
                    />
                    <img
                        alt="..."
                        className="shapes squares"
                        src={require("assets/img/patrat.png")}
                    />
                    <img
                        alt="..."
                        className="shapes circle"
                        src={require("assets/img/cercuri.png")}
                    />
                    <Container>
                        <div className="content-center brand">
                            <img src={require("assets/img/empty-cart.png")}/>
                            <h3 className="text-info" style={{marginTop:20}}>
                                Bạn chưa thêm bất kì sản phẩm nào trong giỏ hàng !
                            </h3>
                            <h4>Hãy mua một vài sản phẩm ngay nào </h4>
                            <Button
                                className="btn-simple mt-4 btn-round"
                                color="primary"
                                size="lg"
                                target="_blank"
                            >
                                Đi nào
                            </Button>
                        </div>
                    </Container>
                </div>
            </>
        );
    }
}

export default Empty;
