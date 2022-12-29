import React, {useCallback, useState} from "react";
import AddImageForm from "./AddImageForm";
import { getDatabase, set } from "firebase/database";
import {v4 as uid} from 'uuid'
// this is also important ki konsa ref utha rhe ho i.e database one or storage one!
// Yha database wla lena hota h coz we are accessing database
import { ref } from "firebase/database";
import { db } from "../../firebase";

const AddImages = (props) => {

    const[isEditing, setIsEditing] = useState(false);

    // Important part here is that we can upload data via two methods, i.e one is simply the fetch onw where firebase will automatically create a child node even after giving proper address
    // Second method is below one where we can upload images via set method, this uploades / updates images at the exact address we tell it to .

    const addImageHandler = (image) => {
        const uuid = uid();
        set(ref(db, `images/${uuid}`),{
            name : image.name,
            description : image.description,
            tag : image.tag,
            author : image.author,
            url : image.url,
            key : image.key,
            uid : uuid,
        });
        setIsEditing(false);
    }
    

    
    const showFormHandler = (event) => {
        if(isEditing === true)
            setIsEditing(false);
        else    
            setIsEditing(true);
    }

    return (
        <div className="col mt-4">
            <div className="d-flex justify-content-center mb-4">
                <button onClick={showFormHandler} className="btn btn-primary btn-lg">ADD IMAGE</button>
            </div>
            {isEditing && <div >
                <AddImageForm onAddImage={addImageHandler}/>
            </div>}

        </div>
    );
}
export default AddImages;