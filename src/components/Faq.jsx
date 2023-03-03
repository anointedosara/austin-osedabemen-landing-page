import React from 'react'
import faqData from '../data'
import { useState } from 'react'

function Faq() {
    const [location, setLocation] = useState(0)

console.log(location);
  return (
    <div className='faq'>
        <h3>SOME FREQUENTLY ASKED QUESTIONS</h3>
        <div className='faq-question'>
            {
                faqData?.map((item, i) => 
                <div key={i} className='each-question'>
                    <div onClick={() => location !== item?.id ? setLocation(item?.id) : setLocation(0)} className='question'>
                        <h4>{item?.question}</h4>
                        <div className={location === item?.id ? 'rotate' : ''}><i className={item?.arrow}></i></div>
                    </div>
                    <div className={location === item?.id ? 'answer show' : 'answer hide'}>{item?.answer?.map((ite, i) => 
                    <p key={i}>{ite}</p>)}</div>
                </div>)
            }
        </div>
        <h5>READY TO GET STARTED? HAVE ANY QUESTIONS? JOIN OUR NEXT TRAINING RIGHT AWAY, SIMPLY CLICK THE LINK BELOW TO GET STARTED.</h5>
        <div className='btn'>
            <a href='https://wa.link/bejytq'><button>Join the Next Training <i className="fa-brands fa-whatsapp"></i></button></a>
        </div>
        
    </div>
  )
}

export default Faq