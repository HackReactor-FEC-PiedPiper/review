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
            <small>
              Helpful?
            </small>
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm m-1 border-0"
            onClick={this.handleHelpfulClick.bind(this)}
            data-toggle="button"
            aria-pressed="false"
          >
            <small>
              <u>
                Yes
              </u>
            </small>
          </button>
          <div className="h6 my-auto font-weight-light text-muted">
            <small>
              {`(${this.props.help})`}
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default Helpfulness;
