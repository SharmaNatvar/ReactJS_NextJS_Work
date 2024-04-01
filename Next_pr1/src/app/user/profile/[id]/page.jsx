import React from "react";

const page = ({params}) => {
const {id} = params
    return (
    <>
      <h1>id page {id}</h1>
    </>
  );
};

export default page;
