import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  // rating	          int	    Integer (1-5) indicating the review rating
  // summary	        text	  Summary text of the review
  // body	            text	  Continued or full text of the review
  // recommend	      bool	  Value indicating if the reviewer recommends the product
  // name	            text	  Username for question asker
  // email	          text	  Email address for question asker
  // photos	          [text]	Array of text urls that link to images to be shown
  // characteristics	object	Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...} (must send at least an empty object)

  render() {
    return (
      <div>
        <form>
          <div className="form-group row">
            {/* Overall Rating */}
            <div id="OverallRating" className="col-4">
              {/* <label htmlFor="OverallRating">How Many Stars?</label> */}
              <small className="form-text">How many stars would you rate this?</small>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="starRatingRadioOption" id="starRatingOption1" value="starRatingOption1" />
                <label className="form-check-label" htmlFor="starRatingOption1">1</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="starRatingRadioOption" id="starRatingOption2" value="starRatingOption2" />
                <label className="form-check-label" htmlFor="starRatingOption2">2</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="starRatingRadioOption" id="starRatingOption3" value="starRatingOption3" />
                <label className="form-check-label" htmlFor="starRatingOption3">3</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="starRatingRadioOption" id="starRatingOption4" value="starRatingOption4" />
                <label className="form-check-label" htmlFor="starRatingOption4">4</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="starRatingRadioOption" id="starRatingOption5" value="starRatingOption5" />
                <label className="form-check-label" htmlFor="starRatingOption5">5</label>
              </div>
            </div>
            {/* Do you recommend this product? */}
            <div id="Recommend" className="col">
              {/* <label htmlFor="Recommend">Do you recommend this product?</label> */}
              <small className="form-text">Do you recommend this product?</small>
              <div className="form-check form-check-inline">
                <input className="for-check-input" type="radio" name="recommendOption" id="recommendYes" value="recommendYes" />
                <label className="form-check-label" htmlFor="recommendYes">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="for-check-input" type="radio" name="recommendOption" id="recommendNo" value="recommendNo" />
                <label className="form-check-label" htmlFor="recommendNo">No</label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col">
              {/* What is your nickname */}
              <input type="text" className="form-control" placeholder="Nickname" />
            </div>
            <div className="col-8">
              {/* Your email */}
              <input type="email" className="form-control" placeholder="youremail@email.com" />
              <small className="form-text text-muted">Put a fake email</small>
            </div>
          </div>
          {/* Review Summary input - text */}
          <div className="form-group row">
            <div className="col">
              <input type="text" className="form-control" placeholder="Review Summary" />
            </div>
          </div>
          {/* Review Body - textarea */}
          <div className="form-group row">
            <div className="col">
              <textarea className="form-control" rows="6" placeholder="Your Review" />
            </div>
          </div>
          {/* Characteristics */}
        </form>
      </div>
    );
  }
}

export default AddReview;
