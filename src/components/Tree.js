import React, { Component } from 'react';
import TreeImage from '../images/tree.svg';

class Tree extends Component {
  render() {
    return (
      <img src={TreeImage} className="tree" alt="Tree" />
    );
  }
}

export default Tree;
