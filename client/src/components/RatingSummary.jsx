import React from 'react';
import './starRating.scss';

class RatingSummary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // contains .characteristics .ratings .recommended
      apiMetaData: this.props.metaData,
      avgRating: null,
      perRec: null,
    };
  }

  componentDidMount() {
    // Get an Average Review Rating
    this.getAverageReviewRating();
    // Calculate the % recommended
    this.getPercentRecommend();
    // Calculate Progress Bar Stuff

    // Do the math stuff for Product Breakdown
  }

  componentDidUpdate() {
    // console.log('Rating Summary Updated');
  }

  getAverageReviewRating() {
    let count = 0;
    let total = 0;
    const ratingNumbers = this.state.apiMetaData.ratings;
    for (const key in ratingNumbers) {
      count += ratingNumbers[key];
      total += ratingNumbers[key] * Number(key);
    }
    const avg = (total / count).toFixed(1);
    this.setState({
      avgRating: avg,
    }, () => {
      // console.log('current avgRating state', this.state.avgRating);
    });
  }

  getPercentRecommend() {
    const { recommended } = this.state.apiMetaData;
    // 0 = No 1 = Yes
    const percent = (recommended[1] / (recommended[1] + recommended[0])) * 100;
    this.setState({
      perRec: percent.toFixed(0),
    }, () => {
      // console.log('current perRec state', this.state.perRec);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 h1 font-weight-bold">
            {this.state.avgRating}
          </div>
          <div>
            <div className="Stars" style={{ '--rating': `${this.state.avgRating}` }} />

          </div>
        </div>
        <div className="row">
          <div className="h6 font-weight-light">
            {this.state.perRec}
            % of reviews recommend this product
          </div>
        </div>
        <div className="row">
          Progress Bars
        </div>
        <div className="row">
          Product Breakdown
        </div>
      </div>
    );
  }
}

export default RatingSummary;
