import React from "react";

const NumList = ()=>{
    return (
        <>
            <div className="d-flex py-5" style={{background:'#CDF5FD'}}>
                <div className="col-6">
                    <h2 className="display-4">Trust your savings <br/>safely with us</h2>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <div className="px-2">
                        <h4 className="h1">10y</h4>
                        <span>Experience</span>
                    </div>
                    <div className="px-2">
                        <h4 className="h1">80k+</h4>
                        <span>Currently using</span>
                    </div>
                    <div className="px-2">
                        <h4 className="h1">34k+</h4>
                        <span>Positive Reviews</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NumList