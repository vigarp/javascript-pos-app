import React, { Component, Fragment } from 'react'
import Header from '../Components/Header'
import Main from '../Components/Main'
import Sidebar from '../Components/Sidebar'

export class History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showSideMenu: true,
        }
    }
    openSideMenu = () => {
        this.setState({
            showSideMenu: !this.state.showSideMenu
        })
    }
    render() {
        return (
            <Fragment>
            <header className='navbar'>
                <div className='navbar-left'>
                    <div className='hamburgermenu'><img src={'./img/icons/hamburger-menu.svg'} onClick={this.openSideMenu} /></div>
                    <div className='title'>History</div>
                    <div className='loopsearch'><img src={'./img/icons/magnifying-glass.svg'} /></div>
                </div>
            </header>
            <div className='main-content-left'>
            <Sidebar></Sidebar>
            </div>
            </Fragment>

        )
    }
}

export default History
