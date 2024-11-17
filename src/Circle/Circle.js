import React from 'react'
import Data from './Circle-data'
import'./Circle.css'
const Circle = () => {
  return (
    <div>
      <h1 className='HandcraftedCurations'>Handcrafted Curations</h1>
      <div className="bg">
      <div className="circle-container">
        {
          Data.map((item, index) => (
            <div key={index} className="circle">
              <img src={item.img} alt="" />
              <p className='c-p'>{item.text}</p>
            </div>
           
          ))
        }
         </div>
      </div>
    </div>
  )
}

export default Circle 
