import React from 'react';
import { Button } from 'reactstrap';
import './addButton.css'
const AddButton = (props) => {

    return (
        <div>
            <Button className="add-user-button" outline color="primary" onClick={props.click}>Add User</Button>
        </div>
    )


}

export default AddButton