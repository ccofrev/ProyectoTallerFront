import React from 'react';

const TrendingApiComp = ({ data }) => {
 
  return (
    <div>
      <h2>TT Chile Ahora</h2>
      <ul>
        {data.map((tt,index) => (
          <li key={'now'+index}>
              <strong>{tt['name']}</strong> &nbsp; <strong>{tt['Tweet Count']}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingApiComp;
