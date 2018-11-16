import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import Buttons from './buttons/editAndDeleteButtons'
import {setState} from "../../store/actions/actions";
import './list.css'


class List extends PureComponent {

    render () {
        // array witch react elements ready to render, maping proper dom elements
        const usersArray = this.props.usersList.map((user) => {
            return (
                <li key={user.id}>
                    <div className="li-container">
                        <p>{user.name}</p>
                        <Buttons/>
                    </div>
                </li>)
        })
        return (
            <div className="users-list-container">
                <ul className="users-list">
                    {usersArray}
                </ul>
            </div>
        )
    }

}
const mapStateToProps=state=>{
    return {
        usersList:state.usersList
    }
}
const mapDispatchToProps= (dispatch) =>{
    return {
        initialUsersList:(initialJsonAnswer) => dispatch(setState(initialJsonAnswer))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List)