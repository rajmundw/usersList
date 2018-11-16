import React from 'react';
import AddButton from '../../components/addButton/addButton'
import UserInput from '../../components/userInput/userInput'
import {connect} from 'react-redux'
import {post} from "../../store/actions/actions";
import BackToMenuButton from '../../components/backToMenu/backToMenuButton'
import './addingUserContainer.css';

const AddingUserContainer =(props)=> {

    // function on click which take value from input and pass to post action
    const addNewUser = (event) => {
        event.preventDefault()
        //new user name from input
        const newUserName = document.querySelector('input').value
        //reset input
        document.querySelector('input').value = ''
        //making object to post in proper form to json
        const newUser = {
            name: newUserName
        }
        //post action
        props.postAction(newUser)
    }

        return (
            <div className="adding-user-container">
                <UserInput />
                <AddButton click={addNewUser}/>
                <BackToMenuButton/>
            </div>
        )
}

const mapDispatchToProps= (dispatch) =>{
    return {
        postAction:(newUser)=>dispatch(post(newUser))
    }
}

export default connect(null,mapDispatchToProps)(AddingUserContainer);
