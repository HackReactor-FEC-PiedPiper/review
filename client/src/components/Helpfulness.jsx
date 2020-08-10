import React from 'react';
import axios from 'axios';

class Helpfulness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonToggle: false,
    };
  }

  handleHelpfulClick() {
    if (this.state.buttonToggle === false) {
      axios({
        method: 'put',
        url: `http://52.26.193.201:3000/reviews/helpful/${this.props.id}`,
      })
        .then((res) => {
          this.setState({
            buttonToggle: true,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="h6 my-auto font-weight-light text-muted">
            Helpful?
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm m-2"
            onClick={this.handleHelpfulClick.bind(this)}
            data-toggle="button"
            aria-pressed="false"
          >
            <u>
              Yes
            </u>
          </button>
          <div className="h6 my-auto font-weight-light text-muted">
            {`(${this.props.help})`}
          </div>
        </div>
      </div>
    );
  }
}

export default Helpfulness;
