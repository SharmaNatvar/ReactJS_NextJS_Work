import { useState } from "react";
import Data from "./Component/Data";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [dataProp, setDataProp] = useState();
  // const [dataProps, setDataProps] = useState();

  const handleSearch = async () => {
    console.log(inputValue);
    const res = await axios.get(`http://localhost:3333/users`);
    console.log(res);
    const {data} = await res;
    console.log(Array.isArray(data) ,'hay');
    const apiDataShow =  data
    // setDataProps(data)
    console.log(apiDataShow);
    setInputValue("");
  };

  const handleReset = async () => {
    const { data } = await axios.get("http://localhost:3333/users");
    setDataProp(data);
  };

  return (
    <>
      <h1>App</h1>
      <div
        className="d-flex w-auto m-auto"
        style={{ padding: "15px", maxWidth: "400px", alignContent: "center" }}
      >
        <input
          type="text"
          className="ps-3"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-outline-info ms-3" onClick={handleSearch}>
          {" "}
          Search
        </button>
        <button className="btn btn-outline-dark ms-3" onClick={handleReset}>
          {" "}
          Reset
        </button>
      </div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <Data  dataProp={dataProp} inputValue={inputValue}/>
      </table>
    </>
  );
}

export default App;
