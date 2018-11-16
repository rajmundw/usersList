

//get action which set initial state
export const setState=(firstUserList)=>{
    return {
        type: 'INITIAL_STATE',
        list: firstUserList
    }
}

// action set after component did mount
export const get = () => (dispatch) => {
    fetch('http://localhost:3000/users').then( resp => {
        return resp.json();
    }).then( data => {
        dispatch(setState(data))
    }).catch( err => {
        console.log( err );
    });
};


//post action which is dispatching to reducer
export const postState=(postUser)=>{
    return {
        type: 'POST_STATE',
        user: postUser
    }
}

//action set during adding new user
export const post = (newUser) => (dispatch) => { // (5)
//connect with json
    fetch('http://localhost:3000/users',
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)

        }
    ).then( resp => {
        return resp.json();
    }).then( data => {
        //using middlewere and sent to reducer data about new user
        dispatch(postState(data))
    }).catch( err => {
        console.log( err );
    });
};


//delete action which is dispatching to reduer
export const deleteState=(deleteUserId)=>{
    console.log(deleteUserId,'deleteState')
    return {
        type: 'DELETE_STATE',
        id: deleteUserId
    }
}

//is set during delete user
export const deleteUser = (id) => (dispatch) => {

    fetch(`http://localhost:3000/users/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }

        }
    ).then(dispatch(deleteState(id)))
        .catch( err => {
            console.log( err );
        });
};


//change action which is dispatching to reduer
export const patchState=(patchUserId,newName)=>{
    return {
        type: 'PATCH_STATE',
        id: patchUserId,
        newName:newName
    }
}


//is set during changing person data
export const changeUser = (id,editedUser) => (dispatch) => {
    fetch(`http://localhost:3000/users/${id}`,
        {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedUser)

        }
    ).then(dispatch(patchState(id,editedUser)))
        .catch( err => {
            console.log( err );
        });
};



