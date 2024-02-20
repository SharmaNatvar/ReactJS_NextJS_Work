import React, { useState } from "react";
import "./Common.scss";

const SwitchBtn = ({ data, onBtnChange }) => {
  const [selectBtn, setSelectBtn] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (btn, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectBtn(index);
    }, 300);
    onBtnChange(btn, index);
  };


  return (
    <>
      <div className="switchBtns">
        <div className="btnItems">
          {data.map((btn, index) => {
            return(
                <span
              key={index}
              className={`btnItem ${selectBtn === index ? 'active' : " "}`}
              onClick={() => {
                activeTab(btn, index);
              }}
            >
              {btn}
            </span>
            )
          })}
          <span className="movingBg" style={{ left }}></span>
        </div>
      </div>
    </>
  );
};

export default SwitchBtn;
