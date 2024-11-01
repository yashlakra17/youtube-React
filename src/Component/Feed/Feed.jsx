// import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from '../../Image/ph1.png'
import thumbnail2 from '../../Image/ph2.png'
import thumbnail3 from '../../Image/ph3.png'
import thumbnail4 from '../../Image/ph4.png'
import thumbnail5 from '../../Image/ph5.png'
import thumbnail6 from '../../Image/ph6.png'
import thumbnail7 from '../../Image/ph7.png'
import thumbnail8 from '../../Image/ph8.png'
import { Link } from 'react-router-dom'
// import { API_KEY } from '../../Data'

const Feed = ({ category }) => {

    // const [data, setData] = useState([])

    // const fetchData = async () => {
    //     const videoList_url = `GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
    //     await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items))
    // }
    // useEffect(() => {
    //     fetchData();
    // }, [category])

    return (
        <div className='feed'>  
            <Link to={`video/20/4521`} className='card'>
                <img src={thumbnail1} alt="fukra" />
                <h2>BOYS VS GIRLS SPEED DATING challenge</h2>
                <h3>Fukra  Insaan</h3>
                <p>15k views &bull; 2 days ago</p>
            </Link>
            <div className='card'>
                <img src={thumbnail2} alt="fukra" />
                <h2>I Wanna Be Yours - Arctic Monkeys ( Lyrics )</h2>
                <h3>bluebell</h3>
                <p>2.8M views &bull; 7 months ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail3} alt="fukra" />
                <h2>7 Years - Lukas Graham  [Lyrics/Vietsub]</h2>
                <h3>CHILL WITH ME</h3>
                <p>50M views &bull; 1 year ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail4} alt="fukra" />
                <h2>I Cheated in a ELEMENTAL MOB BATTLE In Minecraft 🤯</h2>
                <h3>DevXD</h3>
                <p>415k views &bull; 7 months ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail5} alt="fukra" />
                <h2>MOST INTENSE LUCKY BLOCK TOWER RACE</h2>
                <h3>YesSmartyPie</h3>
                <p>316k views &bull; 8 hours ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail6} alt="fukra" />
                <h2>BOYS VS GIRLS SPEED DATING challenge</h2>
                <h3>Fukra  Insaan</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail7} alt="fukra" />
                <h2>BOYS VS GIRLS SPEED DATING challenge</h2>
                <h3>Fukra  Insaan</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail8} alt="fukra" />
                <h2>BOYS VS GIRLS SPEED DATING challenge</h2>
                <h3>Fukra  Insaan</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail1} alt="fukra" />
                <h2>BOYS VS GIRLS SPEED DATING challenge</h2>
                <h3>Fukra  Insaan</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail2} alt="fukra" />
                <h2>I Wanna Be Yours - Arctic Monkeys ( Lyrics )</h2>
                <h3>bluebell</h3>
                <p>2.8M views &bull; 7 months ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail3} alt="fukra" />
                <h2>7 Years - Lukas Graham  [Lyrics/Vietsub]</h2>
                <h3>CHILL WITH ME</h3>
                <p>50M views &bull; 1 year ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail4} alt="fukra" />
                <h2>I Cheated in a ELEMENTAL MOB BATTLE In Minecraft 🤯</h2>
                <h3>DevXD</h3>
                <p>415k views &bull; 7 months ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail5} alt="fukra" />
                <h2>MOST INTENSE LUCKY BLOCK TOWER RACE</h2>
                <h3>YesSmartyPie</h3>
                <p>316k views &bull; 8 hours ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail6} alt="fukra" />
                <h2>BOYS VS GIRLS SPEED DATING challenge</h2>
                <h3>Fukra  Insaan</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail7} alt="fukra" />
                <h2>BOYS VS GIRLS SPEED DATING challenge</h2>
                <h3>Fukra  Insaan</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail8} alt="fukra" />
                <h2>BOYS VS GIRLS SPEED DATING challenge</h2>
                <h3>Fukra  Insaan</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
        </div>

    )
}

export default Feed