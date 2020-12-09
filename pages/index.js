import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";

const HomePage = () => {
  const [windowSize, setWindowSize] = useState();

  let height = "320px";
  let width = "500x";

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);

      return () => {
        window.removeEventListener("resize", () => {
          setWindowSize(window.innerWidth);
        });
      };
    });
  });

  useEffect(() => {
    // console.log(windowSize);
    const images = Array.from(
      document.getElementsByClassName("image-carousel")
    );

    if (windowSize < 550) {
      images.map((image) => (image.style.height = "200px"));
    } else if (windowSize < 700) {
      images.map((image) => (image.style.height = "250px"));
    } else if (windowSize > 700) {
      images.map((image) => (image.style.height = "320px"));
    }
  }, [windowSize]);

  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    568: { items: 1 },
    1024: { items: 2 },
  };

  const items = [
    <img
      src="/Big%20Daddy.jpg"
      alt="Big Daddy"
      onDragStart={handleDragStart}
      className="image-carousel"
      style={{ height: height, width: width, objectFit: "cover" }}
    />,
    <img
      src="/Big%20Sister.jpg"
      alt="Big Sister"
      onDragStart={handleDragStart}
      className="image-carousel"
      style={{ height: height, width: width, objectFit: "cover" }}
    />,
    <img
      src="/Columbia.jpg"
      alt="Columbia"
      onDragStart={handleDragStart}
      className="image-carousel"
      style={{ height: height, width: width, objectFit: "cover" }}
    />,
  ];

  return (
    <React.Fragment>
      <div>
        <AliceCarousel
          mouseTracking
          autoWidth
          autoHeight
          autoPlay
          autoPlayDirection={"ltr"}
          autoPlayInterval={3000}
          infinite
          items={items}
          responsive={responsive}
        />
      </div>

      <style jsx>{`
        div {
          width: 85%;
          height: 400px;
          margin: 200px auto 0;
        }
      `}</style>
    </React.Fragment>
  );
};

export default HomePage;
