import React, {Component} from 'react';

class AccordionHeader extends Component {
    render() {
        return (
            <h2 className={"accordion-header"} id={this.props.id}>
                <button className={`accordion-button ${this.props.collapsed ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${this.props.targetId}`}
                        aria-expanded="true"
                        aria-controls={`${this.props.targetId}`}>
                    {this.props.children}
                </button>

            </h2>
        );
    }
}

export default AccordionHeader;