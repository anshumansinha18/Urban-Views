import "./navbar.scss"
import React, { useState } from 'react'

import Logo from '../../logo3.png'; //Logo of Urban Views
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { Link } from 'react-router-dom';

const Navbar = () => {

    //Adding gradient to navbar when page is on the top
    // Remove gradient from navbar on scrolling down the page
    const [isScrolled, setIsScrolled] = useState(false);

    // window.pageYoffset : can be used to check whether we have
    //                      scrolled the page or not

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                {/* Left Side of NAVBAR */}
                <div className="left">
                    {/* Displaying Logo on left side of Navbar */}
                    <img src={Logo}
                        alt="">
                    </img>
                    <span>Homepage</span>
                    <Link to="/series" className="link">
                        <span>Series</span>
                    </Link>

                    <Link to="/movies" className="link">
                        <span>Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                {/* RIGHT SIDE OF NAVBAR */}
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    {/* profile pic display on right side of navbar */}
                    <img src="https://scontent.fccu1-1.fna.fbcdn.net/v/t1.6435-9/39753186_2137170529841005_5393503017012035584_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NeqS7LB3EHYAX-v4Goh&_nc_ht=scontent.fccu1-1.fna&oh=69f62ea688d3f6299621e91bcacdb356&oe=61416666"
                        alt="">

                    </img>
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    )
}

export default Navbar