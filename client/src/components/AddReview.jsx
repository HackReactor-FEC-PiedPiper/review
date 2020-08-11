import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formStarRating: null,
      formRecommended: null,
      formSizeRating: null,
      formWidthRating: null,
      formComfortRating: null,
      formQualityRating: null,
      formLengthRating: null,
      formFitRating: null,
      formNameInput: '',
      formEmailInput: '',
      formSummaryInput: '',
      formBodyInput: '',
    };
  }

  // rating	          int	    Integer (1-5) indicating the review rating
  // recommend	      bool	  Value indicating if the reviewer recommends the product
  // name	            text	  Username for question asker
  // email	          text	  Email address for question asker
  // summary	        text	  Summary text of the review
  // body	            text	  Continued or full text of the review
  // photos	          [text]	Array of text urls that link to images to be shown
  // characteristics	object	Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...} (must send at least an empty object)

  onStarRatingChange(event) {
    this.setState({
      formStarRating: event.target.value,
    }, () => {
      console.log('Current Selection from Star Rating: ', this.state.formStarRating);
    });
  }

  onRecommendedChange(event) {
    this.setState({
      formRecommended: event.target.value,
    }, () => {
      console.log('Current Selection from Recommended: ', this.state.formRecommended);
    });
  }

  onFormNameChange(event) {
    this.setState({
      formNameInput: event.target.value,
    }, () => {
      console.log('Current Value from Form Name Input: ', this.state.formNameInput);
    });
  }

  onFormEmailChange(event) {
    this.setState({
      formEmailInput: event.target.value,
    }, () => {
      console.log('Current Value from Form Email Input: ', this.state.formEmailInput);
    });
  }

  onFormSummaryChange(event) {
    this.setState({
      formSummaryInput: event.target.value,
    }, () => {
      console.log('Current Value from Form Summary Input: ', this.state.formSummaryInput);
    });
  }

  onFormBodyChange(event) {
    this.setState({
      formBodyInput: event.target.value,
    }, () => {
      console.log('Current Value from Form Body Input: ', this.state.formBodyInput);
    });
  }

  onFormSizeChange(event) {
    this.setState({
      formSizeRating: event.target.value,
    }, () => {
      console.log('Current Value from Form Size Rating: ', this.state.formSizeRating);
    });
  }

  onFormWidthChange(event) {
    this.setState({
      formWidthRating: event.target.value,
    }, () => {
      console.log('Current Value from Form Width Rating: ', this.state.formWidthRating);
    });
  }

  onFormComfortChange(event) {
    this.setState({
      formComfortRating: event.target.value,
    }, () => {
      console.log('Current Value from Form Comfort Rating: ', this.state.formComfortRating);
    });
  }

  onFormQualityChange(event) {
    this.setState({
      formQualityRating: event.target.value,
    }, () => {
      console.log('Current Value from Form Quality Rating: ', this.state.formQualityRating);
    });
  }

  onFormLengthChange(event) {
    this.setState({
      formLengthRating: event.target.value,
    }, () => {
      console.log('Current Value from Form Length Rating: ', this.state.formLengthRating);
    });
  }

  onFormFitChange(event) {
    this.setState({
      formFitRating: event.target.value,
    }, () => {
      console.log('Current Value from Form Fit Rating: ', this.state.formFitRating);
    });
  }

  render() {
    const { characteristics } = this.state;

    const charChange = {
      Size: this.onFormSizeChange.bind(this),
      Width: this.onFormWidthChange.bind(this),
      Comfort: this.onFormComfortChange.bind(this),
      Quality: this.onFormQualityChange.bind(this),
      Length: this.onFormLengthChange.bind(this),
      Fit: this.onFormFitChange.bind(this),
    };

    return (
      <div>
        <form>
          <div className="form-group row">
            <div className="col">
              {/* What is your nickname */}
              <input type="text" className="form-control" placeholder="Nickname" value={this.state.formNameInput} onChange={this.onFormNameChange.bind(this)} />
            </div>
            <div className="col-8">
              {/* Your email */}
              <input type="email" className="form-control" placeholder="youremail@email.com" value={this.state.formEmailInput} onChange={this.onFormEmailChange.bind(this)} />
              <small className="form-text text-muted">Put a fake email</small>
            </div>
          </div>
          <div className="form-group row">
            {/* Overall Rating */}
            <div id="OverallRating" className="col-4" onChange={this.onStarRatingChange.bind(this)}>
              {/* <label htmlFor="OverallRating">How Many Stars?</label> */}
              <small className="form-text">How many stars would you rate this?</small>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="starRatingRadioOption" id="starRatingOption1" value={1} />
                <label className="form-check-label" htmlFor="starRatingOption1">1</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="starRatingRadioOption" id="starRatingOption2" value={2} />
                <label className="form-check-label" htmlFor="starRatingOption2">2</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="starRatingRadioOption" id="starRatingOption3" value={3} />
                <label className="form-check-label" htmlFor="starRatingOption3">3</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="starRatingRadioOption" id="starRatingOption4" value={4} />
                <label className="form-check-label" htmlFor="starRatingOption4">4</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="starRatingRadioOption" id="starRatingOption5" value={5} />
                <label className="form-check-label" htmlFor="starRatingOption5">5</label>
              </div>
            </div>
            {/* Do you recommend this product? */}
            <div id="Recommend" className="col" onChange={this.onRecommendedChange.bind(this)}>
              {/* <label htmlFor="Recommend">Do you recommend this product?</label> */}
              <small className="form-text">Do you recommend this product?</small>
              <div className="form-check form-check-inline">
                <input className="for-check-input" type="radio" name="recommendOption" id="recommendYes" value />
                <label className="form-check-label" htmlFor="recommendYes">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="for-check-input" type="radio" name="recommendOption" id="recommendNo" value={false} />
                <label className="form-check-label" htmlFor="recommendNo">No</label>
              </div>
            </div>
          </div>
          {/* Characteristics */}
          <div className="form-group">
            <div className="row">
              <div className="col align-self-start">
                Please Rate Each Characteristic:
              </div>
            </div>
            <div className="row">
              {this.props.characteristics
                ? this.props.characteristics.map((type) => {
                  console.log('Inside forEach', type[0]);
                  return (
                    <div className="col-4">
                      <div className="row align-self-start">
                        <div className="col">
                          {type[0]}
                        </div>
                      </div>
                      <div className="row align-self-end">
                        <div className="col">
                          <div className="form-group" onChange={charChange[type[0]]}>
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name={`${type[0]}RatingOption`} id={`${type[0]}RatingOption1`} value={1} />
                              <label className="form-check-label" htmlFor={`${type[0]}RatingOption1`}>1</label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name={`${type[0]}RatingOption`} id={`${type[0]}RatingOption2`} value={2} />
                              <label className="form-check-label" htmlFor={`${type[0]}RatingOption2`}>2</label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name={`${type[0]}RatingOption`} id={`${type[0]}RatingOption3`} value={3} />
                              <label className="form-check-label" htmlFor={`${type[0]}RatingOption3`}>3</label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name={`${type[0]}RatingOption`} id={`${type[0]}RatingOption4`} value={4} />
                              <label className="form-check-label" htmlFor={`${type[0]}RatingOption4`}>4</label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name={`${type[0]}RatingOption`} id={`${type[0]}RatingOption5`} value={5} />
                              <label className="form-check-label" htmlFor={`${type[0]}RatingOption5`}>5</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
                : "Hasn't loaded"}
            </div>
          </div>
          {/* Review Summary input - text */}
          <div className="form-group row">
            <div className="col">
              <input type="text" className="form-control" placeholder="Review Summary" value={this.state.formSummaryInput} onChange={this.onFormSummaryChange.bind(this)} />
            </div>
          </div>
          {/* Review Body - textarea */}
          <div className="form-group row">
            <div className="col">
              <textarea className="form-control" rows="6" placeholder="Your Review" value={this.state.formBodyInput} onChange={this.onFormBodyChange.bind(this)} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddReview;
