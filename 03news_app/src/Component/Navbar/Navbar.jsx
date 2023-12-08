import React from 'react'
import './Navbar.css';
import search_light from '../../assets/search-w.png';
import search_dark from '../../assets/search-b.png';
import sun from '../../assets/day.png';
import moon from '../../assets/night.png';


const Navbar = (props) => {

  const toggleFun = ()=>{

    props.theme == 'light' ? props.setTheme('dark') : props.setTheme('light');

  }

  return (
    <>
        <div className={`navbar_bg ${props.theme}`}>
            <nav className= 'containerCustom'>
                <div className='navbarCon'>
                    <h1>News</h1>

                    <ul>
                        <li >Home</li>
                        <li onClick={()=>props.setCategory('technology')}>Technology</li>
                        <li onClick={()=>props.setCategory('business')}>Business</li>
                        <li onClick={()=>props.setCategory('health')}>Health</li>
                        <li onClick={()=>props.setCategory('sports')}>Sports</li>
                        <li onClick={()=>props.setCategory('entertainment')}>Entertainment</li>
                    </ul>

                    <div className='search_box'>
                        <input type='text' placeholder='Search'/>
                        <img src={props.theme == 'dark' ? search_dark : search_light } alt='search'/>
                    </div>
                    <img src={props.theme == 'dark' ? sun : moon} alt="mode" className='mode' onClick={()=>toggleFun()}/>
                </div>         
            </nav>
        </div>
    </>
  )
}

export default Navbar