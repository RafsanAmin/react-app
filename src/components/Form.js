import { Component } from 'react';
import BoilingBool from './BoilingBool';
import Input from './Input';
import Convert from './lib/convert';

class Form extends Component {
  state = { cel: '', far: '' };

  handleChange = (e) => {
    let { name, value } = e.target;
    let oppositeTemp;
    let oppositeVal;
    if (name === 'cel') {
      oppositeTemp = 'far';
      oppositeVal = Convert('f', parseFloat(value));
    } else {
      oppositeTemp = 'cel';
      oppositeVal = Convert('c', parseFloat(value));
    }
    if (!oppositeVal) {
      oppositeVal = 0;
    }
    this.setState({
      [name]: value,
      [oppositeTemp]: oppositeVal.toString(),
    });
  };

  render() {
    const { cel, far } = this.state;
    return (
      <div>
        <Input text={cel} handle={this.handleChange} temp="cel" />
        <Input text={far} handle={this.handleChange} temp="far" />
        <BoilingBool value={(cel, far)} boil={cel} />
      </div>
    );
  }
}
export default Form;
