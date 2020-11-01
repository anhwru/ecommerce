import React from "react";
// reactstrap components
import {
    Button,
    Input,
    Media,
    Container,
} from "reactstrap";
import Row from "reactstrap/es/Row";

class CustomerComent extends React.Component {
    render() {
        return (
            <>
                <Media className="media-post">
                    <a
                        className="pull-left author"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <div className="avatar">
                            <Media
                                alt="..."
                                className="img-raised"
                                src={require("assets/img/james.jpg")}
                            />
                        </div>
                    </a>
                    <Media body>
                        <Input
                            placeholder="Nhận xét của bạn về sản phẩm này"
                            rows="6"
                            type="textarea"
                        />
                        <div className="media-footer">
                            <Button
                                className="btn-wd pull-right"
                                color="primary"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Đánh giá
                            </Button>
                        </div>
                    </Media>
                </Media>
            </>
        );
    }
}

export default CustomerComent;
