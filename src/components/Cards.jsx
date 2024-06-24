/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../styles/cards.css";

export default function Cards({ handleClick }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const storedImages = localStorage.getItem("images");
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    } else {
      getImages();
    }
  }, []);

  const getImages = async () => {
    const apiKey = "YOUR_API_KEY";
    const response = await fetch(
      "https://api.pexels.com/v1/search?query=dogs&orientation=landscape&per_page=10&size=small",
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    const data = await response.json();
    const imageObjects = data.photos.map((photo, index) => ({
      id: index,
      url: photo.src.original,
    }));
    setImages(imageObjects);
    localStorage.setItem("images", JSON.stringify(imageObjects));
  };

  const shuffleImages = () => {
    const shuffledImages = [...images];
    for (let i = shuffledImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledImages[i], shuffledImages[j]] = [
        shuffledImages[j],
        shuffledImages[i],
      ];
    }
    setImages(shuffledImages);
  };

  return (
    <>
      {images.map((image) => (
        <img
          className="card"
          key={image.id}
          src={image.url}
          alt={`Dog ${image.id}`}
          onClick={() => {
            handleClick(image.id);
            shuffleImages();
          }}
        />
      ))}
    </>
  );
}
