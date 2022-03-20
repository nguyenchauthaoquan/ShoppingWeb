import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class Nav extends Component {
    render() {
        return (
            <ul className={`${this.props.navbar? "navbar-nav"  : `nav ${this.props.tabs ? "nav-tabs" : ""}
                ${this.props.pills ? "nav-pills" : ""}
                ${this.props.vertical ? "flex-column" : ""}
                ${this.props.fill ? "nav-fill" : ""}
                ${this.props.justified ? "nav-justified" : ""}
                `} ${this.props.right ? "ms-auto" : ""}`}>
                {this.props.children}
            </ul>
        );
    }
}

export class NavItem extends Component {
    render() {
        if (this.props.dropdown) {
            return (
                <li className={"nav-item dropdown"}>
                    {this.props.children}
                </li>
            )
        } else {
            return (
                <li className={"nav-item"}>
                    {this.props.children}
                </li>
            )
        }

    }
}

export class NavLink extends Component {
    render() {
        if (this.props.dropdown) {
            return (
                <Link id={this.props.id}
                      className={"nav-link dropdown-toggle"}
                      to={this.props.href}
                      role={"button"}
                      data-bs-toggle={"dropdown"}
                      aria-expanded={"false"}
                >
                    {this.props.children}
                </Link>
            )
        } else {
            return (
                <Link id={this.props.id} className={"nav-link"} to={this.props.href}>{this.props.children}</Link>
            )
        }

    }
}