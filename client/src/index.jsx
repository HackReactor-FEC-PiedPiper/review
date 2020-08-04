import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}




ReactDOM.render(<Test />, document.getElementById('app'));