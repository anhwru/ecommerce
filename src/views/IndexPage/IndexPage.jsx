import React from "react";
import "views/style.scss"
import ColorNavbar from "../../components/Navbars/ColorNavbar";
import MyFooter from "./Footer";

class IndexPage extends React.Component {
    componentDidMount() {
        document.body.classList.add("index-page");
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }
    componentWillUnmount() {
        document.body.classList.remove("index-page");
    }
    render() {
        return (
            <>
              <ColorNavbar/>
              <MyFooter/>
            </>
        );
    }
}

export default IndexPage;
