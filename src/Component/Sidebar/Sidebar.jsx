import React from 'react'
import './Sidebar.css'
import home from '../../Image/home.png'
import video from '../../Image/video.png'
import display from '../../Image/display.png'
import user from '../../Image/user.png'
import history from '../../Image/history.png'
import watch from '../../Image/watch.png'
import trending from '../../Image/trending.png'
import music from '../../Image/music.png'
import game from '../../Image/game.png'
import setting from '../../Image/settings.png'
import report from '../../Image/report.png'
import help from '../../Image/help.png'
import feedback from '../../Image/feedback.png'

const Sidebar = ({ sidebar,category,setCategory }) => {
    return ( 
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className='shortcut-links'>
            <div className={`side-link ${category===0?"active":""}`}onClick={()=>setCategory(0)}>
                    <img src={home} alt="home" className='home' /><p>Home</p>
                </div>
                <div className={`side-link ${category===18?"active":""}`}onClick={()=>setCategory(18)}>
                    <img src={video} alt="home" className='home' /><p>Shorts</p>
                </div>
                <div className={`side-link ${category===38?"active":""}`}onClick={()=>setCategory(38)}>
                    <img src={display} alt="display" className='home' /><p>Subscriptions</p>
                </div>
                <hr />
                <div className='yours'>
                    <h3 className='hlo'>You</h3>
                    <div className={`side-link ${category===40?"active":""}`}onClick={()=>setCategory(40)}>
                        <img src={user} alt="user" className='home' /><p>Your channel</p>
                    </div>
                    <div className={`side-link ${category===28?"active":""}`}Click={()=>setCategory(28)}>
                        <img src={history} alt="history" className='home' /><p>History</p>
                    </div>
                    <div className={`side-link ${category===44?"active":""}`}onClick={()=>setCategory(44)}>
                        <img src={watch} alt="watch" className='home' /><p>Watch later</p>
                    </div>
                </div>
                <hr />
                <div className='Explore'>
                    <h3 className='hlo'>Explore</h3>

                    <div className={`side-link ${category===2?"active":""}`}onClick={()=>setCategory(2)}>
                        <img src={trending} alt="trending" className='home' /><p>Trending</p>
                    </div>
                    <div className={`side-link ${category===10?"active":""}`}onClick={()=>setCategory(10)}>
                        <img src={music} alt="music" className='home' /><p>Music</p>
                    </div>
                    <div className={`side-link ${category===20?"active":""}`}onClick={()=>setCategory(20)}>
                        <img src={game} alt="game" className='home' /><p>Gaming</p>
                    </div>
                </div>
                <hr />
                <div className="side-link">
                    <img src={setting} alt="setting" className='home' /><p>Setting</p>
                </div>
                <div className="side-link">
                    <img src={report} alt="report" className='home' /><p>Report</p>
                </div>
                <div className="side-link">
                    <img src={help} alt="help" className='home' /><p>Help</p>
                </div>
                <div className="side-link">
                    <img src={feedback} alt="feedback" className='home' /><p>Feedback</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar