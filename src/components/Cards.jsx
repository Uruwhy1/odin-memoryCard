import { useState, useEffect } from "react";
import '../styles/cards.css'

export default function Cards() {
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
    const apiKey = "7qxQsXiGK455T4GGkq0fVZtnkwoGacVLg1pqkNwpENO5asYMEwfDA83N";
    const response = await fetch(
      "https://api.pexels.com/v1/search?query=dogs&orientation=landscape&per_page=10&size=small",
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    const data = await response.json();
    const imageUrls = data.photos.map((photo) => photo.src.original);
    setImages(imageUrls);
    console.log(data);
    localStorage.setItem("images", JSON.stringify(imageUrls));
  };
  return (
    <>
      {images.map((image, index) => (
        <img className="card" key={index} src={image} alt={`Dog ${index}`} />
      ))}
    </>
  );
}
