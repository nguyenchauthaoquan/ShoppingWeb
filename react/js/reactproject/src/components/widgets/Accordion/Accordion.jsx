import React, {Component} from 'react';

class Accordion extends Component {
    render() {
        return (
            <div className={`accordion${this.props.flush ? "accordion-flush" : ""}`}
                 id={this.props.id}
            >
                {this.props.children}
            </div>
        );
    }
}


export default Accordion;