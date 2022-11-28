import React from "react";

const DeleteModal = (props) => {
    let modalStyle = {
        display : 'block',
        backgroundColor : 'rgba(0,0,0,0.8)',
    }
    return (
            <div class="modal show fade" style={modalStyle}>
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Confirm</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.onClose}></button>
                    </div>
                    <div class="modal-body">
                        <h6>Are you sure ?</h6>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" onClick={props.onClose}>Close</button>
                        <button type="button" class="btn btn-primary" onClick={props.onConfirm}>Confirm</button>
                    </div>
                    </div>
                </div>
            </div>
    );
}

export default DeleteModal;