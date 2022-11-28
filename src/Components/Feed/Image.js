import React, {useState} from "react";

const Image = ({image}) => {
    return (
        <div>
            <div class="card my-3 rounded">
                <img src={image.imageurl} class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">{image.name}</h5>
                </div>
            </div>
        </div>
    );
}
export default Image;