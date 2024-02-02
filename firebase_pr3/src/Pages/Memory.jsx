import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { imgDB, txtDB } from "../fireBaseConfig";
import { v4 } from "uuid";
import { addDoc, collection, getDocs } from "firebase/firestore";

const Memory = () => {
  const [url, setUrl] = useState();
  const [data, setData] = useState();

  const handleFile = (e) => {
    console.log(e.target.files[0]);
    uploadBytes(ref(imgDB, `img/${v4()}`), e.target.files[0]).then((res) => {
      getDownloadURL(res.ref).then((res) => setUrl({ ...url, urlId: res }));
    });
  };

  console.log(url, "url ");

  const handleSumbit = async () => {
    await addDoc(collection(txtDB, "memoryFile"), {
      urlId: url.urlId,
      memory: url.memory,
    }).then((res) => alert('done')).catch(err=>alert(err))
  };

  useEffect(() => {
    async function getUrlData() {
      const res = await getDocs(collection(txtDB, "memoryFile"));
      // .then((res)=>console.log(res))
      const result = res.docs?.map((val) => ({ ...val.data(), id: val.id }));
      setData(result);
    }
    getUrlData();
  }, []);
  return (
    <>
      <Navbar />
      <h1>Memory</h1>

      <input type="file" onChange={(e) => handleFile(e)} />
      <input
        type="text"
        name="memory"
        placeholder="enter your memory"
        onChange={(e) => setUrl({ ...url, ["memory"]: e.target.value })}
      />
      <button onClick={handleSumbit}>Sumbit</button>

      {data?.map((e) => {
        return (
          <div className="url_bg">
            <img src={e.urlId} />
            <h1>{e.memory}</h1>
          </div>
        );
      })}
    </>
  );
};

export default Memory;
