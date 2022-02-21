import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Sidebar extends Component {
    render() {
        return (
            <aside className='sidebar-menu'>
                <Link to="/"><img src={'./img/icons/fork-icon.svg'}/></Link>
                <Link to="/History"><img src={'./img/icons/clipboard-icon.svg'}/></Link>
                <img src={'./img/icons/add-icon.svg'}/>
            </aside>
        )
    }
}

export default Sidebar
