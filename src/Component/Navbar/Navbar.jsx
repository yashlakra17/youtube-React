import React from 'react'
import './Navbar.css'
import menu_icon from '../../Image/menu.png'
import logo from '../../Image/logo.png'
import search_icon from "../../Image/search.png"
import upload_icon from "../../Image/upload.png"
import more_icon from "../../Image/more.png"
import notification_icon from "../../Image/notification.png"
import profile_icon from "../../Image/user_profile.jpg"
import { Link } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img  className='menu-icon'  onClick={() => setSidebar(prev => prev === false ? true : false)} src={menu_icon} alt="" />
                <img className='logo' src={logo} alt="" />
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder='Search' />
                    <img src={search_icon} alt="" />
                </div>
            </div>

            <div className="nav-right flex-div">
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt="" />
                <img src={notification_icon} alt="" />
               <Link to={`form/login/2811`} className="pro">
               <img src={profile_icon} className='user-icon' alt="" />
               </Link>
            </div>
        </nav>
    )
}

export default Navbar