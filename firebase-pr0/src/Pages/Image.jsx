import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { imgDB } from "../firebaseConfig";
import { v4 } from "uuid";
import NavBar from "../Component/NavBar";

const Image = () => {

    const [img, setImg] = useState();
    const [imgUrl, setImgUrl] = useState([]);
  

    const handleSubmitImg = () => {
        if (img !== undefined) {
          const imgRef = ref(imgDB, `homeImg/${v4()}`);
          uploadBytes(imgRef, img).then((val) => {
            getDownloadURL(val.ref).then((val) =>
              setImgUrl((data) => [...data, val])
            );
          });
        }
      };
    
      useEffect(() => {
        listAll(ref(imgDB, "homeImg")).then((imgVal) => {
          imgVal?.items.forEach((val) => {
            getDownloadURL(val).then((val) => setImgUrl((data) => [...data, val]));
          });
        });
      }, []);


  return (
    <>
    <NavBar/>
      <div className="imgBox_bg">
        <div className="imgBox">
          <input
            type="file"
            alt="imagr"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <button onClick={handleSubmitImg}>sumbit</button>
        </div>
      </div>
      <div>
        {imgUrl.map((e) => {
          return (
            <div>
              <img src={e} height="200px" width="300px" alt="hy"/>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Image
