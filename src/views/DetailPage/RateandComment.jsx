import React from "react";
// reactstrap components
import {
    Button,
    FormGroup,
    Form,
    Input,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";
import StarRating from "./StarRating";
import CustomerComent from "./CustomerComent";

class RateandComment extends React.Component {
    render() {
        return (
            <>
                    <Container>
                        <div id="comments">
                            <Row>
                                <Col className="ml-auto mr-auto" md="12">
                                    <h4>Đánh giá của bạn</h4>
                                    <StarRating/>
                                    <h4>Nhận xét sản phẩm</h4>
                                    <CustomerComent/>
                                </Col>
                            </Row>
                        </div>
                    </Container>
            </>
        );
    }
}

export default RateandComment;


