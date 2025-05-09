import "./Gallery.css";
import React, { useState } from "react";

const images = [
  "/gallery/IMG_0079.JPEG",
  "/gallery/IMG_4392.jpg",
  "/gallery/IMG_4393.JPEG",
  "/gallery/IMG_6639.JPEG",
  "/gallery/IMG_6665.JPEG",
  "/gallery/IMG_6667.JPEG",
  "/gallery/IMG_6731.JPEG",
  "/gallery/IMG_6749.JPEG",
  "/gallery/IMG_6759.JPEG",
  "/gallery/IMG_6796.JPEG",
  "/gallery/IMG_6802.JPEG",
  "/gallery/IMG_6806.JPEG",
  "/gallery/IMG_6807.JPEG",
  "/gallery/IMG_6821.JPEG",
  "/gallery/IMG_6823.JPEG",
  "/gallery/IMG_6828.JPEG",
  "/gallery/IMG_6837.JPEG",
  "/gallery/IMG_6845.JPEG",
  "/gallery/IMG_5266.JPEG",
  "/gallery/IMG_5277.JPEG",
  "/gallery/IMG_5288.JPEG",
  "/gallery/IMG_6198.JPEG",
  "/gallery/IMG_6750.JPEG",
  "/gallery/IMG_6768.JPEG",
  "/gallery/IMG_6775.JPEG",
  "/gallery/IMG_8926.JPEG",
  "/gallery/IMG_8927.JPEG",
  "/gallery/IMG_9286.JPEG",
  "/gallery/IMG_9313.JPEG",
  "/gallery/IMG_9393.JPEG",
  "/gallery/IMG_9449.JPEG",
  "/gallery/IMG_9634.JPEG",
  "/gallery/IMG_9635.jpg",
];
function Gallery() {
   const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (img) => {
    setSelectedImage(img);
  };

   const closeModal = () => {
    setSelectedImage(null);
  };

  return (
     <div className="gallery-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Gallery ${index}`}
          className="gallery-image"
          onClick={() => openModal(img)}
        />
      ))}

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <img src={selectedImage} alt="Enlarged view" className="modal-image"/>
        </div>
      )}
    </div>
  );
}


export default Gallery;

