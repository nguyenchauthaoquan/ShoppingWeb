import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class Dropdown extends Component {
    render() {
        return (
            <li className={"nav-item dropdown"}>

            </li>
        );
    }
}

export class DropdownMenu extends Component {
    render() {
        return (
            <ul className="dropdown-menu" aria-labelledby={this.props.label}>
                {this.props.children}
            </ul>
        )
    }

}

export class DropdownItem extends Component {
    render() {
        return (
            <li>
                <Link className={"dropdown-item"} to={this.props.href}>
                    {this.props.children}
                </Link>
            </li>
        )
    }
}

export class DropdownDivider extends Component {
    render() {
        return (
            <>
                <li>
                    <hr className="dropdown-divider" />
                </li>
            </>
        );
    }

}