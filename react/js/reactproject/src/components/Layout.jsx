import React, {Component} from 'react';

import {IMAGES} from "../code/constants";

import NavBar from "./widgets/NavBar";

import {Link} from "react-router-dom";

class Layout extends Component {
    render() {
        return (
            <>
                <NavBar/>
                {this.props.children}
            </>
        );
    }
}

export default Layout;