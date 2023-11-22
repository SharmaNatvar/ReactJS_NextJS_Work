import React, { useEffect, useState } from "react";

let Card = (props) =>{

    
    useEffect(() => {
        console.log("props change", props)
        setBooks(props.books)
    }, [props])
    

    const [books, setBooks] = useState(props.books)

    
    return(
        <>
            {books.map((item) => {
                return (
                    <div className="card col-4" style={{width:'18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">{item.book}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{item.writer}</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button onClick={()=> props.deleteCardData(item)} >Delete</button>
                        </div>
                    </div>
                )
            }
            )}
            
        </>
    )
}

export default Card