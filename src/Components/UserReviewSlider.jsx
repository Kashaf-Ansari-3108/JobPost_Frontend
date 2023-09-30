import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Components/module.css'; // Create this CSS file for styling

const UserReviewSlider = ({ reviews }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="user-reviews-slider">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-slide">
            <div className="user-info">
              <img src={review.userAvatar} alt={review.userName} />
              <h4>{review.userName}</h4>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UserReviewSlider;
