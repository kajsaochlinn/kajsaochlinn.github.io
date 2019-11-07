import React, { Component } from 'react';
import './navbar.scss';

class Navbar extends Component {
    constructor() {
        super();
        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
            open: false
        }
    }

    toggleNav() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <div className='navbar'>
                <div className='navbar__icon'></div>
                {/* <div className='navbar__hamburger h-hidden-m-up' onClick={this.toggleNav}></div> */}
            </div>
        )
    }
}

export default Navbar;