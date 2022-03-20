import React, {Component} from 'react';

import {IMAGES} from "../constants";
import {Navbar, NavbarBrand, NavbarToggler} from "./widgets/Navbar";
import {Collapse} from "./widgets/Collapse";
import {Nav, NavItem, NavLink} from "./widgets/Nav";
import {DropdownDivider, DropdownItem, DropdownMenu} from "./widgets/Dropdown";

class Layout extends Component {
    render() {
        return (
            <div>
                <Navbar color={"primary"} dark expand={"lg"} container>
                    <NavbarBrand>
                        <img src={IMAGES.logo} className={"logo"} />
                    </NavbarBrand>
                    <NavbarToggler targetId={"navbarSupportedContent"} label={"Toggle navigation"} />
                    <Collapse id={"navbarSupportedContent"} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className={"nav-link"} href={"/"}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={"nav-link"} href={"/"}>About</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav right navbar>
                            <NavItem dropdown>
                                <NavLink id={"navbarDropdown"} dropdown href={"/"}>
                                    <span>Account</span>
                                </NavLink>
                                <DropdownMenu label={"navbarDropdown"}>
                                    <DropdownItem href={"/"}>Đăng nhập</DropdownItem>
                                    <DropdownItem href={"/"}>Đăng ký</DropdownItem>
                                    <DropdownDivider />
                                    <DropdownItem href={"/"}>Đăng xuất</DropdownItem>
                                </DropdownMenu>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;