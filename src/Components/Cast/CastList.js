import React from 'react';
import PropTypes from 'prop-types';
import CastItem from './CastItem/CastItem';
import './CastList.scss';
const CastList = ({ casts }) => {
  return (
    <ul className="Cast__list">
      {casts.map(cast => (
        <CastItem {...cast} key={cast.id} />
      ))}
    </ul>
  );
};
CastList.protoTypes = {
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default CastList;
