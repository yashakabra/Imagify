import { getMetadata } from "firebase/storage";
import React, { useCallback, useEffect, useState } from "react";
import Image from "./Image";
import Modal from "./Modal";
import { set } from "firebase/database";
import { ref } from "firebase/database";
import { db } from "../../firebase";
import { remove } from "firebase/database";
const initObj = {
    id : null,
    name : null,
    description : null,
    author : null,
    imageurl : null,
    tag : null,
    uid : null,
}

const Feed = (props) => {
    
    const [imagesArr, setImagesArr] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState(initObj);
    const [updateData, setUpdatedata] = useState(false);

    const getData = (imageObj) => {
        let tempObj = imageObj;
        setModalData(tempObj);
        setModal(true);
        return;
    }

    const deleteHandler = () => {
        console.log("DELETEEE");
        remove(ref(db, `images/${modalData.uid}`));
    }

    const fetchImageHandler = useCallback(async () => {
        try{
            const response = await fetch('https://reacthttp-d289b-default-rtdb.firebaseio.com/images.json');
            if(!response.ok){
                throw new Error('Something fucked up !');
            }
            const data = await response.json();

            const loadedImages = [];
            for(const key in data){
                loadedImages.push({
                    id : data[key].key,
                    name : data[key].name,
                    description : data[key].description,
                    author : data[key].author,
                    imageurl : data[key].url,
                    tag : data[key].tag,
                    uid : key,
                });
            }
            setImagesArr(loadedImages);
        }catch(error){
            
        }
    },[]);

    useEffect(()=>{
        fetchImageHandler();
    }, [fetchImageHandler, modal]);

    const closeHandler = () => {
        setModal(false);
        setUpdatedata(false);
    }

    const updateHandler = () => {
        setUpdatedata(true);
    }

    const finalUpdateHandler = (image) => {
        console.log("BEFORE SET");
        console.log(image.name, image.description, image.tag, image.author);
        set(ref(db, `images/${modalData.uid}`),{
            name : image.name,
            description : image.description,
            tag : image.tag,
            author : image.author,
            url : modalData.imageurl,
            key : modalData.id
        });
        console.log("UPDATED");
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {imagesArr.map((obj) => {
                        return (
                            <div className="col-md-4" key={obj.id} onClick={()=>{
                                getData(obj);
                            }}>
                                <Image image={obj}/>
                            </div>
                        );
                    })}
                </div>
            </div>
            {modal && <Modal deleteImage={deleteHandler} hideModal={()=>{setModal(false)}} onClose={closeHandler} onUpdate={updateHandler} item={modalData} update={updateData} onFinalUpdate = {finalUpdateHandler}/>}
        </div>
    );
}
export default Feed;