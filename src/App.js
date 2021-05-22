import React from 'react';
import Button from './components/Button';
import ThemeContext from './components/context/themeContext';
import DblClick from './components/dblClick';
import Counter from './components/rp/withCounter';
import Section from './components/Section';
import './css/st.css';

class App extends React.Component {
  state = {
    theme: 'blue',
    switchTheme: () => {
      const { theme } = this.state;
      if (theme === 'dark') {
        this.setState({ theme: 'blue' });
      } else if (theme === 'blue') {
        this.setState({ theme: 'light' });
      } else {
        this.setState({ theme: 'dark' });
      }
    },
  };

  render() {
    const { theme, switchTheme } = this.state;
    return (
      <div>
        <Counter
          render={(time, handle) => <Button inCount={handle} count={time} theme={theme} />}
        />
        <ThemeContext.Provider value={{ theme, sT: switchTheme }}>
          {' '}
          <Section />
        </ThemeContext.Provider>

        <Counter render={(time, handle) => <DblClick inCount={handle} count={time} />} />
      </div>
    );
  }
}

export default App;
