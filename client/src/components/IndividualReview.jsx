import React from 'react';
import PropTypes from 'prop-types';

const IndividualReview = ({
  rating, name, date, title, body,
}) => (
  <div className="container individual-review">
    <div className="row">
      <div id="rating">
        Star Rating
        {' '}
        {rating}
      </div>
      <div id="name">{name}</div>
      <div id="date">{date}</div>
    </div>
    <h4 id="title" className="row">{title}</h4>
    <p id="body" className="row">{body}</p>
    <div>Placement for Helpful Component</div>
  </div>
);

IndividualReview.propTypes = {
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default IndividualReview;
