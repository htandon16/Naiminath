const ImageGallery = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

           const images = [
    '/images/opd/panchkarma-patients1.jpeg',
    '/images/opd/panchkarma-patients2.jpeg',
    '/images/opd/panchkarma-patients3.jpeg',
    '/images/opd/panchkarma-patients4.jpeg',
    '/images/opd/panchkarma-patients5.jpeg',
  ];

            const enlargeImage = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };
           return (
    <div>
      <div className="flex flex-wrap flex-row flex-4 gap-2 justify-center mx-2 md:mx-10 my-10">
        {images.map((imageSrc, index) => (
          <img
            key={index}
            className="rounded-md w-auto aspect-auto max-h-60 cursor-pointer"
            src={imageSrc}
            alt="Panchkarma Patients"
            onClick={() => enlargeImage(imageSrc)}
          />
        ))}
      </div>
      {enlargedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeEnlargedImage}
        >
          <img
            className="max-h-full max-w-full"
            src={enlargedImage}
            alt="Enlarged Image"
          />
        </div>
      )}
    </div>
 
