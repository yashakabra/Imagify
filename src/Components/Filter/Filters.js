import React from "react";
import Filter from "./Filter";

const Filters = (props) => {
    return (
        <div class="btn-group btn-group-lg gap-5" role="group">
            <Filter text="Mountains"/>
            <Filter text="Cars"/>
            <Filter text="Nature"/>
            <Filter text="Bikes"/>
            <Filter text="People"/>
            <Filter text="Abstract"/>
        </div>
    );
}

export default Filters;