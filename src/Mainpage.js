import React, { useRef, useEffect } from 'react';
import './index.css'; // Ensure Tailwind CSS is imported
import CarouselPage from './pages/CarouselPage'; // Import the CarouselPage component
import FormPage from './pages/FormPage';
import CoursesPage from './components/CoursePage'; // Import the CoursesPage component
import Navbar from './components/Navbar'; // Import Navbar component

const MainPage = () => {
  const backgroundRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const zoomLevel = 1 + scrollTop / 1000; // Adjust this value to change zoom speed

    if (backgroundRef.current) {
      backgroundRef.current.style.transform = `scale(${zoomLevel})`;
      backgroundRef.current.style.transformOrigin = 'center center'; // Center the zoom on the image
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar /> {/* Add Navbar at the top */}
      <div
        ref={backgroundRef}
        className="min-h-screen bg-college-bg bg-cover bg-center flex flex-col items-center justify-center text-center mt-16 transition-transform duration-100 ease-out"
      >
        {/* Your content here */}
      </div>
      <CarouselPage /> {/* Include the CarouselPage component */}
      <CoursesPage /> {/* Include the CoursesPage component */}
      <div id="formPage">
        <FormPage />
      </div>
    </div>
  );
};

export default MainPage;
