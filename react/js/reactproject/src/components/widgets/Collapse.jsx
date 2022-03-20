import React, {Component} from 'react';

export class Collapse extends Component {
    render() {
        return (
            <div className={`collapse ${this.props.navbar ? "navbar-collapse" : ""}`} id={this.props.id} >
                {this.props.children}
            </div>
        );
    }
}