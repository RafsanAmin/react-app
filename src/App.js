import Button from './components/Button';
import DblClick from './components/dblClick';
import HoverCounter from './components/HoverCounter';
import Counter from './components/rp/withCounter';
import './css/st.css';

function App() {
  return (
    <div>
      <Counter render={(time, handle) => <Button inCount={handle} count={time} />} />
      <Counter render={(time, handle) => <HoverCounter inCount={handle} count={time} />} />
      <Counter render={(time, handle) => <DblClick inCount={handle} count={time} />} />
    </div>
  );
}

export default App;
