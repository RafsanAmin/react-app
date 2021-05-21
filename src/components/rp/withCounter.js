/* eslint-disable no-unused-vars */
import { Component } from 'react';

export default class Counter extends Component {
  state = { time: 0 };

  handle = () => {
    this.setState((state) => ({
      time: state.time + 1,
    }));
  };

  render() {
    const { time } = this.state;
    const { render } = this.props;
    return render(time, this.handle);
  }
}
