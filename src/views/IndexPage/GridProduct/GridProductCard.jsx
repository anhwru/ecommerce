import React from "react";

import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Table
} from "reactstrap";

class GridProductCard extends React.Component {
    render() {
        return (
            <>
                <div className="cards">
                    <Card className="card-profile" data-background="full" >
                        <a href="#pablo" onClick={e => e.preventDefault()} >
                            <img
                                alt="..."
                                className="img img-raised rounded"
                                src="https://www.chapi.vn/img/product/2020/3/4/ao-khoac-nam-kaki-lot-long-png-12-new.jpg"
                            />
                        </a>
                        <CardBody>
                            <hr className="line-primary"/>
                            <h3 className="job-title">Áo khoác Lông PNG</h3>
                            <Table className="tablesorter" responsive>
                                <tbody>
                                <tr>
                                    <td className="text-left">
                                        <i className="tim-icons icon-atom mr-2"/>
                                        Skills
                                    </td>
                                    <td className="text-right">Organization</td>
                                </tr>
                                <tr>
                                    <td className="text-left">
                                        <i className="tim-icons icon-user-run mr-2"/>
                                        Hobbies
                                    </td>
                                    <td className="text-right">Singing Jogging</td>
                                </tr>
                                <tr>
                                    <td className="text-left">
                                        <i className="tim-icons icon-chart-bar-32 mr-2"/>
                                        Level
                                    </td>
                                    <td className="text-right">• • • • •</td>
                                </tr>
                                </tbody>
                            </Table>
                            <div className="d-inline float-right">
                                <Button
                                    className="btn-icon btn-round"
                                    color="dribbble"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    <i className="fab fa-dribbble"/>
                                </Button>
                                <Button
                                    className="btn-icon btn-round ml-1"
                                    color="linkedin"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    <i className="fab fa-linkedin"/>
                                </Button>
                                <Button
                                    className="btn-icon btn-round ml-1"
                                    color="behance"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    <i className="fab fa-behance"/>
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </>
        );
    }
}

export default GridProductCard;
