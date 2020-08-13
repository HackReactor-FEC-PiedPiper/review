import React from 'react';
import './starRating.scss';
import ProgressBars from './ProgressBars';
import ProductBreakdown from './ProductBreakdown';

class RatingSummary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // contains .characteristics .ratings .recommended
      apiMetaData: this.props.metaData,
      avgRating: null,
      percentRec: null,
    };
  }

  componentDidMount() {
    // Get an Average Review Rating
    this.getAverageReviewRating();
    // Calculate the % recommended
    this.getPercentRecommend();
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
      percentRec: percent.toFixed(0),
    }, () => {
      // console.log('current percentRec state', this.state.percentRec);
    });
  }

  render() {
    const { ratings, characteristics } = this.state.apiMetaData;
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
          <div className="col h6 font-weight-light">
            {this.state.percentRec}
            % of reviews recommend this product
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ProgressBars data={ratings} />
          </div>
        </div>
        <div className="row">
          <ProductBreakdown data={Object.entries(characteristics)} />
        </div>
      </div>
    );
  }
}

export default RatingSummary;
