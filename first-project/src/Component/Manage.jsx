import React from "react";
import CartManage from "./CartManage";
import BusinessCard from '../assets/business.jpg';
import GraphCard from '../assets/graph.jpg';
import StockCard from '../assets/stock-market.jpg';


const Manage = () =>{
    return(
       <>
            <div>
                <h1 className="text-center pt-5">Save time & money with smart <br/> financial management</h1>
            </div>
            <div className="d-flex py-5">
                <div className="col-4">
                    <div className="card">
                        <img src={BusinessCard} alt="abc"/>
                        <CartManage/>
                    </div>
                </div>            
                <div className="col-4">
                    <div className="card">
                        <img src={GraphCard} alt="abc" style={{height:"300px" }} className="p-3 "/>
                        <CartManage/>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src={StockCard} alt="abc" style={{height:"300px" }} className="p-3 "/>
                        <CartManage/>
                    </div>
                </div>
            </div>
       </>
    )
}
export default Manage