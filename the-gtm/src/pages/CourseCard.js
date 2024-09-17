import React from 'react';
import './CourseCard.css';  

const CourseCard = ({ title, image, description, rating, reviews, price, instructor, enrolled }) => {
  return (
    <div className="course-card">
       
      <img src={image} alt='' className="course-image" />
    
      
      <div className="course-content">
        <h3 className="course-title">{title}</h3>
        
        <p className="course-description" >{description}</p>
        <div className="course-rating">
          <span className="rating">{rating}</span>
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="reviews">({reviews})</span>
        </div>
        <div className="course-footer">
          <div className="instructor">
            <img src={instructor.image} alt='' className="instructor-image" />
            <span className="instructor-name">{instructor.name}</span>
          </div>
          <div className="course-price">{price}</div>
        </div>
        <div className='enrolled'>
            <span >{enrolled}  enrolled</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
