import React, {Component} from 'react';

class AccordionItem extends Component {
    render() {
        return (
            <div className={"accordion-item"}>
                {this.props.children}
            </div>
        );
    }
}

export default AccordionItem;