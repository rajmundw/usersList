import React from 'react';
import {NavLink} from 'react-router-dom'
import {Button,Nav ,NavItem} from 'reactstrap'
import './backToMenuButton.css';

const BackToMenuButton = (props) => {

    return (
        <div className="add-user-nav">
            {/*nav to back to menu*/}
            <Nav vertical className="back-to-menu">
                <NavItem>
                    <NavLink to="/"><Button color="primary">Back to Menu</Button></NavLink>
                </NavItem>
            </Nav>
        </div>
    )


}

export default BackToMenuButton