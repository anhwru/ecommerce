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

class CommentRating extends React.Component {
    render() {
        return (
            <>
                <div>
                    <Container>
                            <div id="comments">
                                <Row>
                                    <Col className="ml-auto mr-auto" md="12">
                                        <div className="media-area">
                                            <h3 className="title">
                                                <small>Nhận xét (3)</small>
                                            </h3>
                                            <Media>
                                                <a
                                                    className="pull-left"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <div className="avatar">
                                                        <Media
                                                            alt="..."
                                                            className="img-raised"
                                                            src={require("assets/img/marie.jpg")}
                                                        />
                                                    </div>
                                                </a>
                                                <Media body>
                                                    <Media heading tag="h5">
                                                        Tina Andrew{" "}
                                                        <small className="text-muted">
                                                            · 7 minutes ago
                                                        </small>
                                                    </Media>
                                                    <p>
                                                        Chance too good. God level bars. I'm so proud of
                                                        @LifeOfDesiigner #1 song in the country. Panda!
                                                        Don't be scared of the truth because we need to
                                                        restart the human foundation in truth I stand with
                                                        the most humility. We are so blessed!
                                                    </p>
                                                    <p>
                                                        All praises and blessings to the families of people
                                                        who never gave up on dreams. Don't forget, You're
                                                        Awesome!
                                                    </p>
                                                    <div className="media-footer">
                                                        <Button
                                                            className="btn-link pull-right"
                                                            color="danger"
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <i className="tim-icons icon-heart-2 mr-1" />
                                                            243
                                                        </Button>
                                                    </div>
                                                </Media>
                                            </Media>
                                            <Media>
                                                <a
                                                    className="pull-left"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <div className="avatar">
                                                        <Media
                                                            alt="..."
                                                            className="img-raised"
                                                            src={require("assets/img/olivia.jpg")}
                                                        />
                                                    </div>
                                                </a>
                                                <Media body>
                                                    <Media heading tag="h5">
                                                        John Camber{" "}
                                                        <small className="text-muted">· Yesterday</small>
                                                    </Media>
                                                    <p>
                                                        Hello guys, nice to have you on the platform! There
                                                        will be a lot of great stuff coming soon. We will
                                                        keep you posted for the latest news.
                                                    </p>
                                                    <p>Don't forget, You're Awesome!</p>
                                                    <div className="media-footer">
                                                        <Button
                                                            className="btn-link pull-right"
                                                            color="default"
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <i className="tim-icons icon-heart-2 mr-1" />
                                                            25
                                                        </Button>
                                                    </div>
                                                </Media>
                                            </Media>
                                            <Media>
                                                <a
                                                    className="pull-left"
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
                                                    <Media heading tag="h5">
                                                        Rosa Thompson{" "}
                                                        <small className="text-muted">· 2 Days Ago</small>
                                                    </Media>
                                                    <p>
                                                        Hello guys, nice to have you on the platform! There
                                                        will be a lot of great stuff coming soon. We will
                                                        keep you posted for the latest news.
                                                    </p>
                                                    <p>Don't forget, You're Awesome!</p>
                                                    <div className="media-footer">
                                                        <Button
                                                            className="btn-link pull-right"
                                                            color="danger"
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <i className="tim-icons icon-heart-2 mr-1" />
                                                            12
                                                        </Button>
                                                    </div>
                                                </Media>
                                            </Media>
                                            <Pagination
                                                className="pagination pagination-primary justify-content-center"
                                                listClassName="pagination-primary justify-content-center"
                                            >
                                                <PaginationItem>
                                                    <PaginationLink
                                                        aria-label="Previous"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                            <span aria-hidden={true}>
                              <i
                                  aria-hidden={true}
                                  className="fa fa-angle-double-left"
                              />
                            </span>
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        1
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem className="active">
                                                    <PaginationLink
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        2
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        3
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        aria-label="Next"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                            <span aria-hidden={true}>
                              <i
                                  aria-hidden={true}
                                  className="fa fa-angle-double-right"
                              />
                            </span>
                                                    </PaginationLink>
                                                </PaginationItem>
                                            </Pagination>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                    </Container>
                </div>
            </>
        );
    }
}

export default CommentRating;
