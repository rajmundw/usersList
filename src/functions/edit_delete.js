//this function is used to edit or delete element

const edit_delete=(event,action,state,newValue)=>{
    event.preventDefault()
    //copy nodelist user
    const listElements=[...document.querySelectorAll('li')]
   // choose user
    const clickedUser=event.target.parentElement.parentElement.parentElement
    //find choose user id
    const clickedUserIndex=listElements.findIndex(user=>{
        return user===clickedUser
    })
    //user to change or delete
    const userToDelete=state.filter((element,index)=>{
        if(index===clickedUserIndex){
            return element
        }
        return null
    })
    //finding user id , it could be other then id in state list because it is id which was add by json
    const userId=userToDelete[0].id
    const actionAsString=action.toString()
    //checking which action type was called
    if(actionAsString.slice(9,actionAsString.indexOf('('))==='deleteUser') {
        //delete action so pass only id
        action(userId)
    }else if(actionAsString.slice(9,actionAsString.indexOf('('))==='changeUser'){
        //changing user so pass id and changed user data
        const editedUser = {
            name: newValue,
            id:userId
        }
        action(userId, editedUser)
    }

}

export default edit_delete