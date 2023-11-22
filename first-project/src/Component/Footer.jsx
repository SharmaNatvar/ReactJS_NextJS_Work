import React from "react";
import SideFooter from './SideFooder'
import SecFooter from "./SecFooter";

const Footer = () =>{
    return (
        <>
            <div className="d-flex bg-secondary mt-4 py-5">
                <div className="col-6">
                    <SideFooter/>
                </div>
                <div className="col-6">
                    <SecFooter/>
                </div>
            </div>
        </>
    )
};

export default Footer