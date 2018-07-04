import React, { Component } from 'react';

class Day extends Component {
    render() {
        let css = this.props.highlight ? "day highlighted" : "day";
        return (
            <div className={css}>
                {this.props.day}
            </div>);
    }
}
export default Day;