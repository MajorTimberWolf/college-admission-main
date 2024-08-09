// src/pages/FormPage.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'tailwindcss/tailwind.css';

const FormPage = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    phone: '',
    email: '',
    state: '',
    city: '',
    percentage: '',
    stream: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_efjeq0m', 'template_grzp0dr', e.target, 'kS_94InM8xQ0rVMJx')
      .then((result) => {
          console.log('SUCCESS!', result.text);
          alert('Email sent successfully!');
      }, (error) => {
          console.log('FAILED...', error.text);
          alert('Email failed to send.');
      });
    
    e.target.reset();
  };

  return (
    <div id="formPage" className="min-h-screen flex">
      <div className="w-1/2 flex items-center justify-center bg-gray-100 p-8">
        <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-8 text-center">College Admission Form</h2>
          <div className="mb-4">
            <input 
              type="text" 
              name="from_name" 
              placeholder="Enter your name" 
              className="w-full p-2 border rounded" 
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-4">
            <input 
              type="tel" 
              name="phone" 
              placeholder="Enter your phone number" 
              className="w-full p-2 border rounded" 
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your Email ID" 
              className="w-full p-2 border rounded" 
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-4 flex">
            <select 
              name="state" 
              className="w-1/2 p-2 border rounded mr-2" 
              onChange={handleChange}
              required 
            >
              <option value="">Select State</option>
              <option value="State1">State 1</option>
              <option value="State2">State 2</option>
              {/* Add more options as needed */}
            </select>
            <select 
              name="city" 
              className="w-1/2 p-2 border rounded" 
              onChange={handleChange}
              required 
            >
              <option value="">Select City</option>
              <option value="City1">City 1</option>
              <option value="City2">City 2</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <input 
              type="text" 
              name="percentage" 
              placeholder="Enter 12th Percentage" 
              className="w-full p-2 border rounded" 
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-4">
            <input 
              type="text" 
              name="stream" 
              placeholder="Enter Stream" 
              className="w-full p-2 border rounded" 
              onChange={handleChange}
              required 
            />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">SUBMIT</button>
          </div>
        </form>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-gray-200">
        <img src="path/to/your/image.png" alt="College Admission" className="max-w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default FormPage;
