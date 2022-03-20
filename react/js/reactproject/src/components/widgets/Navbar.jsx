import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class Navbar extends Component {
    renderContainer(props) {
        switch (props) {
            case "sm":
                return (
                    <div className={"container-sm"}>
                        {this.props.children}
                    </div>
                );
            case "md":
                return (
                    <div className={"container-md"}>
                        {this.props.children}
                    </div>
                );
            case "lg":
                return (
                <div className={"container-lg"}>
                    {this.props.children}
                </div>
            );
            case "xl":
                return (
                    <div className={"container-xl"}>
                        {this.props.children}
                    </div>
                );
            case "xxl":
                return (
                    <div className={"container-xxl"}>
                        {this.props.children}
                    </div>
                );
            case true:
                return (
                    <div className={"container"}>
                        {this.props.children}
                    </div>
                );
            case false:
                return null;
            default:
                return (
                    <div className={"container-fluid"}>
                        {this.props.children}
                    </div>
                );
        }
    }

    render() {
        return (
            <nav className={`navbar navbar-expand-${this.props.expand} ${this.props.light ? "navbar-light" : ""} ${this.props.dark ? "navbar-dark" : ""} bg-${this.props.color}`}>
                {this.renderContainer(this.props.container)}
            </nav>
        );
    }
}


export class NavbarBrand extends Component {
    render() {
        return (
            <Link className={"navbar-brand"} to={"/"}>{this.props.children}</Link>
        );
    }
}

export class NavbarToggler extends Component {
    render() {
        return (
            <>
                <button className={"navbar-toggler"}
                        type={"button"}
                        data-bs-toggle={"collapse"}
                        data-bs-target={`#${this.props.targetId}`}
                        aria-controls={this.props.targetId}
                        aria-expanded={"false"}
                        aria-label={this.props.label}
                >
                    <span className="navbar-toggler-icon" />
                </button>
            </>
        )
    }
}
