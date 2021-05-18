import { Component } from 'react';

class Input extends Component {
  render() {
    let { handle, temp, text } = this.props;
    return (
      <div>
        <p>{temp === 'cel' ? 'Celcius' : 'Farenheit'}</p>
        <input name={temp} type="text" value={text} onChange={handle} />
      </div>
    );
  }
}
export default Input;
