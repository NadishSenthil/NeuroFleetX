import React, { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="box">
        <h3>Class Counter</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increase}>Increment</button>
        <button onClick={this.decrease}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter;