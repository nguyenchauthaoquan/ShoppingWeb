import React, {Component} from 'react';

class AccordionBody extends Component {
    render() {
        return (
            <div className={`accordion-collapse collapse${this.props.show ? "show" : ""}`}
                 id={this.props.id}
                 aria-labelledby={this.props.targetLabel}
                 data-bs-parent={`#${this.props.targetId}`}>
                <div className="accordion-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AccordionBody;