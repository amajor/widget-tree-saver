import React from 'react';
import PropTypes from 'prop-types';

const BigNumber = props => (
  <div className="BigNumber">
    <span className="big-number">
      {props.bigNumber.toFixed(props.numDecimalPlaces)}{props.isPercent ? "%" : ""}
    </span>
    <span className="small-text">
      {props.smallPrint}
    </span>
  </div>
);

BigNumber.propTypes = {
  /** The big number */
  bigNumber: PropTypes.number,
  /** The number of decimal places to show */
  numDecimalPlaces: PropTypes.number,
  /** The small print */
  smallPrint: PropTypes.string,
};

BigNumber.defaultProps = {
  bigNumber: 2300,
  numDecimalPlaces: 0,
  smallPrint: "Here's some small print!"
}

export default BigNumber;
