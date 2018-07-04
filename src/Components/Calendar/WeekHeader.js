import React, { Component } from 'react';

class WeekHeader extends Component {
    constructor(props) {
        super(props);
        this.days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    }
    render() {

        return <div className="weekContainer">
            {this.days.map((d) => {
                return <span className="weekDay" key={d}>{d}</span>
            })}
        </div>;
    }
}
export default WeekHeader;