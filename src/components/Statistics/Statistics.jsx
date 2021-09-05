import { Fragment } from "react";
import PropTypes from "prop-types";

export const Statistics = (props) => {
  const { good, neutral, bad, total, positiveFeedbacks } = props;

  return (
    <Fragment>
      <p> good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positiveFeedbacks}%</p>
    </Fragment>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbacks: PropTypes.number.isRequired,
};
