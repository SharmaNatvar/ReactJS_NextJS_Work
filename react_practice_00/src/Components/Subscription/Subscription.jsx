import React from "react";
import "./Subscription.css";
import { BioAge, BioName } from "../BioData/BioData";

const Subscription = ({ name, age }) => {
  //   console.log("========== props ==========", props);
  //   console.log("========== props ==========", props.name);
  console.log("========== name ==========", name);
  console.log("========== age ==========", age);
  return (
    <>
      <h1 className="text-amber-300">Hello ji</h1>
      <BioName name="Sharma" />
      <br />
      <BioAge age="24" /> {<hr />}
      {/* <BioName name={props.name} /> <br />
      <BioAge age={props.age} /> */}
      <BioName name={name} /> <br />
      <BioAge age={age} />
    </>
  );
};

export default Subscription;
