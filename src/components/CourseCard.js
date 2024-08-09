// src/components/CourseCard.js
import React from 'react';
import { Link } from 'react-scroll';

const CourseCard = ({ title, duration, fee, buttonText }) => {
  return (
    <div className="bg-[#FAF3E0] text-[#3E3E3E] rounded-lg shadow-md p-4 m-2 transform transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-2 flex items-center">
        <i className="fas fa-clock mr-2"></i>
        <span>{duration}</span>
      </div>
      <div className="mt-2">
        <span>{fee}</span>
      </div>
      <Link
        to="formPage"
        smooth={true}
        duration={500}
        className="mt-4 inline-block bg-[#8B4513] hover:bg-[#5D4037] text-[#F5F5F5] py-2 px-4 rounded cursor-pointer"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default CourseCard;
