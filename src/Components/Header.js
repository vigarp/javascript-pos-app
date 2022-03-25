import React, { Component } from 'react'

export class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {countCartItems, openSideMenu} = this.props;
        return (
            <header className='navbar'>
            <div className='navbar-left'>
                <div className='hamburgermenu'><img src={'./img/icons/hamburger-menu.svg'} onClick={()=>openSideMenu()}/></div>
                <div className='title'>Food Items</div>
                <div className='loopsearch'><img src={'./img/icons/magnifying-glass.svg'}/></div>
            </div>
            <div className='navbar-right'>
                <p>Cart {' '}
                {countCartItems ? (
                    <span className='total-items-in-cart'>{countCartItems}</span>
                ) : (
                    ''
                )}
                </p>{' '}
            </div>
        </header>
        )
    }
}

export default Header
