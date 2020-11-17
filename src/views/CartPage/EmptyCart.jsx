import React from "react";
import Empty from "./Empty";
import ColorNavbar from "../../components/Navbars/ColorNavbar";
import Footers from "../IndexSections/Footers";
import MyFooter from "../IndexPage/Footer";

class EmptyCart extends React.Component {
    componentDidMount() {
        document.body.classList.add("presentation-page");
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.wrapper.scrollTop = 0;
    }
    
    componentWillUnmount() {
        document.body.classList.remove("presentation-page");
    }
    
    render() {
        return (
            <>
                <ColorNavbar/>
                <div className="wrapper" ref="wrapper">
                    <Empty/>
                </div>
                <MyFooter/>
            </>
        );
    }
}

export default EmptyCart;
