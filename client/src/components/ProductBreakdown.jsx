import React from 'react';

const ProductBreakdown = (props) => (
  <div className="col no-gutters">
    {props.data
      ? props.data.map((type) => {
        const category = type[0];
        const oldNumber = type[1].value;
        // const oldRange = (5 - 1);
        // const newRange = (100 - 0);
        // const number = (((oldNumber - 1) * newRange) / oldRange) + 0;
        const number = (oldNumber / 5) * 100;
        console.log('Old number: ', oldNumber);
        console.log('New number: ', number);
        return (
          <div className="row no-gutters">
            <div className="col h6 font-weight-light">
              {category}
            </div>
            <div className="progress col-12" style={{ height: 8 }}>
              <div className="progress-bar bg-light" role="progressbar" style={{ width: `${(number - 2.5)}%` }} aria-valuenow={`${(number - 2.5)}`} aria-valuemin="0" aria-valuemax="100" />
              <div className="progress-bar bg-dark" role="progressbar" style={{ width: '5%' }} aria-valuenow={5} aria-valuemin="0" aria-valuemax="100">{oldNumber}</div>
              <div className="progress-bar bg-light" role="progressbar" style={{ width: `${100 - (number - 2.5)}%` }} aria-valuenow={`${100 - (number - 2.5)}`} aria-valuemin="0" aria-valuemax="100" />
            </div>
          </div>
        );
      })
      : null}
  </div>
);

export default ProductBreakdown;
