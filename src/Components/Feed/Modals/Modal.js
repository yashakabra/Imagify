import { render } from "@testing-library/react";
import React, { useState } from "react";
import { useRef } from "react";
import DeleteModal from "./DeleteModal";

const Modal = (props) => {

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const enteredAuthor = useRef();
    const enteredDescription = useRef();
    const enteredName = useRef();
    const enteredTag = useRef();

    const submitHandler = () => {
        event.preventDefault();
        const image = {
            name : enteredName.current.value,
            description : enteredDescription.current.value,
            author : enteredAuthor.current.value,
            tag : enteredTag.current.value,
        }
        props.onFinalUpdate(image);
        props.hideModal();
    }
    
    const showDeleteModalHandler = () => {
        setShowDeleteModal(true);
    }

    const confirmDeleteHandler = () => {
        setShowDeleteModal(false);
        props.deleteImage();
        props.hideModal();
    }

    const closeDeleteModalHandler = () => {
        setShowDeleteModal(false);
    }
    let modalStyle = {
        display : 'block',
        backgroundColor : 'rgba(0,0,0,0.8)',
    }
        
    return (
        <div>
            <div className="modal show fade " style={modalStyle}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.item.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.onClose}></button>
                        </div>
                        <div className="modal-body">
                            <img src={props.item.imageurl} className="img-fluid"/>
                            <p>{props.item.description}</p>
                            <h4>Author :</h4>
                            <p>{props.item.author}</p>
                            <h4>Tags :</h4>
                            <p>{props.item.tag
                            }</p>
                            {props.update && (<div>
                                <form onSubmit={submitHandler}>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Name</label>
                                        <input ref={enteredName} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={props.item.name}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Description</label>
                                        <input ref={enteredDescription} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={props.item.description}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Author</label>
                                        <input ref={enteredAuthor} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={props.item.author}/>
                                    </div>
                                    <div class="input-group mb-3 mt-3">
                                        <label class="input-group-text" for="inputGroupSelect01">Tag</label>
                                        <select ref={enteredTag} class="form-select" id="inputGroupSelect01" defaultValue={props.item.tag}>
                                            <option selected>Select...</option>
                                            <option value="1">Nature</option>
                                            <option value="2">Buildings</option>
                                            <option value="3">Monuments</option>
                                            <option value="4">People</option>
                                            <option value="5">Cars</option>
                                            <option value="6">Flowers</option>
                                        </select>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>

                            </div>)}
                        </div>
                        <div className="modal-footer">
                            {!props.update && <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={showDeleteModalHandler} >Delete</button>}
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={props.onClose}>Close</button>
                            {!props.update && <button type="button" className="btn btn-primary" onClick={props.onUpdate}>Update</button>}
                        </div>
                    </div>
                </div>
            </div>
            {showDeleteModal && <DeleteModal onConfirm={confirmDeleteHandler} onClose={closeDeleteModalHandler}/>}
        </div>
    );
}

export default Modal;