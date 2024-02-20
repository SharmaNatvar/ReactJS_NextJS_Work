import React, { useEffect, useState } from "react";
import "./Common.scss";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "./Container";
import logo from "../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])

  const controlNavbar = () =>{
    if(window.scrollY > 200){
      if(window.scrollY > lastScrollY && !mobileMenu){
        setShow("hide")
      }
      else{
        setShow('show')
      }
    }else{
      setShow('top')
    }
      setLastScrollY(window.scrollY)
  }

  useEffect(()=>{
    window.addEventListener("scroll",controlNavbar);
    return()=>{
      window.removeEventListener("scroll",controlNavbar);
    }
  },[lastScrollY])

  const openSearch = () =>{
    setMobileMenu(false)
    setShowSearch(true)
  }

  const openMobileMenu = () =>{
    setMobileMenu(true)
    setShowSearch(false)
  }

  const handleSearch = (e) => {
    console.log(search);
    if (e.key === "Enter" && search.length > 0) {
      navigate(`/search/${search}`);
      setTimeout(()=>{
        setShowSearch(false)
      },1000)
    }
  };

  const handleNavigation = (type)=>{
    if(type === "movie"){
      navigate('/explore/movie')
    }else{
      navigate('/explore/tv')
    }
    setMobileMenu(false)
  }



  return (
    <header className={`head_BG ${ mobileMenu ? "headMobileView" : " "} ${show}`}>
      <Container>
        <div className="headLogo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="headMenuItems">
          <li className="headMenuItem" onClick={()=> handleNavigation('movie')}>Movies</li>
          <li className="headMenuItem" onClick={()=> handleNavigation('tv')}>TV Shows</li>
          <li className="headMenuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>
        <div className="headMobileMenuItems">
          <HiOutlineSearch onClick={openSearch}/>
          {mobileMenu ? <VscChromeClose onClick={()=>setMobileMenu(false)}/> : <SlMenu onClick={openMobileMenu}/>}
        </div>
      </Container>
     {
      showSearch&&(
        <div className="headSearchBar">
        <Container>
        <div className="headSearchInput">
              <input
                type="text"
                placeholder="choose your movie"
                onKeyUp={handleSearch}
                onChange={(e) => setSearch(e.target.value)}
              />
              <VscChromeClose onClick={()=>setShowSearch(false)}/>
            </div>
        </Container>
      </div>
      )
     }
    </header>
  );
};

export default Header;
