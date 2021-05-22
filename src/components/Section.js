import { useContext } from 'react';
import ThemeContext from './context/themeContext';
import HoverCounter from './HoverCounter';
import Counter from './rp/withCounter';

function Section() {
  const context = useContext(ThemeContext);
  const { theme, sT } = context;
  return (
    <div>
      <h1>Hi My Name is HRM Rafsan Amin</h1>
      <Counter
        render={(time, handle) => (
          <HoverCounter inCount={handle} count={time} theme={theme} st={sT} />
        )}
      />
    </div>
  );
}
export default Section;
