import React from 'react'
import './Music.css'
const Music = () => {
  return (
    <>
    <div className="music-container">
        {/* <h3 className='text-music'> Search Songs || De Sons Voice</h3> */}
         <div className="image">
            <img src="../../../public/logo.jpeg" alt=""  className='img'/>

         </div>
         <div className="sermons">
          <div className="sermons-right">
      <h3>Sermons From De Sons Voice</h3>
      <i className='italic-text'>......Blessed Songs, Chants from your favourite artist</i>
         <div className="sermons-container">
          <h4>Search the scripture to balance your spirtual life</h4>
         </div>
          </div>
    </div>
    </div>
    {/* Text Container */}
    
    </>
  )
}

export default Music