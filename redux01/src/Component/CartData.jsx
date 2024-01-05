import React from "react";
import { useSelector } from "react-redux";

const CartData = () => {
  const userInputData = useSelector((state) => state.userInputData)
    const itemAmount = userInputData.length && userInputData.map(item => item.price).reduce((pre,next)=>pre+next)
  return (
    <>
      <div>CartData</div>

      <div className="cart_page">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>prices</th>
            </tr>
            {userInputData?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.title.slice(0, 12).toLowerCase()}....</td>
                  <td>&#36; {item.price}</td>
                </tr>
              );
            })}
          </thead>
        </table>
      <div className="price_detail">
            <div className="adjust_price"><span>Amount</span><span>{itemAmount}</span></div>
            <div className="adjust_price"><span>Discount</span><span>{itemAmount/10}</span></div>
            <div className="adjust_price"><span>Tax</span><span>{Math.round(itemAmount*18/100)}</span></div>
            <div className="adjust_price"><span>Total</span><span>{itemAmount+ itemAmount*18/100 - itemAmount/10}</span></div>
      </div>
      </div>

    </>
  );
};

export default CartData;
