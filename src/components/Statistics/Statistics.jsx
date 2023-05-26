import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}><strong>Good:</strong> {good}</li>
      <li className={css.item}><strong>Neutral: </strong>   {neutral}</li>
      <li className={css.item}><strong>Bad: </strong>{bad}</li>
      <li className={css.item}><strong>Totall: </strong>{total}</li>
      <li className={css.item}><strong>Positive Feedback: </strong> {positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics
