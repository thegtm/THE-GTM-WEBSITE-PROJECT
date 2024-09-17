
import React from 'react';
import './PopularCourses.css';
import CourseCard from './CourseCard';
import picture from '../images/program.jpg';
const PopularCourses= () => {
  const courses = [
    {
      id: 1,
      title: 'Crop Rotation Fundamentals',
      image: picture,  
      description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
      rating: 4.2,
      reviews: 188,
      price: '$5.00',
      instructor: {
        name: 'Lorem Ipsum',
        image:picture,  
      },
      enrolled: 1000,
    },
    {
      id: 1,
      title: 'Crop Rotation Fundamentals',
      image: picture,  
      description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
      rating: 4.2,
      reviews: 188,
      price: '$5.00',
      instructor: {
        name: 'Lorem Ipsum',
        image: picture,  
      },
      enrolled: 1000,
    },
    {
      id: 1,
      title: 'Crop Rotation Fundamentals',
      image: picture,  
      description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
      rating: 4.2,
      reviews: 188,
      price: '$5.00',
      instructor: {
        name: 'Lorem Ipsum',
        image: picture,  
      },
      enrolled: 1000,
    },
    
    {
      id: 1,
      title: 'Crop Rotation Fundamentals',
      image: picture,  
      description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
      rating: 4.2,
      reviews: 188,
      price: '$5.00',
      instructor: {
        name: 'Lorem Ipsum',
        image: picture,  
      },
      enrolled: 1000,
    },

    {
      id: 1,
      title: 'Crop Rotation Fundamentals',
      image: picture,  
      description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
      rating: 4.2,
      reviews: 188,
      price: '$5.00',
      instructor: {
        name: 'Lorem Ipsum',
        image: picture,  
      },
      enrolled: 1000,
    },

    {
      id: 1,
      title: 'Crop Rotation Fundamentals',
      image: picture,  
      description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
      rating: 4.2,
      reviews: 188,
      price: '$5.00',
      instructor: {
        name: 'Lorem Ipsum',
        image: picture,  
      },
      enrolled: 1000,
    },
    
  ];

  

  return (
    <section className="courses-section">
        <div>
            <div className="Courses-header">
                <h1 id = 'Courses'>Our Popular Courses</h1>
            </div>
        </div>
      <div className="course-grid">
        {courses.map((course, index) => (
          < CourseCard key={index} {...course} />
        ))}
      </div>
      <div className="pagination">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
    </section>
  );
};

export default PopularCourses;
