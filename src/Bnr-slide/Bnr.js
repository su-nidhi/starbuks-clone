import React from 'react'
import Daataa from './Bnr-data'
import './Bnr.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1, //3
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1, //2
    slidesToSlide: 1, 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1, 
    slidesToSlide: 1, 
  },
};
const Bnr = () => {
  return (
    <>
      <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
      {
        Daataa.map((b, index) => (

          <div className='bnr-contain'>
            <div className='bnr' key="index">
              <div className='bnr-tx'>
                <div className=' img2'>
                  <img className='img2' src={b.img2}></img>
                </div>
                <div className='texxt'>
                  <p >{b.p}</p>
                  <h2>{b.h2}</h2>
                  <p className='p2'>{b.p2}</p></div>
              </div>
              <img className='bgg' src={b.img}></img>

            </div>
          </div>
        ))
      }
      </Carousel>
    </>
  )
}

export default Bnr