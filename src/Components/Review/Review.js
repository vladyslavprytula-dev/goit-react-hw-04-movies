import React from 'react';
import PropTypes from 'prop-types';
import './Review.scss';
const Review = ({ author, content }) => (
  <>
    <h3 className="Review__author">Author: {author}</h3>
    <p className="Review__content">{content}</p>
  </>
);

Review.protoTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Review;
