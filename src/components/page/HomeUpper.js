import React, { useEffect, useState } from "react";
import Carousel from "../carousel/Carousel";

import "../styles/HomeUpper.css";

const Upper = () => {
  const [photosData, setPhotosData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchPhotos();
    async function fetchPhotos() {
      const res = await fetch(
        "https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=s49XB3dFWs287FSDEdZsFDkdaTYj7am6POMFNvh4"
      );
      const data = await res.json();
      const imagesArray = data.map((item) => {
        return (
          "https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/" +
          item.image +
          ".png?api_key=s49XB3dFWs287FSDEdZsFDkdaTYj7am6POMFNvh4"
        );
      });
      setPhotosData(imagesArray);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (photosData.length > 0) {
      const loadImage = new Image();
      loadImage.src = photosData[photosData.length - 1];
      loadImage.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [photosData]);

  return (
    <div className="carousel-section">
      <div className="carousel-container">
          {!isLoading && isLoaded && <Carousel images={photosData} />}
          {!isLoading && !isLoaded && <div>Loading...</div>}
      </div>
    </div>
  );
};

export default Upper;
