import React from 'react';
import Dataa from './Barishta-data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Brishta/Barishta.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3, // Number of items to display on desktop
    slidesToSlide: 1, // Slide 1 item at a time
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2, // Number of items to display on tablet
    slidesToSlide: 1, // Slide 1 item at a time
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1, // Number of items to display on mobile
    slidesToSlide: 1, // Slide 1 item at a time
  },
};

const Barishta = () => {
  return (
    <div className='brish-c'>
      <div className='txt'>
        <h1 className='brishta-tx'>Barista Recommends</h1>
        <span className='view'>view more</span>
      </div>
      <div className='leaf'>
        <img src="../images/greyf.svg" alt="leaf" />
      </div>
      <div className='slide-container'>
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
          {Dataa.map((a, index) => (
            <div key={index} className='slider'>
              <div className='img-rate'>
                <img className='img-s' src={a.image} alt={a.title} />
                <p className='para'>{a.rate}</p>
              </div>
              <div className='side'>
                <img src={a.veg} alt="veg icon" />
                <p>{a.title}</p>
                <p>{a.p}</p>
                <a className='add-item' href='/'>{a.btn}</a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Barishta;





