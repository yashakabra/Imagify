import React, {useEffect, useRef, useState} from "react";
import { storage } from "../../firebase";
import { getStorage, ref, getDownloadURL, uploadBytes, uploadBytesResumable} from "firebase/storage";
const AddImageForm = (props) => {

    const [image, setImage] = useState('');
    const enteredAuthor = useRef();
    const enteredDescription = useRef();
    const enteredName = useRef();
    const enteredTag = useRef();

    const metadata = {
        contentType: 'image/jpeg'
    };
    
    const imageUploadHandler = (event) => {
        setImage(event.target.files[0]);
    }

    const sumbitHandler = async (event) => {
        event.preventDefault();
        
        let ran = Math.trunc(Math.random()*1000);
        const storage = getStorage();
        const refr = ref(storage, `/images/${ran}`);
        const uploadTask = uploadBytesResumable(refr, image, metadata);
        uploadTask.on('state_changed',
            (snapshot) => {
            },
            (error) => {
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(enteredAuthor.current.value, enteredDescription.current.value, enteredName.current.value, enteredTag.current.value, url);
                    const image = {
                        name : enteredName.current.value,
                        description : enteredDescription.current.value,
                        author : enteredAuthor.current.value,
                        tag : enteredTag.current.value,
                        url : url,
                        key : ran,
                    }
                    props.onAddImage(image);
                });
            }
        )
    }

    return (
        <div className="container">
            <form onSubmit={sumbitHandler}>                
                <label class="form-label" for="customFile">Default file input example</label>
                <input type="file" class="form-control" id="customFile" onChange={imageUploadHandler}/>
                <div class="form-outline mt-3">
                    <input type="text" id="typeText" class="form-control" ref={enteredName}/>
                    <label for="typeText">Image Name</label>
                </div>
                <div class="form-outline mt-3">
                    <input type="text" id="typeText" class="form-control" ref={enteredDescription}/>
                    <label for="typeText">Image Description</label>
                </div>
                <div class="form-outline mt-3">
                    <input type="text" id="typeText" class="form-control" ref={enteredAuthor}/>
                    <label for="typeText">Author Name</label>
                </div>
                <div class="input-group mb-3 mt-3">
                    <label class="input-group-text" for="inputGroupSelect01">Tag</label>
                    <select class="form-select" id="inputGroupSelect01" ref={enteredTag} defaultValue={1}>
                        <option selected>Select...</option>
                        <option value="1">Nature</option>
                        <option value="2">Buildings</option>
                        <option value="3">Monuments</option>
                        <option value="4">People</option>
                        <option value="5">Cars</option>
                        <option value="6">Flowers</option>
                    </select>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row w-50">
                        <button type="submit" className="btn btn-success">Upload</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default AddImageForm;