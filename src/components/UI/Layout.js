import { Fragment } from "react";
import Header from "../layout/Header";

const Layout = (props) => {
    return(
        <Fragment>
            <Header />
            {props.children}
        </Fragment>
    )
}

export default Layout;