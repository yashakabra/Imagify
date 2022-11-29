import React from "react";

const Filters = (props) => {
    return (
        <div className="container d-flex justify-content-center">
            <div className="mx-4">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select Filter</option>
                    <option value="1">Nature</option>
                    <option value="2">Buildings</option>
                    <option value="3">Monuments</option>
                    <option value="4">People</option>
                    <option value="5">Cars</option>
                    <option value="6">Flowers</option>
                </select>
            </div>
            <button className="mx-4 btn btn-primary">Aplly Filter</button>
            <button className="mx-4 btn btn-primary">Reset Filter</button>
        </div>
    );
}

export default Filters;