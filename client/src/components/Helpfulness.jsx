import React from 'react';

class Helpfulness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="h6 my-auto font-weight-light">
            Helpful?
          </div>
          <button type="button" className="btn btn-outline-secondary btn-sm m-2">
            <u>
              Yes
            </u>
          </button>
          <div className="h6 my-auto font-weight-light">
            {`(${this.props.help})`}
          </div>
        </div>
      </div>
    );
  }
}

export default Helpfulness;
