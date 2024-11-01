import React from 'react'
import './PlayVideo.css'
import nature from '../../Image/Nature.mp4'
import like from '../../Image/like.png'
import dislike from '../../Image/dislike.png'
import share from '../../Image/share.png'
import save from '../../Image/save.png'
import jack from '../../Image/jack.png'
import user_profile from '../../Image/user_profile.jpg'
const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={nature} controls autoPlay muted></video>
      <h3>Life is like a Girl Ingore It And Go On.</h3>
      <div className="play-video-info">
        <p>1234 Veiw &bull; 2 Days ago</p>
        <div>
          <span><img src={like} alt="" />125</span>
          <span><img src={dislike} alt="" />25</span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>
        </div>{/* End */}
      </div>{/*Play-Video-info End */}
      <hr />
      <div className='publisher'>
        <img src={jack} alt="" />
        <div>
          <p>SamWithCode</p>
          <span>2M Subscibers</span>
        </div>{/* end */}
        <button>Subscribe</button>
      </div>{/*Publisher End */}
      <div className="vid-description">
        <p>Channel that make u tharki</p>
        <p>Subscribe SamWithCode to Watch More Tutorials on Tharki Pana </p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Saif Ali Khan <span>1yr ago</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quasi, similique iusto iste in consequuntur numquam soluta incidunt nihil deserunt!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>233</span>
              <img src={dislike} alt="" />
            </div>{/*Comment-Action End */}
          </div>
        </div>    {/*Comment End */}
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Saif Ali Khan <span>1yr ago</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quasi, similique iusto iste in consequuntur numquam soluta incidunt nihil deserunt!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>233</span>
              <img src={dislike} alt="" />
            </div>{/*Comment-Action End */}
          </div>
        </div>    {/*Comment End */}
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Saif Ali Khan <span>1yr ago</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quasi, similique iusto iste in consequuntur numquam soluta incidunt nihil deserunt!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>233</span>
              <img src={dislike} alt="" />
            </div>{/*Comment-Action End */}
          </div>
        </div>    {/*Comment End */}
      </div>{/*Vid Des End */}
    </div>//play-video End
  )
}

export default PlayVideo