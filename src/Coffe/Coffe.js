import React from 'react'
import './Coffe.css'

const Coffe = () => {
  return (
    <div className='heading'>
      <div className='head'>
        <span className='learn'>Learn more about the world of coffee!</span>
        <span className='discover'>Discover More</span>
      </div>

      <div className='contain'>
        <div className='img-container'>
          <div className='cofe-creature' >
            <span>coffe crature</span>
          </div>

          <div className='tx-contain'>
            <h2> Art and science of coffee brewing</h2>
            <p>master the perfec brew with starbuks  learn the art and science of coffe bowing</p>
            <button className='btn-learn'>Learn more</button>
          </div>

        </div>

      </div>
    </div>

  )
}

export default Coffe
