import React from 'react';
import SecondChild from './components/SecondChild';

export default function FirstChild(props) {
  return (
    <div className="wrapper">
      <h1>First Child</h1>
      <SecondChild />
    </div>
  )
} 