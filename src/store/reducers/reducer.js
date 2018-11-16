import * as actionTypes from '../actions/actionTypes'

//default state
const initialState = {
    usersList:[]
}
//function which changing state
const reducer = (state=initialState,action)=>{
    //switch to choose proper action
    switch (action.type){
        case actionTypes.INITIAL_STATE:{

            return {
                ...state,
                usersList: action.list
            }
        }
        case actionTypes.POST_STATE:{
            //coping state
            const prevState=[...state.usersList]
            //push new User to state
            prevState.push(action.user)
            console.log(prevState)
            return{
                usersList:prevState
            }
        }
        case actionTypes.DELETE_STATE:{
            const prevState=[...state.usersList]
            //find index user to delete
            const userToDeleteIndex=prevState.findIndex(element=>{
                return element.id===action.id
            })
            //deleting user
            prevState.splice(userToDeleteIndex,1)
            return{
                usersList:prevState
            }
        }
        case actionTypes.PATCH_STATE:{
            const prevState=[...state.usersList]
            //find index user to change
            const userToDeleteIndex=prevState.findIndex(element=>{
                return element.id===action.id
            })
            //changing user data
            prevState.splice(userToDeleteIndex,1,action.newName)
            return{
                usersList:prevState
            }
        }
        //default action
        default:
            return state
    }

}

export default reducer;
