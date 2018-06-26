import React from 'react';
import PropTypes from 'prop-types';
import BigNumber from './components/BigNumber.js';
import Tree from './components/Tree.js';
import './bootstrap.min.css';
import './index.css';

// It would take a little more than half a tree to make a carton (10 reams)
// of 100 percent, non-recycled 20-lb. copier paper.
//
// One tree makes 16.67 reams of copy paper, or 8,333.3 sheets.
//
// One ream (500 sheets) uses 6 percent of a tree.

const pagesPerTree = 8333.3;

const TreeSaver = props => (
  <div className="TreeSaver container">
    <div className="row">
      <div className="col-sm">
        <BigNumber
          bigNumber={props.numberOfPages}
          smallPrint={"sheets not printed this " + props.interval}
        />
      </div>
      <div className="col-sm">
        <Tree />
      </div>
      <div className="col-sm">
        <BigNumber
          bigNumber={props.numberOfPages / pagesPerTree}
          numDecimalPlaces={2}
          smallPrint={"trees saved saved this " + props.interval}
        />
      </div>
    </div>
  </div>
);

TreeSaver.propTypes = {
  /** The number of pages saved this week */
  numberOfPages: PropTypes.number,
  /** Interval, like "week" or "year" or "month" */
  interval: PropTypes.string,
};

TreeSaver.defaultProps = {
  numberOfPages: 2300,
  interval: "week"
}

export default TreeSaver;
