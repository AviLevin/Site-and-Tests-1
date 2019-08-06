import React from 'react';

function Input(props) {
    if (props.require) {
        let required = true;
    }

    if (props.type == "text" || props.type == "password") {
        return (
            <div class="form-group">
                <label for={props.name}>Title:</label>
                <input type={props.type} class="form-control" id={props.name} name={props.name} />
            </div>
        );
    }
}

export default Input;
