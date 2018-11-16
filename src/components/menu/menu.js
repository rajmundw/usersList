import React from 'react'
import {NavLink} from 'react-router-dom'
import { Nav ,NavItem, Button } from 'reactstrap';
import './menu.css';
const Menu = () =>{
    return (

        /*rendering navigation thanks to this we can use SPA and we can go to add user site and users list site*/
        <div className="menu">
            <Nav vertical className='nav-menu'>
                <NavItem>
                    <NavLink to="/AddUser"><Button className="button" outline color="primary">Add User</Button></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/UsersList"><Button outline color="primary">Show Users</Button></NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default Menu