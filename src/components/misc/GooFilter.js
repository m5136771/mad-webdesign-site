import React from 'react';

const GooFilter = () => (
  <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
    <defs>
      <filter id='goo'>
        <feGaussianBlur in='SourceGraphic' stdDeviation='6.8' result='blur' />
        <feColorMatrix
          in='blur'
          mode='matrix'
          values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
          result='goo'
        />
        <feBlend in='SourceGraphic' in2='goo' />
      </filter>
    </defs>
  </svg>
);

export default GooFilter;