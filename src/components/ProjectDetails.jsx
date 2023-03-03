import React from 'react'
import Faq from './Faq'

function ProjectDetails() {
  return (
    <div className='wrap'>
      <div className='projectdetails'>
        <div className='projectdetails-heading'>
            <h2>TRANSFORM YOUR LIFE: LEARN TO BUILD A PROFITABLE ONLINE BUSINESS CALLED AFFILIATE
            MARKETING FROM SCRATCH, GENERATING $100+ WEEKLY INCOME AS A COMPLETE NEWBIE!</h2>
            <p>Watch video below to get a clearer understanding <i className="fa-brands fa-youtube"></i></p>
            <iframe src="https://www.youtube.com/embed/Dl7Yig2U3hA" title="How 
            To Start Affiliate Marketing With Digitstem | Ultimate Money Machine Updated" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
            web-share" allowFullScreen></iframe>
        </div>

        <div className='projectdetails-list'>
          <h3>What's in it for You?</h3>
          <ul>
            <li><i className="fa-sharp fa-solid fa-circle-check"></i> A Clear Roadmap To Success</li>
            <li><i className="fa-sharp fa-solid fa-circle-check"></i> Ongoing Support And Accountability</li>
            <li><i className="fa-sharp fa-solid fa-circle-check"></i> Unlimited Earning Potential</li>
          </ul>
        </div>
        <Faq />
      </div>
    </div>
  )
}

export default ProjectDetails