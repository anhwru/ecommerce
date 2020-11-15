import React from "react";
class TopProducts extends React.Component {
    render() {
        return (
            <>
                        <div className=" info-primary top-product">
                            <p className="description text-center top-product-title">
                                Áo phông nam Appllo
                            </p>
                            <small className="more_detail">Mới về</small>
                            <div className="top-product_img">
                                <img src="https://lh3.googleusercontent.com/proxy/1hSolPYS7mWbeZY-ee4ngtQe-lLgqUo4heqBef3D4FXODyjAPD6caGyP-YZrGUhYO-6zQdacD6WKvN6dKdize5pc9vaneebiNqBxrln5eM9oyb7ebIG6DGA27C9QgojpJPbK1NnGSJ-K9ea5eQxILzuil5VH-NpoRg3UwX4ecxoRelsvKKN9m80"/>
                            </div>
                            
                        </div>
                        <div className="info-primary top-product">
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
