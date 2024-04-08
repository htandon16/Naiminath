import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/images/opd/panchkarma-patients1.jpeg',
    '/images/opd/panchkarma-patients2.jpeg',
    '/images/opd/panchkarma-patients3.jpeg',
    '/images/opd/panchkarma-patients4.jpeg',
    '/images/opd/panchkarma-patients5.jpeg',
  ];

  const enlargeImage = (imageSrc, index) => {
    setEnlargedImage(imageSrc);
    setCurrentImageIndex(index);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  const handleKeyDown = (e) => {
    if (enlargedImage) {
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentImageIndex + 1) % images.length;
        enlargeImage(images[nextIndex], nextIndex);
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
        enlargeImage(images[prevIndex], prevIndex);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [enlargedImage, currentImageIndex]);

  return (
    <div>
      <div className="flex flex-wrap flex-row flex-4 gap-2 justify-center mx-2 md:mx-10 my-10">
        {images.map((imageSrc, index) => (
          <img
            key={index}
            className="rounded-md w-auto aspect-auto max-h-60 cursor-pointer"
            src={imageSrc}
            alt="Panchkarma Patients"
            onClick={() => enlargeImage(imageSrc, index)}
          />
        ))}
      </div>
      {enlargedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <img
              className="max-h-full max-w-full"
              src={enlargedImage}
              alt="Enlarged Image"
            />
            <div className="absolute top-1/2 -left-8 cursor-pointer" onClick={() => handleNavigation('left')}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white hover:text-gray-300 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </div>
            <div className="absolute top-1/2 -right-8 cursor-pointer" onClick={() => handleNavigation('right')}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white hover:text-gray-300 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0" onClick={closeEnlargedImage}></div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
