import React from 'react'
import { useNavigate } from 'react-router-dom';

const Parties = () => {

  const navigate = useNavigate();


  return (
    <>
     <form>
          <div className="form_bg">
            <button onClick={() => navigate("/home")}>Back</button>
            <div className="form_sear">
              <svg
                className=""
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <input
                type="search"
                id="default-search"
                placeholder="Search Party..."
                required=""
              />
              <button type="submit">Search</button>
            </div>
            <button onClick={() => navigate("/addparty")}>Add Party</button>
          </div>
        </form>
     <h1>ViewParties</h1> 
    </>
  )
}

export default Parties
