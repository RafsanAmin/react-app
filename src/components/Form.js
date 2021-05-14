import { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'My Text',
      text: 'Give Text',
      library: 'Helloo',
      checked: false,
      otpt: '',
    };
  }

  handleform = (e) => {
    let myval = e.target.value;
    if (myval === 'on' || myval === 'off') {
      myval = e.target.checked;
    }
    console.log(myval);
    this.setState({
      [e.target.name]: myval,
    });
  };

  sH = (e) => {
    e.preventDefault();
    const { title, text, library, checked } = this.state;
    let otpt = `title: ${title}  ${text} ${library} ${checked}`;
    this.setState({
      otpt,
    });
  };

  render() {
    const { title, text, library, checked, otpt } = this.state;
    return (
      <div>
        <form onSubmit={this.sH}>
          <input
            type="text"
            name="title"
            placeholder="Give me text"
            value={title}
            onChange={this.handleform}
          />
          <br />
          <textarea name="text" placeholder="text" value={text} onChange={this.handleform} />
          <br />
          <select name="library" value={library} onChange={this.handleform}>
            <option>Helloo</option>
            <option>Bello</option>
            <option>Lol</option>
          </select>
          <br />
          <input type="checkbox" name="checked" checked={checked} onChange={this.handleform} />
          <br />
          <input type="submit" />
          <br />
          <p>{otpt}</p>
        </form>
      </div>
    );
  }
}

export default Form;
