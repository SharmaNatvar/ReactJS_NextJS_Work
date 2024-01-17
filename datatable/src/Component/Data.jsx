import axios from "axios";
import React, { useEffect, useState } from "react";

const Data = ({ dataProp, inputValue }) => {
  // console.warn(dataProp);
  console.warn(inputValue);

  const [apiData, setApiData] = useState();

  useEffect(() => {
    getData();
    setApiData(dataProp);
  }, [dataProp]);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:3333/users");
    setApiData(data);
  };

  // console.log(apiData);
  return (
    <>
      <tbody>
        {
          apiData?.filter((e) => {
            return inputValue.toLocaleLowerCase() === ""
              || e.name.toLocaleLowerCase().includes(inputValue);
          })
          .map((e) => {
            return (
              <tr className="table-light" key={e.id}>
                <th scope="row">{e.id}</th>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.address}</td>
                <td>{e.status}</td>
              </tr>
            );
          })}
      </tbody>
    </>
  );
};

export default Data;
