import React, {useCallback, useState} from "react";
import AddImageForm from "./AddImageForm";
import { getDatabase, set } from "firebase/database";
// import { uid } from "react-uid";
import {v4 as uid} from 'uuid'
// import 
import { ref } from "firebase/database";
import { db } from "../../firebase";

const AddImages = (props) => {

    // const writeToDatabase = () => {
    //     const uuid = uid();
    //     set(ref(db, `/${uuid}`),{

    //     });
    // }


    const[isEditing, setIsEditing] = useState(false);

    const addImageHandler = (image) => {
        console.log("BEFORE SET");
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
        console.log("UPDATED");
        setIsEditing(false);
    }

    const showFormHandler = (event) => {
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