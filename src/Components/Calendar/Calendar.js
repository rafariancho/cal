//import PropTypes from 'prop-types';

import React, { Component } from 'react';
import Header from './Header';
import WeekHeader from './WeekHeader.js';
import Day from './Day';
import "./Styles/Calendar.css"

class Calendar extends Component {
    render() {
        let currentDate = new Date();
        let currentDay = currentDate.getDate();
        let month = currentDate.toLocaleString("en-us", { month: "long" });
        let year = currentDate.getFullYear();
        let days = new Date(year, currentDate.getMonth() + 1, 0).getDate();
        let positionFirstDay = new Date(year, currentDate.getMonth(), 1).getDay(); console.log(new Date(year, currentDate.getMonth(), 0).getDate(), 'firstdayt')

        return (
            <div className="container">
                <Header month={month} year={year}></Header>
                <WeekHeader></WeekHeader>
                <div className="daysContainer">
                    {this.printLeftPadding(positionFirstDay)}
                    {this.printDays(days, currentDay)}
                </div>
            </div>);
    }

    printLeftPadding = (positionFirstDay) => {
        if (positionFirstDay > 0) {
            let emptyCells = Array.from(Array(positionFirstDay - 1).keys());
            return emptyCells.map((cell) => { return <div className="day"></div>; });
        }
    }

    printDays = (days, currentDay) => {
        console.log(days)
        let dayList = Array.from(Array(days).keys());
        return dayList.map((day) => {
            let dayToPrint = day + 1;
            return (
                <Day
                    key={dayToPrint}
                    day={dayToPrint}
                    highlight={currentDay === dayToPrint}>
                </Day>
            );
        });
    }

}
export default Calendar;