import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {get} from '../../store/actions/actions'
import List from '../../components/List/list'
import BackToMenuButton from '../../components/backToMenu/backToMenuButton'
import './usersList.css'

class UsersList extends PureComponent {

    //set initial state
    componentDidMount() {
       this.props.initialUsersList()
    }
    render() {
        return (
            <div className="user-list-container">
                <List/>
                <BackToMenuButton/>
            </div>
    )
    }
}

const mapDispatchToProps= (dispatch) =>{
    return {
        initialUsersList:() => dispatch(get())
    }
}

export default connect(null,mapDispatchToProps)(UsersList);