import React from "react";

const Filter = (props) => {
    return (
        <div>
            <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btn-check-outlined">{props.text}</label>
        </div>
    );
}

export default Filter;