import React from "react";
import ServiceCard from "./ServiceCard";

let Services = () =>{
    return(
        <>
            <section class="services section">
                <div class="services_container container d-flex">
                    <div className="col-4">
                        <ServiceCard
                            ServiceIcon = {<i class="ri-customer-service-2-line"></i>}
                            serviceTitle = {'24/7 support'}
                            ServiceDesc = {'call us anytime'}
                        />
                    </div>
                    <div className="col-4">
                        <ServiceCard
                            ServiceIcon = {<i class="ri-truck-line"></i>}
                            serviceTitle = {'Free shipping'}
                            ServiceDesc = {'order more than $1000'}
                        />
                    </div>
                    <div className="col-4">
                        <ServiceCard
                            ServiceIcon = {<i class="ri-lock-2-line"></i>}
                            serviceTitle = {'secure Payment'}
                            ServiceDesc = {'100% secure payment'}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services