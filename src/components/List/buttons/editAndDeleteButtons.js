import React from 'react';
import {deleteUser} from "../../../store/actions/actions";
import {changeUser} from "../../../store/actions/actions";
import {connect} from 'react-redux'
import edit_delete from '../../../functions/edit_delete'
import { Button } from 'reactstrap';
import './edidAndDeleteButtons.css'

//function component which is able to edit and delete user
const EditAndDeleteButtons = (props) => {

    //function on click to delete user
    const deleteUser=(event)=> {
        //import function witch is call after cliked on delete button it takes event action and state
        edit_delete(event, props.deleteUser,props.usersList)
    }
    //function on click to edit user
    const editUser=(event)=>{
        event.preventDefault()
        //checking that button is on edit or save position
        if(event.target.innerText==='Edit'){
            //edit position
            //changing edit text to save
            event.target.innerText='Save'
            //create dom element input
            const input=document.createElement('input')
            // taking value from userList to use it in input
            input.value=event.target.parentElement.parentElement.parentElement.querySelector('p').innerText
            // reset this li
            event.target.parentElement.parentElement.parentElement.querySelector('p').innerText=''
            // append input ready to change user data
            event.target.parentElement.parentElement.parentElement.querySelector('p').appendChild(input)

        }else{
            //save position
            //changing save to edit
                event.target.innerText='Edit'
                //finding input
                const input=event.target.parentElement.parentElement.parentElement.querySelector('input')
                //taking new user data
                const inputValue=input.value
                //removing input
                event.target.parentElement.parentElement.parentElement.querySelector('p').removeChild(input)
                //on case if data did not change set li inner text to prev value
                event.target.parentElement.parentElement.parentElement.querySelector('p').innerText=inputValue
                //call function
                edit_delete(event, props.changeUser,props.usersList,inputValue)
            }
    }
    return (
        <div className='edit-delete-button'>
            <Button className="edit" outline color="primary" onClick={editUser}>Edit</Button>
            <Button outline color="primary" onClick={deleteUser}>Delete</Button>
        </div>
    )


}
const mapStateToProps=state=>{
    return {
        usersList:state.usersList
    }
}
const mapDispatchToProps= (dispatch) =>{
    return {
        deleteUser:(id) => dispatch(deleteUser(id)),
        changeUser:(id,value) => dispatch(changeUser(id,value))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditAndDeleteButtons)