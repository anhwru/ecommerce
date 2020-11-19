import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Container,
    Row,
    Col
} from "reactstrap";

class Slider extends React.Component {
    render() {
        return (
            <>
                <div className="blogs-6">
                    <Container>
                        <h2 className="title">Latest Blogposts 6</h2>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="10">
                                <Card className="card-blog card-background card-grande">
                                    <div
                                        className="full-background"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/ben-konfrst.jpg") + ")"
                                        }}
                                    />
                                    <CardBody>
                                        <div className="author">
                                            <img
                                                alt="..."
                                                className="avatar img-raised"
                                                src={require("assets/img/olivia.jpg")}
                                            />
                                            <span className="text-white ml-1">by Johanna Zmud</span>
                                        </div>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <CardTitle tag="h2">Miami Vice</CardTitle>
                                        </a>
                                        <h4 className="card-description">
                                            The simplest visual description uses ordinary words to
                                            convey what the writer sees. First he or she must look
                                            at the subject – slowly, carefully, and repeatedly, if
                                            possible – to identify the parts that make the whole
                                        </h4>
                                        <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Read more...
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default Slider;
