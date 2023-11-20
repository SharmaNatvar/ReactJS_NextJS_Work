import React from "react";

let Navbar = ()=>{
    // add Shdow header
        // const shadowHeader = () =>{
        //     const header = document.getElementById('header');
        //      >= 50 ? header.classList.add('shadow_header'):
        //                         header.classList.remove('shadow_header')
        // }

        // window.addEventListener('scroll',shadowHeader)


    return(
        <>
             <header className="header shadow_header" id="header">
                <nav className="nav container">
                    <a href="#" className="nav_logo">
                        <i className="ri-book-3-line"></i>E-Book
                    </a>
                    <div className="nav_menu">
                        <ul className="nav_list">
                            <li className="nav_item">
                                <a href="#home" className="nav_link active-link">
                                    <i className="ri-home-line"></i>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li className="nav_item">
                                <a href="#featured" className="nav_link">
                                    <i className="ri-book-3-line"></i>
                                    <span>Featured</span>
                                </a>
                            </li>
                            <li className="nav_item">
                                <a href="#discount" className="nav_link">
                                    <i className="ri-price-tag-3-line"></i>
                                    <span>Discount</span>
                                </a>
                            </li>
                            <li className="nav_item">
                                <a href="#new" className="nav_link">
                                    <i className="ri-bookmark-line"></i>
                                    <span>New Book</span>
                                </a>
                            </li>
                            <li className="nav_item">
                                <a href="#testimnial" className="nav_link">
                                    <i className="ri-message-2-line"></i>
                                    <span>Testimnial</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav_actions">
                        {/* <!-- search button --> */}
                        <i className="ri-search-line search_button" id="search_button"></i>

                        {/* <!-- log in  --> */}
                        <i className="ri-user-line login_button" id="login_button"></i>

                        {/* <!-- theme button --> */}
                        <i className="ri-moon-line change_theme" id="theme_button"></i>
                    </div>
                </nav>
            </header>
        </>
    )
}


export default Navbar