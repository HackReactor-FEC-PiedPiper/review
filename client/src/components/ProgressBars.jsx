import React from 'react';

const ProgressBars = (props) => {
  let totalRatings = 0;
  const ratings = props.data;
  for (const number in ratings) {
    totalRatings += ratings[number];
  }
  if (ratings['1'] === undefined) {
    ratings['1'] = 0;
  }
  if (ratings['2'] === undefined) {
    ratings['2'] = 0;
  }
  if (ratings['3'] === undefined) {
    ratings['3'] = 0;
  }
  if (ratings['4'] === undefined) {
    ratings['4'] = 0;
  }
  if (ratings['5'] === undefined) {
    ratings['5'] = 0;
  }

  const value1 = (ratings[1] / totalRatings) * 100;
  const value2 = (ratings[2] / totalRatings) * 100;
  const value3 = (ratings[3] / totalRatings) * 100;
  const value4 = (ratings[4] / totalRatings) * 100;
  const value5 = (ratings[5] / totalRatings) * 100;

  return (
    <div className="container">
      <div className="row my-3">
        <div className="h6 my-auto font-weight-light">
          <u>
            5 stars
          </u>
        </div>
        <div className="col my-auto">
          <div className="progress" style={{ height: '5px' }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: `${value5}%` }} aria-valuenow={value5} aria-valuemin="0" aria-valuemax={totalRatings} />
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="h6 my-auto font-weight-light">
          <u>
            4 stars
          </u>
        </div>
        <div className="col my-auto">
          <div className="progress" style={{ height: '5px' }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: `${value4}%` }} aria-valuenow={value4} aria-valuemin="0" aria-valuemax={totalRatings} />
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="h6 my-auto font-weight-light">
          <u>
            3 stars
          </u>
        </div>
        <div className="col my-auto">
          <div className="progress" style={{ height: '5px' }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: `${value3}%` }} aria-valuenow={value3} aria-valuemin="0" aria-valuemax={totalRatings} />
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="h6 my-auto font-weight-light">
          <u>
            2 stars
          </u>
        </div>
        <div className="col my-auto">
          <div className="progress" style={{ height: '5px' }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: `${value2}%` }} aria-valuenow={value2} aria-valuemin="0" aria-valuemax={totalRatings} />
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="h6 my-auto font-weight-light">
          <u>
            1 stars
          </u>
        </div>
        <div className="col my-auto">
          <div className="progress" style={{ height: '5px' }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: `${value1}%` }} aria-valuenow={value1} aria-valuemin="0" aria-valuemax={totalRatings} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
