import React from "react";

class TopProducts extends React.Component {
    render() {
        return (
            <>
                <div className="top-product">
                    <p className="description text-center top-product-title">
                        Áo Khoác nam đệm nỉ
                    </p>
                    <small className="more_detail">Bán chạy nhất</small>
                    <div className="top-product_img">
                        <img src="https://vn-test-11.slatic.net/p/b16e5e21558773974d5742e223e8ec2b.png"/>
                    </div>
                </div>
            </>
        );
    }
}

export default TopProducts;
