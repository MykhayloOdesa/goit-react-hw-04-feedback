import React from 'react';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className="statList">
      <li className="statItem">Good: {good}</li>
      <li className="statItem">Neutral: {neutral}</li>
      <li className="statItem">Bad: {bad}</li>
      <li className="statItem">Total: {total}</li>
      <li className="statItem">Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
