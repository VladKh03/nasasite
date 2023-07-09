import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);

  const settings = {
    dots: true,
    swipe:false,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setSelectedIndex(index),
    beforeChange: (current, next) => setSelectedImage(props.images[next])
  };
  
  const { images } = props;
  
  return (
    <>
      <div className="info-panel">
        <h1>Image information</h1>
        <h2>
          <a
            href={selectedImage}
            target="_blank"
            rel="noopener noreferrer"
            className="image-link"
          >
            Open image
          </a>
        </h2>
        <hr />
        <h2>This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft</h2>
        <hr />
        <h3>Distance to Earth: ~1,481,000 km</h3>
        <h3>Distance to Sun: ~150,638,000 km</h3>
        
        <img src={require(`../../resources/img/${selectedIndex + 1}.png`)} alt={`Slide ${selectedIndex + 1}`} />     
      </div>
      <div className="carousel">
        <Slider {...settings}>
          {images && images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className={index === selectedIndex ? "active" : ""}
              />
          </div>
          ))}
        </Slider>
      </div>
      
    </>
  );
}

export default Carousel;
