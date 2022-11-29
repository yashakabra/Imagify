import { getMetadata } from "firebase/storage";
import React, { useCallback, useEffect, useState } from "react";
import Image from "./Image";
import Modal from "./Modals/Modal";
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

    const getData = (imageObj) => {
        let tempObj = imageObj;
        setModalData(tempObj);
        setModal(true);
        return;
    }

    const deleteHandler = () => {
        remove(ref(db, `images/${modalData.uid}`));
    }

    const closeHandler = () => {
        setModal(false);
    }

    const finalUpdateHandler = (image) => {
        set(ref(db, `images/${modalData.uid}`),{
            name : image.name,
            description : image.description,
            tag : image.tag,
            author : image.author,
            url : modalData.imageurl,
            key : modalData.id
        });
        setModal(false);
    }

    // useCallBack also usses dependencies, here we list dependencies that this function might have
    // state updating function dont needed to be added as dependencies

    // Here we used useCallback coz we dont want the fetch function to render everytime unnessasry.

    const fetchImageHandler = useCallback(async () => {
        console.log("INSIDE USECALLBACK");
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
    },[modal]);

    // Yha pr humne dependency m fetchMoviesHandler islie dalla h coz fetchMovies handler m agr koi external state h jo ki chnage ho rha h the hmra function bhi chnage hoga nd tb we wnat ki ye handler dobara execute ho.
    useEffect(()=>{
        console.log("INSIDE USEEFFECT");
        fetchImageHandler();
    }, [fetchImageHandler, ]);

    return (
        <div >
            <div className="container-fluid">
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
            {modal && <Modal deleteImage={deleteHandler} onClose={closeHandler} item={modalData} onFinalUpdate = {finalUpdateHandler}/>}
        </div>
    );
}

export default Feed;