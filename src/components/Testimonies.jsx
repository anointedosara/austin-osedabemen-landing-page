import React from 'react'

function Testimonies() {
  return (
    <div className='testimonies'>
        <h2>SEE SOME TESTIMONIALS FROM PEOPLE LIKE YOU</h2>
        <div className='testimony-images'>
            <img src="./images/testimony1.jpg" alt="" />
            <img src="./images/testimony2.jpg" alt="" />
            <img src="./images/testimony3.jpg" alt="" />
        </div>
        <div className='testimony-videoes'>
            <iframe src="./images/testimony1.mp4" title='testimony1' alt="" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
            web-share" allowFullScreen></iframe>
            <iframe src="./images/testimony2.mp4" title='testimony2' alt="" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
            web-share" allowFullScreen></iframe>
            <iframe src="./images/testimony3.mp4" title='testimony3' alt="" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
            web-share" allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default Testimonies