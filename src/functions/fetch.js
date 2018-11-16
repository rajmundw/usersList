const newFetch = (method,newUser) =>{
    let fetchDetails={}
    if(method==="GET"){
        fetchDetails={
            method : method
        }
    }else{
        fetchDetails={
            method: method,
                headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)

        }
    }

    fetch('http://localhost:3000/users',fetchDetails).then( resp => {
        return resp.json();
    })
}

export default newFetch