import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { scroller } from 'react-scroll'; // Import the scroller from react-scroll
import image1 from '../assets/1.png'; // Example image

const CarouselPage = () => {
  const cardsData = [
    {
      collegeImage: image1,
      collegeName: "College One",
      frontContent: "About College One",
      backContent: "Back of Card 1",
    },
    {
      collegeImage: image1,
      collegeName: "College Two",
      frontContent: "About College Two",
      backContent: "Back of Card 2",
    },
    {
      collegeImage: image1,
      collegeName: "College Three",
      frontContent: "About College Three",
      backContent: "Back of Card 3",
    },
    {
      collegeImage: image1,
      collegeName: "College Four",
      frontContent: "About College Four",
      backContent: "Back of Card 4",
    },
    {
      collegeImage: image1,
      collegeName: "College Five",
      frontContent: "About College Five",
      backContent: "Back of Card 5",
    },
    {
      collegeImage: image1,
      collegeName: "College Six",
      frontContent: "About College Six",
      backContent: "Back of Card 6",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4 
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [flippedIndexes, setFlippedIndexes] = useState([]);

  const handleFlip = (index, event) => {
    event.stopPropagation(); // Prevent the event from bubbling up to other elements
    setFlippedIndexes(prevIndexes =>
      prevIndexes.includes(index)
        ? prevIndexes.filter(i => i !== index)
        : [...prevIndexes, index]
    );
  };

  const handleRegisterClick = () => {
    // Use scroller to scroll to the formPage element
    scroller.scrollTo('formPage', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <Carousel responsive={responsive} infinite={true} autoPlay={false}>
      {cardsData.map((card, index) => (
        <div key={index} className="card-container p-4 flex justify-center">
          <div className={`card ${flippedIndexes.includes(index) ? 'flipped' : ''}`} 
               style={{ width: '400px', height: '600px', transformStyle: 'preserve-3d', backgroundColor: '#f5f5dc' }}>
            <div className="front p-4 flex flex-col items-center justify-start" style={{ backfaceVisibility: 'hidden', position: 'absolute', width: '100%', height: '100%' }}>
              <img src={card.collegeImage} alt={card.collegeName} className="w-full h-2/3 object-cover rounded-t-lg"/>
              <h3 className="text-lg font-bold mt-2">{card.collegeName}</h3>
              <div className="mt-auto flex w-full justify-around p-4">
                <button className="bg-green-300 p-2 flex-1 mr-2" onClick={(e) => handleFlip(index, e)}>About</button>
                <button className="bg-yellow-300 p-2 flex-1" onClick={handleRegisterClick}>Register</button>
              </div>
            </div>
            <div className="back p-4 flex flex-col items-center justify-center text-white" 
                 style={{ 
                   backfaceVisibility: 'hidden', 
                   transform: 'rotateY(180deg)', 
                   position: 'absolute', 
                   width: '100%', 
                   height: '100%', 
                   backgroundColor: '#D3D3D3' // Change this to cream gray
                 }}
                 onClick={(e) => handleFlip(index, e)}>
              <p>{card.backContent}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselPage;
