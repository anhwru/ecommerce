/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Badge,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Container,
    Row,
    Col
} from "reactstrap";

class Paginations extends React.Component {
    render() {
        return (
            <>
                <div className="section section-pagination my-pagination">
                    <img
                        alt="..."
                        className="path"
                        src={require("assets/img/path4.png")}
                    />
                    <img
                        alt="..."
                        className="path path1"
                        src={require("assets/img/path5.png")}
                    />
                    <div className="pagination-container justify-content-center">
                        <Pagination
                            className="pagination pagination-primary"
                            listClassName="pagination-primary"
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
                            <PaginationItem>
                                <PaginationLink
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem className="active">
                                <PaginationLink
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    3
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    4
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    5
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
                </div>
            </>
        );
    }
}

export default Paginations;
