import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import {
    Button,
    Input,
    InputGroup,
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselIndicators
} from "reactstrap";

// core components
import StarRatingReadOnly from "./StarRatingReadOnly";


const items = [
    {
        content: (
            <img
                alt="..."
                className="d-block"
                src="https://cdn.24h.com.vn/upload/3-2020/images/2020-08-20/2021-Honda-CBR250RR-SP-chot-gia-122-trieu-dong-dep-phat-me-cb7-1597933140-810-width660height500.jpg"
            />
        ),
        altText: "",
        caption: "",
        src: "0"
    },
    {
        content: (
            <img
                alt="..."
                className="d-block"
                src="https://cdns.klimg.com/otosia.com/resized/650x325/p/headline/650x325/0000467348.jpg"
            />
        ),
        altText: "",
        caption: "",
        src: "1"
    },
    {
        content: (
            <img
                alt="..."
                className="d-block"
                src="https://cdn.24h.com.vn/upload/3-2020/images/2020-08-20/2021-Honda-CBR250RR-SP-chot-gia-122-trieu-dong-dep-phat-me-cb9-1597933140-312-width660height500.jpg"
            />
        ),
        altText: "",
        caption: "",
        src: "2"
    }
];

class ProductDetail extends React.Component {
    state = {
        activeIndex: 0,
        quantity: 1
    };
    onExiting = () => {
        this.animating = true;
    };
    
    onExited = () => {
        this.animating = false;
    };
    
    next = () => {
        if (this.animating) return;
        const nextIndex =
            this.state.activeIndex === items.length - 1
                ? 0
                : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    };
    
    previous = () => {
        if (this.animating) return;
        const nextIndex =
            this.state.activeIndex === 0
                ? items.length - 1
                : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    };
    
    goToIndex = newIndex => {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    };
    deleteQuantity = () => {
        this.setState({
            quantity: this.state.quantity === 0 ? 0 : this.state.quantity - 1
        });
    };
    addQuantity = () => {
        this.setState({
            quantity: this.state.quantity === 100 ? 100 : this.state.quantity + 1
        });
    };
    render() {
        return (
            <>
                    <div className="section" id="products-detail">
                        <Container>
                            <Row>
                                <Col lg="6" md="12">
                                    <Carousel
                                        activeIndex={this.state.activeIndex}
                                        next={this.next}
                                        previous={this.previous}
                                    >
                                        <CarouselIndicators
                                            className="mt-5"
                                            items={items}
                                            activeIndex={this.state.activeIndex}
                                            onClickHandler={this.goToIndex}
                                        />
                                        {items.map((item, key) => {
                                            return (
                                                <CarouselItem
                                                    onExiting={this.onExiting}
                                                    onExited={this.onExited}
                                                    key={key}
                                                    className="justify-content-center"
                                                >
                                                    {item.content}
                                                </CarouselItem>
                                            );
                                        })}
                                        <a
                                            className="carousel-control-prev"
                                            data-slide="prev"
                                            href="#pablo"
                                            onClick={e => {
                                                e.preventDefault();
                                                this.previous();
                                            }}
                                            role="button"
                                        >
                                            <Button
                                                className="btn-icon btn-round"
                                                color="warning"
                                                name="button"
                                                size="sm"
                                                type="button"
                                            >
                                                <i className="tim-icons icon-minimal-left" />
                                            </Button>
                                        </a>
                                        <a
                                            className="carousel-control-next"
                                            data-slide="next"
                                            href="#pablo"
                                            onClick={e => {
                                                e.preventDefault();
                                                this.next();
                                            }}
                                            role="button"
                                        >
                                            <Button
                                                className="btn-icon btn-round"
                                                color="warning"
                                                name="button"
                                                size="sm"
                                                type="button"
                                            >
                                                <i className="tim-icons icon-minimal-right" />
                                            </Button>
                                        </a>
                                    </Carousel>
                                </Col>
                                <Col className="mx-auto" lg="6" md="12">
                                    <h2 className="title">Honda cbr250rr SP {"< QS >"}</h2>
                                    <div className="stats stats-right">
                                        <div className="stars text-warning d-inline-flex">
                                            <StarRatingReadOnly />
                                            <p className="d-inline ml-1 number-reviewer">(76 khách hàng đánh giá)</p>
                                        </div>
                                    </div>
                                    <br />
                                    <h2 className="main-price">399.000 đ</h2>
                                    <h5 className="category">Mô tả sản phẩm</h5>
                                    <p className="description">
                                        Eres' daring 'Grigri Fortune' swimsuit has the fit and
                                        coverage of a bikini in a one-piece silhouette. This fuchsia
                                        style is crafted from the label's sculpting peau douce
                                        fabric and has flattering cutouts through the torso and
                                        back. Wear yours with mirrored sunglasses on vacation.
                                    </p>
                                    <br />
                                    <Row className="pick-size">
                                        <Col lg="4" md="4">
                                            <label>Số lượng</label>
                                            <InputGroup>
                                                <div className="input-group-btn">
                                                    <Button
                                                        className="btn-round btn-simple"
                                                        color="warning"
                                                        onClick={this.deleteQuantity}
                                                    >
                                                        <i className="tim-icons icon-simple-delete" />
                                                    </Button>
                                                </div>
                                                <Input
                                                    className="input-number"
                                                    value={this.state.quantity}
                                                    id="myNumber"
                                                    type="text"
                                                    onChange={e => {
                                                        this.setState({
                                                            quantity: parseInt(e.target.value)
                                                        });
                                                    }}
                                                />
                                                <div className="input-group-btn">
                                                    <Button
                                                        className="btn-round btn-simple"
                                                        color="warning"
                                                        onClick={this.addQuantity}
                                                    >
                                                        <i className="tim-icons icon-simple-add" />
                                                    </Button>
                                                </div>
                                            </InputGroup>
                                        </Col>
                                        <Col lg="4" md="4" sm="6">
                                            <label>Màu sắc</label>
                                            <Select
                                                className="react-select react-select-warning"
                                                classNamePrefix="react-select"
                                                value={this.state.color}
                                                placeholder=""
                                                onChange={value => this.setState({ color: value })}
                                                options={[
                                                    {
                                                        value: "",
                                                        label: "Choose Color",
                                                        isDisabled: true
                                                    },
                                                    { value: "1", label: "Black" },
                                                    { value: "2", label: "Gray" },
                                                    { value: "3", label: "White" }
                                                ]}
                                            />
                                        </Col>
                                        <Col lg="4" md="4" sm="6">
                                            <label>Kích cỡ</label>
                                            <Select
                                                className="react-select react-select-warning"
                                                classNamePrefix="react-select"
                                                value={this.state.size}
                                                placeholder=""
                                                onChange={value => this.setState({ size: value })}
                                                options={[
                                                    {
                                                        value: "",
                                                        label: "Choose size ",
                                                        isDisabled: true
                                                    },
                                                    { value: "0", label: "Extra Small " },
                                                    { value: "1", label: "Small " },
                                                    { value: "2", label: "Medium" },
                                                    { value: "3", label: "Large" },
                                                    { value: "4", label: "Extra Large" }
                                                ]}
                                            />
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row className="justify-content-start">
                                        <Button className="ml-3" color="warning">
                                            Thêm vào giỏ hàng   <i className="tim-icons icon-bag-16" />
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
            </>
        );
    }
}

export default ProductDetail;
