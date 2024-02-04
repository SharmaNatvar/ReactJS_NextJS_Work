import React from "react";
import { Link } from "react-router-dom";
// import Navbar from '../Navbar/Navbar';
import vLogo from "../../assets/votingLogo.png";
import "./Main.css";

const Main = () => {
  //   const navigate = useNavigate();

  //   useEffect(()=>{
  //     if(localStorage.getItem("admin-log")){
  //       navigate("/Home")
  //     }
  //   },[])

  return (
    <>
      {/* <Navbar navData={false} /> */}
      <div className="logo_bg ">
        <div className="logo_box">
          <img src={vLogo} className="logo" alt="Logo" />
          <h3>Voting App</h3>
          <p>Make Things Digital</p>
          <div className="button_box">
            <Link to="/login">
              <button
                type="button"
              >
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button
                type="button"
              >
                SignUp
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
