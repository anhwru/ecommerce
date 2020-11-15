import React from "react";

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    ListGroupItem,
    ListGroup,
    Table,
    Container,
    Row,
    Col
} from "reactstrap";
import Listline from "./GridProduct/ListlineProduct";
import ListlineProduct from "./GridProduct/ListlineProduct";
import Products from "../Products/Products";
import GridProductCard from "./GridProduct/GridProductCard";
import ProductandDetail from "./GridProduct/ProductandDetail";
import ProductSlider from "./ProductSlider/ProductSlider";
import Carousel from "./TopSale/Carousel";
import CardProductDescription from "./GridProduct/CardProductDescription";

class GridProduct extends React.Component {
    render() {
        return (
            <>
                <div id="cards">
                    <Container>
                        <Row>
                            <Col lg="4" md="6">
                                <Card className="product-blog">
                                    <img
                                        src="https://avenuesixty.com/wp-content/uploads/2013/01/Ralph-Lauren-Parisian-Red-Crinkle-Silk-Chiffon-Jeanette-Dress.png"/>
                                    <div className="title-bottom">
                                        <h2> Váy Costinal Italia</h2>
                                        <Button className="btn-round" color="warning">
                                            <i className="tim-icons icon-heart-2"/> Xem ngay
                                        </Button>
                                    </div>
                                </Card>
                                <Card
                                    className="card-blog card-background"
                                    data-animation={true}
                                >
                                    <div
                                        className="full-background"
                                        style={{
                                            backgroundImage: `url(https://i.pinimg.com/originals/67/1e/fb/671efb4eded1fcd3d381e6688f355a87.png)`
                                        }}
                                    />
                                    <CardBody>
                                        <Button
                                            className="btn-icon top_discount"
                                            color="danger"
                                            type="button"
                                        >
                                            18%
                                        </Button>
                                        <span className="d-inline-flex list-line_price"
                                              style={{position: "absolute", top: '5%', left: '5%'}}><p
                                            className="list-new_price">269.000 vnd</p></span>
                                        <div className="text-center big-btn">
                                            <h2 className="big-title">JEANS </h2>
                                            <Button
                                                className=" btn-round"
                                                color="default"
                                                type="button"
                                            >
                                                Xem chi tiết
                                            </Button>
                                        </div>
                                    </CardBody>
                                </Card>
                                <ProductandDetail/>
                            </Col>
                            <Col lg="4" md="6">
                                <Card className="card-blog">
                                    <ListlineProduct/>
                                    <ListlineProduct/>
                                    <ListlineProduct/>
                                    <ListlineProduct/>
                                    <ListlineProduct/>
                                    <ListlineProduct/>
                                </Card>
                                <Card className="carousel-cards">
                                       <CardProductDescription/>
                                </Card>
                            </Col>
                            <Col lg="4" md="8">
                                <Card className="card-blog">
                                    <CardBody>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Products/>
                                                    <Products/>
                                                </Col>
                                            </Row>
                                        </Container>
                                    
                                    </CardBody>
                                
                                </Card>
                                <GridProductCard/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default GridProduct;
