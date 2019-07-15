import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const { number } = this.state;
    const increment = number + 1;
    this.setState({
      number: increment,
    });
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <h3>{number}</h3>
        <button type="button" onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}
export default Counter;
