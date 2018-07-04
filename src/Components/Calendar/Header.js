import React, { Component } from 'react';

class Header extends Component {
    render() {
        return <header>{this.props.month} {this.props.year}</header>;
    }
}
export default Header;