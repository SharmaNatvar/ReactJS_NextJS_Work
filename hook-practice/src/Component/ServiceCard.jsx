import React from "react";

let ServiceCard = (props) =>{
    return(
        <>
            <article class="services_card">
                {props.ServiceIcon}
                <h3 class="services_title">{props.serviceTitle}</h3>
                <p class="services_description">{props.ServiceDesc}</p>
            </article>
        </>
    )
}

export default ServiceCard