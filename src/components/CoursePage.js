// src/pages/CoursesPage.js
import React from 'react';
import CourseCard from '../components/CourseCard';

const CoursesPage = () => {
  const ugCourses = [
    { title: 'BA', duration: '3 Year', fee: '₹ 85000 Year', buttonText: 'Apply Now' },
    { title: 'B.Arch', duration: '5 Year', fee: '₹ 1375000 Total', buttonText: 'Apply Now' },
    { title: 'B.Com', duration: '3 Year', fee: '₹ 75000 Year', buttonText: 'Apply Now' },
    { title: 'B.Des', duration: '4 Year', fee: '₹ 600000 Total', buttonText: 'Apply Now' },
    { title: 'B.Sc', duration: '3 Year', fee: '₹ 55000 Year', buttonText: 'Apply Now' },
    { title: 'B.Tech', duration: '4 Year', fee: '₹ 260000 Year', buttonText: 'Apply Now' },
    { title: 'B.Tech IT', duration: '4 Year', fee: '₹ 350000 Year', buttonText: 'Apply Now' },
    { title: 'B.Tech Biotechnology', duration: '4 Year', fee: '₹ 100000 Total', buttonText: 'Apply Now' },
  ];

  const pgCourses = [
    { title: 'MBA', duration: '2 Year', fee: '₹ 360000 Year', buttonText: 'Apply Now' },
    { title: 'MPT', duration: '2 Year', fee: '₹ 135000 Year', buttonText: 'Apply Now' },
    { title: 'M.Pharm', duration: '2 Year', fee: '₹ 110000 Year', buttonText: 'Apply Now' },
    { title: 'M.Sc', duration: '2 Year', fee: '₹ 110000 Year', buttonText: 'Apply Now' },
    { title: 'Pharm D', duration: '5 Year', fee: '₹ 500000 Year', buttonText: 'Apply Now' },
  ];

  return (
    <div className="bg-[#F5F5DC] min-h-screen text-[#3E3E3E] p-8">
      <h2 className="text-3xl font-bold text-center mb-8">UG Courses & Specialization</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ugCourses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            duration={course.duration}
            fee={course.fee}
            buttonText={course.buttonText}
          />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mt-16 mb-8">PG Courses & Specialization</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pgCourses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            duration={course.duration}
            fee={course.fee}
            buttonText={course.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
