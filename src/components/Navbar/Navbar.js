import {Link} from 'react-scroll'
import React from "react";
import logo from "./SupremeCarbonLogo.png"

function Navbar() {
    return (
        <nav className="navbar bg-base-100 p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                        <li><a className="text-primary hover:text-white"><Link activeClass="text-secondary" to="activatedcarbon" spy={true} smooth={true} offset={-70} duration={500}>Activated Carbon</Link></a></li>
                        <li><a className="text-primary hover:text-white"><Link activeClass="text-secondary" to="fieldofapplication" spy={true} smooth={true} offset={-70} duration={500}>Field Of Application</Link></a></li>
                        <li><a className="text-primary hover:text-white"><Link activeClass="text-secondary" to="aboutus" spy={true} smooth={true} offset={-70} duration={500}>About Us</Link></a></li>
                        <li><a className="text-primary hover:text-white"><Link activeClass="text-secondary" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></a></li>
                    </ul>
                </div>
                <div >
                    <ul className="menu menu-horizontal font-bold">
                        {/*<li><img src={logo} alt="Supreme Carbon" className="hover:animate-spin h-14"></img></li>*/}
                        <li><a className="normal-case text-2xl font-bold"><img src={logo} alt="Supreme Carbon" className="hover:animate-spin h-14"></img><Link to="home" spy={true} smooth={true} offset={-70} duration={500}>Supreme Carbon</Link></a></li>
                    </ul>

                    {/*<img src={logo} alt="Supreme Carbon" className="hover:animate-spin h-12"></ims*/}
                </div>

            </div>
            {/*<div className="navbar-center hidden lg:flex">*/}
            {/*    <ul className="menu menu-horizontal px-1 font-bold">*/}
            {/*        <li><a className="text-gray-400 hover:text-white"><Link activeClass="text-white" to="activatedcarbon" spy={true} smooth={true} offset={-70} duration={500}>Activated Carbon</Link></a></li>*/}
            {/*        <li><a className="text-gray-400 hover:text-white"><Link activeClass="text-white" to="fieldofapplication" spy={true} smooth={true} offset={-70} duration={500}>Field Of Application</Link></a></li>*/}
            {/*        <li><a className="text-gray-400 hover:text-white"><Link activeClass="text-white" to="aboutus" spy={true} smooth={true} offset={-70} duration={500}>About Us</Link></a></li>*/}
            {/*        <li><a className="text-gray-400 hover:text-white"><Link activeClass="text-white" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></a></li>*/}
            {/*    </ul>*/}
            {/*</div>*/}

            <div className="navbar-end hidden lg:flex">
                {/*<a className="group relative inline-flex items-center overflow-hidden rounded border border-current px-6 py-3 mr-3 text-gray-600 hover:text-white focus:outline-none focus:ring active:text-indigo-500" href={resume} target="_blank">*/}
                {/*    <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">*/}
                {/*        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
                {/*          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>*/}
                {/*        </svg>*/}
                {/*    </span>*/}
                {/*    <span className="text-sm text-white font-medium transition-all group-hover:mr-4">*/}
                {/*        Resume*/}
                {/*    </span>*/}
                {/*</a>*/}

                <ul className="menu menu-horizontal px-1 font-bold">
                    <li><a className="text-primary hover:text-white"><Link activeClass="text-secondary" to="activatedcarbon" spy={true} smooth={true} offset={-70} duration={500}>Activated Carbon</Link></a></li>
                    <li><a className="text-primary hover:text-white"><Link activeClass="text-secondary" to="fieldofapplication" spy={true} smooth={true} offset={-70} duration={500}>Field Of Application</Link></a></li>
                    <li><a className="text-primary hover:text-white"><Link activeClass="text-secondary" to="aboutus" spy={true} smooth={true} offset={-70} duration={500}>About Us</Link></a></li>
                    <li><a className="text-primary hover:text-white"><Link activeClass="text-secondary" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;